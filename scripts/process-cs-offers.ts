/**
 * 将 meta/CS offers.csv 处理为：姓名、国家、学校、专业
 * 学校名称和专业名称统一后输出到新文件
 */
import * as fs from "fs";
import * as path from "path";

const INPUT = path.join(__dirname, "../meta/CS offers.csv");
const OUTPUT = path.join(__dirname, "../meta/CS_offers_processed.csv");

// 国家统一：英文/缩写 -> 中文
const COUNTRY_MAP: Record<string, string> = {
  US: "美国",
  美国: "美国",
  Canada: "加拿大",
  加拿大: "加拿大",
  UK: "英国",
  AUS: "澳大利亚",
  中国香港: "中国香港",
};

// 学校名称统一：各种写法 -> 标准名称
const SCHOOL_MAP: Record<string, string> = {
  "Ottawa University": "University of Ottawa",
  "(Canada) Ottawa University": "University of Ottawa",
  "Queens University": "Queen's University",
  "(Canada) Queens University": "Queen's University",
  "Queen's University": "Queen's University",
  "Simon Fraser University (IFC)": "Simon Fraser University",
  "(Canada) Simon Fraser University (IFC)": "Simon Fraser University",
  "University of British Columnbia (UBCO)": "University of British Columbia (UBCO)",
  "(Canada) University of British Columnbia (UBCO)": "University of British Columbia (UBCO)",
  "UofT - Green Path": "University of Toronto",
  "(Canada) UofT - Green Path": "University of Toronto",
  "Durham University": "Durham University",
  "(UK) Durham University": "Durham University",
  "University of Exeter": "University of Exeter",
  "(UK) University of Exeter": "University of Exeter",
  "University of Southampton": "University of Southampton",
  "(UK) University of Southampton": "University of Southampton",
  MSU: "Michigan State University",
  SIT: "Stevens Institute of Technology",
  "Stevens Institute of Tech": "Stevens Institute of Technology",
  "Syracuse University": "Syracuse University",
  "UC Riverside": "University of California, Riverside",
  "University of Connecticut": "University of Connecticut",
  "UC Santa Cruz": "University of California, Santa Cruz",
  "Stevens Institute of Technology": "Stevens Institute of Technology",
  "UC Davis": "University of California, Davis",
  "University of California, Davis": "University of California, Davis",
  "UC Irvine": "University of California, Irvine",
  "UC Merced": "University of California, Merced",
  "Rochester Institute of Technology": "Rochester Institute of Technology",
  "Northeastern University": "Northeastern University",
  "The Ohio State University": "The Ohio State University",
  "Michigan State University": "Michigan State University",
  "University of New South Wales": "University of New South Wales",
  "Santa Clara University": "Santa Clara University",
  "The University of Hong Kong": "The University of Hong Kong",
  "The University of British Columbia, Vancouver": "University of British Columbia",
  "University of British Columbia": "University of British Columbia",
  "Rose-Hulman Institute of Technology": "Rose-Hulman Institute of Technology",
  "Binghamton University": "Binghamton University",
  "Washington University in St. Louis": "Washington University in St. Louis",
  "University of Toronto": "University of Toronto",
  "University of Ottawa": "University of Ottawa",
  "Bryant University": "Bryant University",
};

// 专业名称统一：各种写法 -> 标准名称（取第一个匹配或最终规范化）
const MAJOR_ALIAS: Record<string, string> = {
  CS: "Computer Science",
  "Computer Science (co-op)": "Computer Science",
  "Computer Science (co-op) Environmental Science (co-op)": "Computer Science",
  "Computer Science (Co-Op) Environmental Science (Co-Op)": "Computer Science",
  "Environmental Science (co-op)": "Environmental Science",
  "Computer Science and Engineering": "Computer Science and Engineering",
  "Computer Science&Engineering": "Computer Science and Engineering",
  "Computer Science, B.S.": "Computer Science",
  "BS in Computer Science and Engineering": "Computer Science and Engineering",
  "BS in Computer Science": "Computer Science",
  "BS in Computer Engineering": "Computer Engineering",
  "Bachelor of Science - Computer Science": "Computer Science",
  "BSc in Electrical Engineering": "Electrical Engineering",
  "Electrical and electronics engineering": "Electrical and Electronic Engineering",
  "Electrical and Computer Engineering": "Electrical and Computer Engineering",
  "Computer Engineering Preference": "Computer Engineering",
  "Computer Science: Computer Game Design, B.S.": "Computer Science (Game Design)",
  "Computer Science: Computer\nGame Design, B.S.": "Computer Science (Game Design)",
  "Engineering Undecided": "Engineering (Undecided)",
  "Engineering - Exploratory": "Engineering (Exploratory)",
  "General Engineering": "Engineering",
  Engineering: "Engineering",
  "BS in Electrical Engineering,BS in Mathematics": "Electrical Engineering", // 取第一个
  "BS in Physics,BS in Materials Science and Engineering": "Physics",
  "Imaging Science": "Imaging Science",
  "BS in Engineering Physics": "Engineering Physics",
  "Electrical Engineering and Physics": "Electrical Engineering and Physics",
  "Data Science": "Data Science",
  "Data Science and Analytics, B.A.": "Data Science and Analytics",
  "Business Analytics Emphasis": "Business Analytics",
  "Robotics, B.S.": "Robotics",
  Statistics: "Statistics",
};

