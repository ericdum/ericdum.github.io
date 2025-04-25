export interface Profile {
  name: string;
  title: string;
  currentPosition: string;
  previousPosition: string;
  email: string;
  phone: string;
  bio: string;
  skills: {
    category: string;
    items: {
      name: string;
      level: string;
      projects: number[];
      description: string;
    }[];
  }[];
  education: {
    degree: string;
    major: string;
    school: string;
    year: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
}

const profile: Profile = {
  name: "代立晨（木酱）",
  title: "副高级职称、飞行员",
  currentPosition: "杭州云谷学校工程技术老师 & 教育科技技术顾问",
  previousPosition: "中国器官移植基金会-易捷通专项基金委员",
  email: "formateric@gmail.com",
  // phone: "+86 153 5544 2280",
  bio: "原阿里云航空行业技术总监，填补了多项国内数字机坪行业空白。原阿里云 IoT 创新实验室负责人，针对特殊人群设计的智能家居系统曾在 CCTV-2《秘密大改造》、浙江卫视《智造中国》节目中广泛传播。原阿里巴巴集团乡村振兴技术官，记录在中国外文局出品的纪录片《田野之上》。科普博主，曾被央视新闻13分钟专题报道。三次获得阿里巴巴集团公益年度十佳项目奖。2021年阿里技术人年度个人。",
  skills: [
    {
      category: "人工智能",
      items: [
        {
          name: "机器学习",
          level: "专家",
          projects: [1, 2, 3],
          description: "设计和实现机器学习模型，包括监督学习、无监督学习和强化学习。"
        },
        {
          name: "深度学习",
          level: "专家",
          projects: [1, 2, 3],
          description: "使用深度学习框架开发复杂的神经网络模型。"
        },
        {
          name: "自然语言处理",
          level: "高级",
          projects: [2, 3],
          description: "开发文本分析和处理系统，包括情感分析、文本分类等。"
        }
      ]
    },
    {
      category: "大数据",
      items: [
        {
          name: "分布式计算",
          level: "专家",
          projects: [1, 2, 3],
          description: "设计和实现大规模分布式计算系统。"
        },
        {
          name: "实时计算",
          level: "专家",
          projects: [1, 2, 3],
          description: "开发实时数据处理和分析系统。"
        },
        {
          name: "数据仓库",
          level: "专家",
          projects: [1, 2, 3],
          description: "设计和优化数据仓库架构。"
        }
      ]
    },
    {
      category: "系统架构",
      items: [
        {
          name: "微服务架构",
          level: "专家",
          projects: [1, 2, 3],
          description: "设计和实现微服务架构系统。"
        },
        {
          name: "高可用架构",
          level: "专家",
          projects: [1, 2, 3],
          description: "设计高可用系统架构，确保系统稳定性。"
        },
        {
          name: "云原生架构",
          level: "专家",
          projects: [1, 2, 3],
          description: "设计和实现云原生应用架构。"
        }
      ]
    }
  ],
  education: [
    {
      degree: "硕士",
      major: "计算机科学",
      school: "浙江大学",
      year: "2007-2010"
    },
    {
      degree: "学士",
      major: "计算机科学",
      school: "浙江大学",
      year: "2003-2007"
    }
  ],
  certifications: [
    {
      name: "AWS 解决方案架构师",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Google Cloud 专业数据工程师",
      issuer: "Google Cloud",
      year: "2022"
    }
  ]
};

export async function getProfile() {
  return profile;
} 