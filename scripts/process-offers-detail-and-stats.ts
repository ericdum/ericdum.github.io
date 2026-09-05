/**
 * 处理 CS_offers_processed.csv：
 * 1. 明细数据：姓名只保留姓，输出 CS_offers_detail.csv
 * 2. 统计数据：各国 offer 数量、QS50/100 以内数量、各专业 offer 数量，输出 CS_offers_stats.csv
 */
import * as fs from "fs";
import * as path from "path";

const OFFERS_PATH = path.join(__dirname, "../meta/CS_offers_processed.csv");
const DETAIL_PATH = path.join(__dirname, "../meta/CS_offers_detail.csv");
const STATS_PATH = path.join(__dirname, "../meta/CS_offers_stats.csv");

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

/** 姓名只保留姓：中文取首字，英文取最后一个词 */
function getFamilyName(name: string): string {
  const t = name.trim();
  if (!t) return "";
  if (/[\u4e00-\u9fa5]/.test(t)) return t[0];
  const parts = t.split(/\s+/);
  return parts[parts.length - 1] ?? t;
}

/** 解析 QS 排名为数字（取区间下限），空或无效返回 null */
function parseQSRank(rankStr: string): number | null {
  const s = (rankStr ?? "").trim();
  if (!s) return null;
  const num = parseInt(s.replace(/-.*$/, ""), 10);
  return Number.isNaN(num) ? null : num;
}

function main() {
  const content = fs.readFileSync(OFFERS_PATH, "utf-8").replace(/^\uFEFF/, "");
  const rows = parseCSV(content);
  const header = rows[0];
  const nameIdx = header.indexOf("姓名");
  const countryIdx = header.indexOf("国家");
  const schoolIdx = header.indexOf("学校");
  const qsIdx = header.indexOf("QS排名");
  const majorIdx = header.indexOf("专业");
  if (nameIdx < 0 || countryIdx < 0 || majorIdx < 0) throw new Error("Missing column");

  const dataRows = rows.slice(1);

  // ---------- 明细：姓名改为姓 ----------
  const detailHeader = ["姓", "国家", "学校", "QS排名", "专业"];
  const detailRows: string[][] = [detailHeader];
  for (const row of dataRows) {
    const familyName = getFamilyName(row[nameIdx] ?? "");
    detailRows.push([
      familyName,
      row[countryIdx] ?? "",
      row[schoolIdx] ?? "",
      row[qsIdx] ?? "",
      row[majorIdx] ?? "",
    ]);
  }
  fs.writeFileSync(
    DETAIL_PATH,
    "\uFEFF" + detailRows.map((r) => r.map(escapeCsvCell).join(",")).join("\n") + "\n",
    "utf-8"
  );
  console.log(`Written detail: ${DETAIL_PATH} (${dataRows.length} rows)`);

  // ---------- 统计 ----------
  const byCountry = new Map<string, number>();
  let qs50 = 0;
  let qs100 = 0;
  const byMajor = new Map<string, number>();

  for (const row of dataRows) {
    const country = (row[countryIdx] ?? "").trim();
    const qsRank = parseQSRank(row[qsIdx] ?? "");
    const major = (row[majorIdx] ?? "").trim();

    if (country) byCountry.set(country, (byCountry.get(country) ?? 0) + 1);
    if (qsRank !== null) {
      if (qsRank <= 50) qs50++;
      if (qsRank <= 100) qs100++;
    }
    if (major) byMajor.set(major, (byMajor.get(major) ?? 0) + 1);
  }

  const statsLines: string[][] = [];
  statsLines.push([escapeCsvCell("各国offer数量")]);
  statsLines.push(["国家", "数量"]);
  for (const [c, n] of [...byCountry.entries()].sort((a, b) => b[1] - a[1])) {
    statsLines.push([escapeCsvCell(c), String(n)]);
  }
  statsLines.push([]);
  statsLines.push([escapeCsvCell("QS排名")]);
  statsLines.push(["统计项", "数量"]);
  statsLines.push(["QS50以内offer数量", String(qs50)]);
  statsLines.push(["QS100以内offer数量", String(qs100)]);
  statsLines.push([]);
  statsLines.push([escapeCsvCell("各专业offer数量")]);
  statsLines.push(["专业", "数量"]);
  for (const [m, n] of [...byMajor.entries()].sort((a, b) => b[1] - a[1])) {
    statsLines.push([escapeCsvCell(m), String(n)]);
  }

  const statsCsv =
    statsLines.map((r) => (r.length === 1 ? r[0] : r.join(","))).join("\n") + "\n";
  fs.writeFileSync(STATS_PATH, "\uFEFF" + statsCsv, "utf-8");
  console.log(`Written stats: ${STATS_PATH}`);
  console.log(`  QS50以内: ${qs50}, QS100以内: ${qs100}`);
}

main();
