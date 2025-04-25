export interface Chapter {
  id: string;
  title: string;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  chapters: Chapter[];
  grade: string[];
  type: string;
  target: string;
  resources?: {
    title: string;
    url: string;
    description: string;
  }[];
}

const courses: Course[] = [
  
  {
    id: "info-machine-intelligence",
    title: "信息与机器智能",
    description: "信息与机器智能课程面向所有学生，介绍计算机、互联网和人工智能的基础知识。课程涵盖计算机基础、AI应用开发、数据可视化等内容，通过实践项目，帮助学生掌握数字时代必备的技能，培养对技术的理解和应用能力。",
    chapters: [
      {
        id: "computer-basics",
        title: "计算机基础",
        description: "计算机基础知识"
      },
      {
        id: "ai-development",
        title: "AI应用开发",
        description: "人工智能应用开发"
      },
      {
        id: "data-visualization",
        title: "数据可视化",
        description: "数据可视化技术"
      },
      {
        id: "office-multimedia",
        title: "Office和多媒体",
        description: "办公软件和多媒体应用"
      },
      {
        id: "programming-basics",
        title: "编程基础",
        description: "编程基础知识"
      }
    ],
    grade: ["Pre-G10", "G10"],
    type: "科普课",
    target: "帮助所有学生建立对计算机、互联网和人工智能的基本认知，掌握数字时代必备的技能。通过实践项目，培养学生的技术应用能力和创新思维，为未来的学习和工作做好准备。"
  },{
    id: "ap-csa",
    title: "AP CSA",
    description: "AP Computer Science A 是一门面向对象的编程课程，使用Java语言。课程涵盖面向对象编程的核心概念，包括类、对象、继承、多态等。通过实践项目，学生将学习如何设计和实现复杂的程序，为AP考试和未来的计算机科学学习打下坚实基础。",
    chapters: [],
    grade: ["G10", "G11"],
    type: "专业基础课",
    target: "通过系统学习Java编程和面向对象设计，培养学生扎实的编程能力和计算机科学思维。课程内容严格遵循AP考试大纲，同时注重实践能力的培养，帮助学生为AP考试和未来的计算机科学学习做好准备。"
  },
  {
    id: "ap-csp",
    title: "AP CSP",
    description: "AP Computer Science Principles 是一门计算机科学原理课程，不局限于特定编程语言。课程涵盖计算机科学的核心概念，包括算法、数据、互联网、编程等。通过项目实践，学生将学习如何运用计算思维解决实际问题，理解计算机科学对社会的影响。",
    chapters: [],
    grade: ["G10", "G11"],
    type: "专业基础课",
    target: "培养学生对计算机科学原理的深入理解，发展计算思维和问题解决能力。课程不仅关注技术知识，更注重培养学生的创新思维和社会责任感，帮助他们成为数字时代的思考者和创造者。"
  },
  {
    id: "cloud-computing",
    title: "云计算基础",
    description: "云计算基础课程介绍现代云计算的核心概念和技术。课程涵盖云服务模型、虚拟化技术、容器化、DevOps实践等。通过实际项目，学生将学习如何设计、部署和管理云应用，为未来的云计算和DevOps工作做好准备。",
    chapters: [
      {
        id: "git-collaboration",
        title: "Git 与合作",
        description: "版本控制和团队协作"
      },
      {
        id: "markdown",
        title: "Markdown",
        description: "Markdown 语法和使用"
      },
      {
        id: "linux",
        title: "Linux",
        description: "Linux 操作系统基础"
      },
      {
        id: "cloud-basics",
        title: "云计算基础",
        description: "云计算概念和基础"
      }
    ],
    grade: ["G11", "G12"],
    type: "专业衔接课",
    target: "帮助学生掌握现代云计算技术，培养云原生应用开发和DevOps实践能力。通过项目实践，学生将学习如何设计、部署和管理云应用，为未来的云计算和DevOps工作做好准备。",
    resources: [
      {
        title: "学生团队笔记",
        url: "https://github.com/Tylerzhangyi/Yungu-Highschool-G12-Cloud-Computing-Notebook-2025",
        description: "这是一个团队合作项目，通过GitHub协作完成课程笔记。学生通过实践掌握Git基本操作和GitHub协作流程，积累多人协同时的冲突解决等经验。"
      }
    ]
  },
  {
    id: "machine-learning",
    title: "机器学习",
    description: "机器学习课程介绍人工智能和机器学习的核心概念和方法。课程涵盖监督学习、无监督学习、深度学习等主题，通过实际项目，学生将学习如何应用机器学习算法解决实际问题，理解AI技术的基本原理和应用场景。",
    chapters: [
      {
        id: "intro-ml",
        title: "Introduction to Machine Learning",
        description: "机器学习基础介绍"
      },
      {
        id: "regression",
        title: "Regression with Multiple Input Variables",
        description: "多元回归分析"
      },
      {
        id: "classification",
        title: "Classification",
        description: "分类算法"
      },
      {
        id: "neural-network",
        title: "Neural Network",
        description: "神经网络基础"
      },
      {
        id: "neural-network-training",
        title: "Neural Network Training",
        description: "神经网络训练"
      },
      {
        id: "ml-advice",
        title: "Advice for applying machine learning",
        description: "机器学习应用建议"
      },
      {
        id: "mid-term",
        title: "Mid-Term",
        description: "期中考试"
      },
      {
        id: "decision-trees",
        title: "Decision Trees",
        description: "决策树算法"
      },
      {
        id: "unsupervised-learning",
        title: "Unsupervised Learning",
        description: "无监督学习"
      },
      {
        id: "recommender-systems",
        title: "Recommender Systems",
        description: "推荐系统"
      },
      {
        id: "reinforcement-learning",
        title: "Reinforcement Learning",
        description: "强化学习"
      }
    ],
    grade: ["G11", "G12"],
    type: "专业衔接课",
    target: "培养学生对机器学习和人工智能的深入理解，掌握核心算法和工具。通过项目实践，学生将学习如何应用机器学习解决实际问题，为未来的AI研究和应用工作做好准备。"
  },
];

export async function getCourses(): Promise<Course[]> {
  return courses;
}

export async function getCourseById(id: string): Promise<Course | undefined> {
  return courses.find(course => course.id === id);
}

export async function getChaptersByCourseId(courseId: string): Promise<Chapter[]> {
  const course = await getCourseById(courseId);
  return course?.chapters || [];
} 