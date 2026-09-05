/**
 * 生成全站数据为AI爬虫友好的静态文件
 * 生成JSON和Markdown两种格式，方便AI访问和阅读
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { getProfile } from '../src/lib/api/profile';
import { getProjects } from '../src/lib/api/projects';
import { getNews } from '../src/lib/api/news';
import { getPatents } from '../src/lib/api/patents';
import { getLife } from '../src/lib/api/life';
import { getCourses, getStudents, getStudentReviews, getStudentProjects } from '../src/lib/api/teaching';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateAIData() {
  try {
    console.log('开始生成AI可读数据文件...');

    // 获取所有数据
    console.log('正在获取数据...');
    const [
      profile,
      projects,
      news,
      patents,
      life,
      courses,
      students,
      studentReviews,
      studentProjects
    ] = await Promise.all([
      getProfile(),
      getProjects(),
      getNews(),
      getPatents(),
      getLife(),
      getCourses(),
      getStudents(),
      getStudentReviews(),
      getStudentProjects()
    ]);

    // 组织数据结构
    const siteData = {
      metadata: {
        generatedAt: new Date().toISOString(),
        version: '1.0',
        description: '全站数据导出，方便AI爬虫阅读',
        language: 'zh-CN, en-US'
      },
      profile,
      projects,
      news,
      patents,
      life,
      teaching: {
        courses,
        students,
        studentReviews,
        studentProjects
      }
    };

    // 确保public目录存在
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // 生成JSON文件
    const jsonOutput = JSON.stringify(siteData, null, 2);
    const jsonPath = path.join(publicDir, 'site-data.json');
    fs.writeFileSync(jsonPath, jsonOutput, 'utf-8');
    console.log(`✓ JSON文件已生成: ${jsonPath}`);

    // 生成Markdown文件
    const markdown = generateMarkdown(siteData);
    const mdPath = path.join(publicDir, 'site-data.md');
    fs.writeFileSync(mdPath, markdown, 'utf-8');
    console.log(`✓ Markdown文件已生成: ${mdPath}`);

    // 生成纯文本版本（去除HTML标签）
    const textPath = path.join(publicDir, 'site-data.txt');
    const text = generatePlainText(siteData);
    fs.writeFileSync(textPath, text, 'utf-8');
    console.log(`✓ 纯文本文件已生成: ${textPath}`);

    console.log('\n✅ 所有文件生成完成！');
    console.log('\n生成的文件：');
    console.log('  - /site-data.json (结构化JSON数据)');
    console.log('  - /site-data.md (Markdown格式，人类和AI都易读)');
    console.log('  - /site-data.txt (纯文本格式，去除所有格式)');
    console.log('\n这些文件可以通过以下URL访问：');
    console.log('  - https://your-domain.com/site-data.json');
    console.log('  - https://your-domain.com/site-data.md');
    console.log('  - https://your-domain.com/site-data.txt');

  } catch (error) {
    console.error('❌ 生成失败:', error);
    process.exit(1);
  }
}

function generateMarkdown(data: any): string {
  let md = `# 全站数据导出\n\n`;
  md += `**生成时间**: ${data.metadata.generatedAt}\n\n`;
  md += `本文档包含网站的所有公开信息，方便AI爬虫和搜索引擎索引。\n\n`;
  md += `---\n\n`;

  // 个人信息
  md += `## 个人信息\n\n`;
  md += `**姓名**: ${data.profile.name.zh} (${data.profile.name.en})\n\n`;
  md += `**职位**: ${data.profile.title.zh} / ${data.profile.title.en}\n\n`;
  md += `**当前职位**: ${data.profile.currentPosition.zh} / ${data.profile.currentPosition.en}\n\n`;
  md += `**邮箱**: ${data.profile.email}\n\n`;
  md += `**简介**:\n\n${data.profile.bio.zh}\n\n${data.profile.bio.en}\n\n`;

  if (data.profile.seekingOpportunities) {
    md += `**寻求机会**: ${data.profile.seekingOpportunities.zh} / ${data.profile.seekingOpportunities.en}\n\n`;
  }

  // 教育背景
  if (data.profile.education && data.profile.education.length > 0) {
    md += `### 教育背景\n\n`;
    data.profile.education.forEach((edu: any) => {
      md += `- **${edu.degree.zh}** (${edu.degree.en}), ${edu.major.zh} (${edu.major.en}), ${edu.school.zh} (${edu.school.en}), ${edu.year}\n`;
    });
    md += `\n`;
  }

  // 证书
  if (data.profile.certifications && data.profile.certifications.length > 0) {
    md += `### 证书\n\n`;
    data.profile.certifications.forEach((cert: any) => {
      md += `- **${cert.name.zh}** (${cert.name.en}), ${cert.issuer.zh} (${cert.issuer.en}), ${cert.year}\n`;
    });
    md += `\n`;
  }

  // 技能
  if (data.profile.skills && data.profile.skills.length > 0) {
    md += `### 技能\n\n`;
    data.profile.skills.forEach((category: any) => {
      md += `#### ${category.category.zh} / ${category.category.en}\n\n`;
      category.items.forEach((skill: any) => {
        md += `- **${skill.name.zh}** (${skill.name.en}) - ${skill.level.zh} (${skill.level.en})\n`;
        md += `  - ${skill.description.zh}\n`;
        md += `  - ${skill.description.en}\n`;
      });
      md += `\n`;
    });
  }

  md += `---\n\n`;

  // 项目
  md += `## 项目 (共 ${data.projects.length} 个)\n\n`;
  data.projects.forEach((project: any, index: number) => {
    md += `### ${index + 1}. ${project.title} / ${project.titleEn}\n\n`;
    md += `- **公司**: ${project.company} / ${project.companyEn}\n`;
    md += `- **角色**: ${project.role} / ${project.roleEn}\n`;
    md += `- **时间**: ${project.period}\n`;
    md += `- **描述**: ${project.description}\n\n`;
    md += `  ${project.descriptionEn}\n\n`;
    if (project.projectUrl) {
      md += `- **项目网站**: ${project.projectUrl}\n\n`;
    }
    
    if (project.technicalDetails && project.technicalDetails.length > 0) {
      md += `**技术细节**:\n\n`;
      project.technicalDetails.forEach((detail: string, i: number) => {
        md += `${i + 1}. ${detail}\n`;
        if (project.technicalDetailsEn && project.technicalDetailsEn[i]) {
          md += `   ${project.technicalDetailsEn[i]}\n\n`;
        }
      });
    }

    if (project.technologies && project.technologies.length > 0) {
      md += `**技术栈**: ${project.technologies.join(', ')}\n\n`;
    }

    if (project.impact) {
      md += `**影响**: ${project.impact} / ${project.impactEn}\n\n`;
    }

    if (project.relatedSkills && project.relatedSkills.length > 0) {
      md += `**相关技能**: ${project.relatedSkills.join(', ')}\n\n`;
    }

    md += `---\n\n`;
  });

  // 专利
  md += `## 专利 (共 ${data.patents.length} 个)\n\n`;
  data.patents.forEach((patent: any, index: number) => {
    md += `### ${index + 1}. ${patent.title.zh} / ${patent.title.en}\n\n`;
    md += `- **专利号**: ${patent.patentNumber}\n`;
    md += `- **发明人**: ${patent.inventors.join(', ')}\n`;
    md += `- **申请日期**: ${patent.filingDate}\n`;
    if (patent.grantDate) {
      md += `- **授权日期**: ${patent.grantDate}\n`;
    }
    md += `- **状态**: ${patent.status.zh} / ${patent.status.en}\n`;
    if (patent.citations) {
      md += `- **引用次数**: ${patent.citations}\n`;
    }
    md += `- **摘要**: ${patent.abstract.zh}\n\n`;
    md += `  ${patent.abstract.en}\n\n`;
    if (patent.url) {
      md += `- **链接**: ${patent.url}\n\n`;
    }
    md += `---\n\n`;
  });

  // 新闻
  md += `## 新闻 (共 ${data.news.length} 条)\n\n`;
  data.news.forEach((item: any, index: number) => {
    md += `### ${index + 1}. ${item.title.zh} / ${item.title.en}\n\n`;
    md += `- **日期**: ${item.date}\n`;
    if (item.author) {
      md += `- **作者**: ${item.author}\n`;
    }
    md += `- **内容**: ${item.content.zh}\n\n`;
    md += `  ${item.content.en}\n\n`;
    if (item.sourceUrl) {
      md += `- **来源**: ${item.sourceUrl}\n\n`;
    }
    if (item.fullContent) {
      // 移除HTML标签，保留文本内容
      const textContent = item.fullContent
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      md += `**完整内容**: ${textContent.substring(0, 1000)}${textContent.length > 1000 ? '...' : ''}\n\n`;
    }
    md += `---\n\n`;
  });

  // 教学
  md += `## 教学\n\n`;
  
  // 课程
  md += `### 课程 (共 ${data.teaching.courses.length} 门)\n\n`;
  data.teaching.courses.forEach((course: any, index: number) => {
    md += `#### ${index + 1}. ${course.title.zh} / ${course.title.en}\n\n`;
    if (course.description) {
      md += `${course.description.zh}\n\n`;
      md += `${course.description.en}\n\n`;
    }
    md += `- **类型**: ${course.type.zh} / ${course.type.en}\n`;
    md += `- **年级**: ${course.grade.join(', ')}\n`;
    md += `- **目标**: ${course.target.zh} / ${course.target.en}\n`;
    
    if (course.chapters && course.chapters.length > 0) {
      md += `**章节**:\n\n`;
      course.chapters.forEach((chapter: any, i: number) => {
        md += `${i + 1}. ${chapter.title.zh} / ${chapter.title.en}\n`;
        if (chapter.description) {
          md += `   ${chapter.description.zh}\n`;
          md += `   ${chapter.description.en}\n`;
        }
      });
      md += `\n`;
    }

    if (course.resources && course.resources.length > 0) {
      md += `**资源**:\n\n`;
      course.resources.forEach((resource: any) => {
        md += `- [${resource.title.zh} / ${resource.title.en}](${resource.url})\n`;
        md += `  ${resource.description.zh} / ${resource.description.en}\n`;
      });
      md += `\n`;
    }
    md += `---\n\n`;
  });

  // 学生
  if (data.teaching.students && data.teaching.students.length > 0) {
    md += `### 学生 (共 ${data.teaching.students.length} 位)\n\n`;
    data.teaching.students.forEach((student: any, index: number) => {
      md += `#### ${index + 1}. ${student.name.zh} / ${student.name.en}\n\n`;
      md += `- **大学**: ${student.university}\n`;
      md += `- **专业**: ${student.major}\n`;
      md += `- **毕业年份**: ${student.graduationYear}\n`;
      if (student.github) {
        md += `- **GitHub**: ${student.github}\n`;
      }
      if (student.website) {
        md += `- **网站**: ${student.website}\n`;
      }
      if (student.courses && student.courses.length > 0) {
        md += `**课程**:\n`;
        student.courses.forEach((course: any) => {
          md += `- ${course.title.zh} / ${course.title.en}\n`;
        });
      }
      if (student.additionalCourses && student.additionalCourses.length > 0) {
        if (!student.courses || student.courses.length === 0) {
          md += `**课程**:\n`;
        }
        student.additionalCourses.forEach((course: string) => {
          md += `- ${course}\n`;
        });
      }
      md += `\n`;
    });
    md += `---\n\n`;
  }

  // 学生项目
  if (data.teaching.studentProjects && data.teaching.studentProjects.length > 0) {
    md += `### 学生项目 (共 ${data.teaching.studentProjects.length} 个)\n\n`;
    data.teaching.studentProjects.forEach((project: any, index: number) => {
      md += `#### ${index + 1}. ${project.title.zh} / ${project.title.en}\n\n`;
      md += `${project.description.zh}\n\n`;
      md += `${project.description.en}\n\n`;
      md += `${project.detail.zh}\n\n`;
      md += `${project.detail.en}\n\n`;
      if (project.students && project.students.length > 0) {
        md += `**学生**: ${project.students.map((s: any) => `${s.zh} / ${s.en}`).join(', ')}\n\n`;
      }
      if (project.technologies && project.technologies.length > 0) {
        md += `**技术**: ${project.technologies.join(', ')}\n\n`;
      }
      if (project.githubUrl) {
        md += `**GitHub**: ${project.githubUrl}\n\n`;
      }
      md += `---\n\n`;
    });
  }

  // 学生评价
  if (data.teaching.studentReviews && data.teaching.studentReviews.length > 0) {
    md += `### 学生评价 (共 ${data.teaching.studentReviews.length} 条)\n\n`;
    data.teaching.studentReviews.forEach((review: any, index: number) => {
      md += `#### 评价 ${index + 1} (${review.year}年)\n\n`;
      md += `${review.content.zh}\n\n`;
      md += `${review.content.en}\n\n`;
      md += `---\n\n`;
    });
  }

  // 生活
  if (data.life && data.life.interests) {
    md += `## 生活与兴趣\n\n`;
    data.life.interests.forEach((category: any) => {
      md += `### ${category.category}\n\n`;
      category.items.forEach((item: any) => {
        md += `#### ${item.title}\n\n`;
        md += `${item.description}\n\n`;
        if (item.url) {
          md += `- **链接**: ${item.url}\n\n`;
        }
        if (item.events && item.events.length > 0) {
          md += `**活动**:\n\n`;
          item.events.forEach((event: any) => {
            md += `- ${event.name} - ${event.topic} (${event.date})\n`;
          });
          md += `\n`;
        }
        if (item.gallery && item.gallery.length > 0) {
          md += `**作品**:\n\n`;
          item.gallery.forEach((work: any) => {
            md += `- ${work.title} - ${work.location} (${work.date})\n`;
          });
          md += `\n`;
        }
        if (item.recentTrips && item.recentTrips.length > 0) {
          md += `**旅行**:\n\n`;
          item.recentTrips.forEach((trip: any) => {
            md += `- ${trip.destination} (${trip.date})\n`;
            md += `  亮点: ${trip.highlights.join(', ')}\n`;
          });
          md += `\n`;
        }
      });
      md += `---\n\n`;
    });
  }

  md += `\n---\n\n`;
  md += `*本文档由脚本自动生成，包含网站的所有公开信息。*\n`;
  md += `*生成时间: ${data.metadata.generatedAt}*\n`;

  return md;
}

function generatePlainText(data: any): string {
  // 将Markdown转换为纯文本（去除所有格式标记）
  const markdown = generateMarkdown(data);
  return markdown
    .replace(/#{1,6}\s+/g, '') // 移除标题标记
    .replace(/\*\*/g, '') // 移除粗体
    .replace(/\*/g, '') // 移除斜体
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // 移除链接，保留文本
    .replace(/`/g, '') // 移除代码标记
    .replace(/---/g, '') // 移除分隔线
    .replace(/\n{3,}/g, '\n\n') // 合并多个空行
    .trim();
}

// 运行脚本
generateAIData().catch(console.error);
