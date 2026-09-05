/**
 * 根据 2026 QS World University Rankings 为 CS_offers_processed.csv 增加排名列
 */
import * as fs from "fs";
import * as path from "path";

const QS_PATH = path.join(__dirname, "../meta/2026_QS_World University_Rankings.csv");
const OFFERS_PATH = path.join(__dirname, "../meta/CS_offers_processed.csv");

/** 解析 CSV，支持引号内逗号/换行 */
function parseCSV(content: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < content.length; i++) {
    const c = content[i];
    if (inQuotes) {
      if (c === '"') inQuotes = false;
      else field += c;
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      continue;
    }
    if (c === ",") {
      row.push(field.trim());
      field = "";
      continue;
    }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && content[i + 1] === "\n") i++;
      row.push(field.trim());
      field = "";
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      continue;
    }
    field += c;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field.trim());
    if (row.some((cell) => cell.length > 0)) rows.push(row);
  }
  return rows;
}

function escapeCsvCell(s: string): string {
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

/** 从 offers 的学校名映射到 QS 表中的 Name（用于名称不完全一致时） */
const OFFER_SCHOOL_TO_QS_NAME: Record<string, string> = {
  "The Ohio State University": "Ohio State University",
  "Queen's University": "Queen's University, Ontario",
  "University of British Columbia (UBCO)": "University of British Columbia",
  "Rochester Institute of Technology": "Rochester Institute of Technology (RIT)",
  "Binghamton University": "Binghamton University SUNY",
  "University of New South Wales": "The University of New South Wales",
};

function main() {
  const qsContent = fs.readFileSync(QS_PATH, "utf-8");
  const qsRows = parseCSV(qsContent);
  const qsHeader = qsRows[0];
  const rankIdx = qsHeader.indexOf("Rank");
  const nameIdx = qsHeader.indexOf("Name");
  if (rankIdx < 0 || nameIdx < 0) throw new Error("QS CSV missing Rank or Name column");

  const nameToRank = new Map<string, string>();
  for (let i = 1; i < qsRows.length; i++) {
    const row = qsRows[i];
    const name = (row[nameIdx] ?? "").trim();
    const rank = (row[rankIdx] ?? "").trim();
    if (!name) continue;
    nameToRank.set(name, rank);
  }

  const offersContent = fs.readFileSync(OFFERS_PATH, "utf-8").replace(/^\uFEFF/, "");
  const offerRows = parseCSV(offersContent);
  const offerHeader = offerRows[0];
  const nameColIdx = offerHeader.indexOf("姓名");
  const countryIdx = offerHeader.indexOf("国家");
  const schoolIdx = offerHeader.indexOf("学校");
  const majorIdx = offerHeader.indexOf("专业");
  if (schoolIdx < 0) throw new Error("Offers CSV missing 学校 column");

  const newHeader = ["姓名", "国家", "学校", "QS排名", "专业"];
  const outRows: string[][] = [newHeader];

  for (let i = 1; i < offerRows.length; i++) {
    const row = offerRows[i];
    const name = row[nameColIdx] ?? "";
    const country = row[countryIdx] ?? "";
    const school = row[schoolIdx] ?? "";
    const major = row[majorIdx] ?? "";
    const qsName = OFFER_SCHOOL_TO_QS_NAME[school] ?? school;
    const rank = nameToRank.get(qsName) ?? "";
    outRows.push([name, country, school, rank, major]);
  }

  const csvContent =
    outRows.map((r) => r.map(escapeCsvCell).join(",")).join("\n") + "\n";
  fs.writeFileSync(OFFERS_PATH, "\uFEFF" + csvContent, "utf-8");
  const matched = outRows.slice(1).filter((r) => r[3].length > 0).length;
  console.log(`Added QS rankings. Matched ${matched}/${outRows.length - 1} schools.`);
}

main();