function normalizeCountry(raw: string): string {
  const key = raw.trim();
  return COUNTRY_MAP[key] ?? key;
}

function normalizeSchool(raw: string): string {
  const key = raw.trim().replace(/^\((Canada|UK)\)\s*/i, "");
  return SCHOOL_MAP[key] ?? SCHOOL_MAP[raw.trim()] ?? raw.trim();
}

/** 从多行/多选项中取第一个专业并统一名称 */
function pickFirstMajor(text: string): string {
  // 先整块规范化
  let s = text
    .replace(/\r\n/g, "\n")
    .replace(/\s+/g, " ")
    .trim();
  // 按常见分隔拆成多个：换行、数字序号、逗号
  const parts = s
    .split(/\n|[,，]|\d[.．]、?\s*|\s{2,}(?=[A-Z])/)
    .map((p) => p.replace(/\s*(B\.S\.|B\.A\.|BS in|Bachelor of Science)\s*[-–]?\s*/gi, "").trim())
    .filter((p) => p.length > 0 && /[A-Za-z\u4e00-\u9fa5]/.test(p)); // 去掉纯数字等
  let first = (parts[0] ?? s).trim();
  // 去掉末尾粘连的序号如 "Computer Science 2"
  first = first.replace(/\s+\d\s*$/, "");
  return first;
}

function normalizeMajor(raw: string): string {
  const first = pickFirstMajor(raw);
  // 精确匹配
  if (MAJOR_ALIAS[first]) return MAJOR_ALIAS[first];
  // 去掉 B.S. / B.A. / BS in 等后缀再匹配
  const withoutDegree = first
    .replace(/\s*,?\s*B\.S\.\s*$/i, "")
    .replace(/\s*,?\s*B\.A\.\s*$/i, "")
    .replace(/\s*BS in\s*/i, "")
    .replace(/\s*Bachelor of Science\s*[-–]?\s*/i, "")
    .trim();
  if (MAJOR_ALIAS[withoutDegree]) return MAJOR_ALIAS[withoutDegree];
  if (withoutDegree === "Computer Science") return "Computer Science";
  if (withoutDegree === "Computer Engineering") return "Computer Engineering";
  if (withoutDegree === "Electrical Engineering") return "Electrical Engineering";
  if (withoutDegree === "Statistics") return "Statistics";
  if (withoutDegree === "Computer Science and Engineering") return "Computer Science and Engineering";
  // 首字母大写形式
  const titleCase = withoutDegree.replace(/\b\w/g, (c) => c.toUpperCase());
  return titleCase || first;
}

/** 简单 CSV 解析，支持带引号的字段（含换行） */
function parseCSV(content: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < content.length; i++) {
    const c = content[i];
    if (inQuotes) {
      if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
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

function main() {
  const content = fs.readFileSync(INPUT, "utf-8");
  const rows = parseCSV(content);
  const header = ["姓名", "国家", "学校", "专业"];
  const outRows: string[][] = [header];

  for (const row of rows) {
    const name = (row[1] ?? "").trim();
    const countryRaw = (row[3] ?? "").trim();
    const schoolRaw = (row[4] ?? "").trim();
    const majorRaw = (row[5] ?? "").trim();
    if (!name && !schoolRaw && !majorRaw) continue;

    const country = normalizeCountry(countryRaw);
    const school = normalizeSchool(schoolRaw);
    const major = normalizeMajor(majorRaw);
    outRows.push([name, country, school, major]);
  }

  const csvContent =
    outRows.map((r) => r.map(escapeCsvCell).join(",")).join("\n") + "\n";
  fs.writeFileSync(OUTPUT, "\uFEFF" + csvContent, "utf-8"); // BOM for Excel 中文
  console.log(`Written ${outRows.length - 1} rows to ${OUTPUT}`);
}

main();
