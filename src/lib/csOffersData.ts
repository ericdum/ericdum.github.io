/**
 * 升学统计：来自 CS_offers_detail.csv 与 CS_offers_stats.csv
 * 1. 不重复的 (学校, 专业, 排名)
 * 2. 各国数量、QS50/100 数量、各专业数量
 */

export type SchoolOffer = {
  school: string;
  major: string;
  rank: string; // 原始如 "29" 或 "741-750"，空表示无排名
  rankDisplay: string; // 展示用，如 "2026 QS #29"
};

export type CountryStat = { country: string; count: number; countryCode: string };
export type MajorStat = { major: string; count: number };

// 不重复的 (学校, 专业, 排名)，按学校名、专业排序
export const uniqueSchoolOffers: SchoolOffer[] = [
  { school: "Binghamton University", major: "Engineering", rank: "1001-1200", rankDisplay: "2026 QS #1001-1200" },
  { school: "Bryant University", major: "Data Science", rank: "", rankDisplay: "—" },
  { school: "Durham University", major: "Computer Science", rank: "94", rankDisplay: "2026 QS #94" },
  { school: "Michigan State University", major: "Computer Science", rank: "161", rankDisplay: "2026 QS #161" },
  { school: "Michigan State University", major: "Computer Engineering", rank: "161", rankDisplay: "2026 QS #161" },
  { school: "Michigan State University", major: "Engineering (Exploratory)", rank: "161", rankDisplay: "2026 QS #161" },
  { school: "Michigan State University", major: "Statistics", rank: "161", rankDisplay: "2026 QS #161" },
  { school: "Northeastern University", major: "Computer Science", rank: "384", rankDisplay: "2026 QS #384" },
  { school: "Northeastern University", major: "Engineering", rank: "384", rankDisplay: "2026 QS #384" },
  { school: "Northeastern University", major: "Electrical and Computer Engineering", rank: "384", rankDisplay: "2026 QS #384" },
  { school: "Northeastern University", major: "Electrical Engineering and Physics", rank: "384", rankDisplay: "2026 QS #384" },
  { school: "Northeastern University", major: "Engineering", rank: "384", rankDisplay: "2026 QS #384" },
  { school: "Queen's University", major: "Computer Science", rank: "191", rankDisplay: "2026 QS #191" },
  { school: "Queen's University", major: "Electrical and Computer Engineering", rank: "191", rankDisplay: "2026 QS #191" },
  { school: "Rochester Institute of Technology", major: "Computer Science", rank: "951-1000", rankDisplay: "2026 QS #951-1000" },
  { school: "Rochester Institute of Technology", major: "Computer Engineering", rank: "951-1000", rankDisplay: "2026 QS #951-1000" },
  { school: "Rochester Institute of Technology", major: "Engineering", rank: "951-1000", rankDisplay: "2026 QS #951-1000" },
  { school: "Rochester Institute of Technology", major: "Imaging Science", rank: "951-1000", rankDisplay: "2026 QS #951-1000" },
  { school: "Rose-Hulman Institute of Technology", major: "Electrical Engineering", rank: "", rankDisplay: "—" },
  { school: "Santa Clara University", major: "Engineering", rank: "", rankDisplay: "—" },
  { school: "Simon Fraser University", major: "Computer Science", rank: "308", rankDisplay: "2026 QS #308" },
  { school: "Stevens Institute of Technology", major: "Computer Science", rank: "673", rankDisplay: "2026 QS #673" },
  { school: "Stevens Institute of Technology", major: "Computer Engineering", rank: "673", rankDisplay: "2026 QS #673" },
  { school: "Stevens Institute of Technology", major: "Engineering (Undecided)", rank: "673", rankDisplay: "2026 QS #673" },
  { school: "Syracuse University", major: "Computer Science", rank: "741-750", rankDisplay: "2026 QS #741-750" },
  { school: "The Ohio State University", major: "Computer Engineering", rank: "190", rankDisplay: "2026 QS #190" },
  { school: "The Ohio State University", major: "Computer Science and Engineering", rank: "190", rankDisplay: "2026 QS #190" },
  { school: "The Ohio State University", major: "Engineering Physics", rank: "190", rankDisplay: "2026 QS #190" },
  { school: "The University of Hong Kong", major: "Electrical and Electronic Engineering", rank: "11", rankDisplay: "2026 QS #11" },
  { school: "University of British Columbia", major: "Computer Science", rank: "40", rankDisplay: "2026 QS #40" },
  { school: "University of British Columbia (UBCO)", major: "Computer Science", rank: "40", rankDisplay: "2026 QS #40" },
  { school: "University of California, Davis", major: "Computer Engineering", rank: "114", rankDisplay: "2026 QS #114" },
  { school: "University of California, Davis", major: "Electrical Engineering", rank: "114", rankDisplay: "2026 QS #114" },
  { school: "University of California, Davis", major: "Physics", rank: "114", rankDisplay: "2026 QS #114" },
  { school: "University of California, Irvine", major: "Computer Engineering", rank: "293", rankDisplay: "2026 QS #293" },
  { school: "University of California, Merced", major: "Computer Science and Engineering", rank: "", rankDisplay: "—" },
  { school: "University of California, Riverside", major: "Computer Science", rank: "440", rankDisplay: "2026 QS #440" },
  { school: "University of California, Riverside", major: "Robotics", rank: "440", rankDisplay: "2026 QS #440" },
  { school: "University of California, Santa Cruz", major: "Computer Science", rank: "458", rankDisplay: "2026 QS #458" },
  { school: "University of Connecticut", major: "Computer Science", rank: "534", rankDisplay: "2026 QS #534" },
  { school: "University of Connecticut", major: "Statistics", rank: "534", rankDisplay: "2026 QS #534" },
  { school: "University of Exeter", major: "Computer Science", rank: "155", rankDisplay: "2026 QS #155" },
  { school: "University of New South Wales", major: "Computer Science", rank: "20", rankDisplay: "2026 QS #20" },
  { school: "University of Ottawa", major: "Computer Science", rank: "219", rankDisplay: "2026 QS #219" },
  { school: "University of Southampton", major: "Computer Science", rank: "87", rankDisplay: "2026 QS #87" },
  { school: "University of Toronto", major: "Computer Science", rank: "29", rankDisplay: "2026 QS #29" },
  { school: "University of Toronto", major: "Electrical and Computer Engineering", rank: "29", rankDisplay: "2026 QS #29" },
  { school: "University of Toronto", major: "Statistics", rank: "29", rankDisplay: "2026 QS #29" },
  { school: "Washington University in St. Louis", major: "Computer Science", rank: "167", rankDisplay: "2026 QS #167" },
];

// 国家名称 -> 国旗 code (flagcdn.com)
const countryToCode: Record<string, string> = {
  "美国": "us",
  "加拿大": "ca",
  "英国": "gb",
  "澳大利亚": "au",
  "中国香港": "hk",
};

export const admissionStats = {
  byCountry: [
    { country: "美国", count: 41, countryCode: "us" },
    { country: "加拿大", count: 11, countryCode: "ca" },
    { country: "英国", count: 3, countryCode: "gb" },
    { country: "澳大利亚", count: 1, countryCode: "au" },
    { country: "中国香港", count: 1, countryCode: "hk" },
  ] as CountryStat[],
  qs50Count: 7,
  qs100Count: 9,
  byMajor: [
    { major: "Computer Science", count: 27 },
    { major: "Computer Engineering", count: 7 },
    { major: "Engineering", count: 4 },
    { major: "Statistics", count: 3 },
    { major: "Electrical and Computer Engineering", count: 3 },
    { major: "Computer Science and Engineering", count: 2 },
    { major: "Electrical Engineering", count: 2 },
    { major: "Robotics", count: 1 },
    { major: "Electrical and Electronic Engineering", count: 1 },
    { major: "Physics", count: 1 },
    { major: "Imaging Science", count: 1 },
    { major: "Engineering (Undecided)", count: 1 },
    { major: "Engineering (Exploratory)", count: 1 },
    { major: "Engineering Physics", count: 1 },
    { major: "Electrical Engineering and Physics", count: 1 },
    { major: "Data Science", count: 1 },
  ] as MajorStat[],
};

export function getCountryCode(country: string): string {
  return countryToCode[country] ?? "xx";
}
