export interface Chapter {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  description?: {
    zh: string;
    en: string;
  };
}

export interface Course {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  description?: {
    zh: string;
    en: string;
  };
  chapters: Chapter[];
  grade: string[];
  type: {
    zh: string;
    en: string;
  };
  target: {
    zh: string;
    en: string;
  };
  resources?: {
    title: {
      zh: string;
      en: string;
    };
    url: string;
    description: {
      zh: string;
      en: string;
    };
  }[];
}

const courses: Course[] = [
  
  {
    id: "info-machine-intelligence",
    title: {
      zh: "信息与机器智能",
      en: "Information and Machine Intelligence"
    },
    description: {
      zh: "信息与机器智能课程面向所有学生，介绍计算机、互联网和人工智能的基础知识。课程涵盖计算机基础、AI应用开发、数据可视化等内容，通过实践项目，帮助学生掌握数字时代必备的技能，培养对技术的理解和应用能力。",
      en: "The Information and Machine Intelligence course is designed for all students, introducing the fundamentals of computers, the internet, and artificial intelligence. The course covers computer basics, AI application development, data visualization, and more. Through practical projects, students will master essential skills for the digital age and develop their understanding and application of technology."
    },
    chapters: [
      {
        id: "computer-basics",
        title: {
          zh: "计算机基础",
          en: "Computer Basics"
        },
        description: {
          zh: "计算机基础知识",
          en: "Basic computer knowledge"
        }
      },
      {
        id: "ai-development",
        title: {
          zh: "AI应用开发",
          en: "AI Application Development"
        },
        description: {
          zh: "人工智能应用开发",
          en: "Artificial intelligence application development"
        }
      },
      {
        id: "data-visualization",
        title: {
          zh: "数据可视化",
          en: "Data Visualization"
        },
        description: {
          zh: "数据可视化技术",
          en: "Data visualization techniques"
        }
      },
      {
        id: "office-multimedia",
        title: {
          zh: "Office和多媒体",
          en: "Office and Multimedia"
        },
        description: {
          zh: "办公软件和多媒体应用",
          en: "Office software and multimedia applications"
        }
      },
      {
        id: "programming-basics",
        title: {
          zh: "编程基础",
          en: "Programming Basics"
        },
        description: {
          zh: "编程基础知识",
          en: "Basic programming knowledge"
        }
      }
    ],
    grade: ["Pre-G10", "G10"],
    type: {
      zh: "科普课",
      en: "Popular Science Course"
    },
    target: {
      zh: "帮助所有学生建立对计算机、互联网和人工智能的基本认知，掌握数字时代必备的技能。通过实践项目，培养学生的技术应用能力和创新思维，为未来的学习和工作做好准备。",
      en: "Help all students establish a basic understanding of computers, the internet, and artificial intelligence, and master essential skills for the digital age. Through practical projects, cultivate students' technical application abilities and innovative thinking, preparing them for future learning and work."
    }
  },{
    id: "ap-csa",
    title: {
      zh: "AP CSA",
      en: "AP CSA"
    },
    description: {
      zh: "AP Computer Science A 是一门面向对象的编程课程，使用Java语言。课程涵盖面向对象编程的核心概念，包括类、对象、继承、多态等。通过实践项目，学生将学习如何设计和实现复杂的程序，为AP考试和未来的计算机科学学习打下坚实基础。",
      en: "AP Computer Science A is an object-oriented programming course using Java. The course covers core concepts of object-oriented programming, including classes, objects, inheritance, polymorphism, and more. Through practical projects, students will learn how to design and implement complex programs, laying a solid foundation for the AP exam and future computer science studies."
    },
    chapters: [],
    grade: ["G10", "G11"],
    type: {
      zh: "专业基础课",
      en: "Professional Foundation Course"
    },
    target: {
      zh: "通过系统学习Java编程和面向对象设计，培养学生扎实的编程能力和计算机科学思维。课程内容严格遵循AP考试大纲，同时注重实践能力的培养，帮助学生为AP考试和未来的计算机科学学习做好准备。",
      en: "Through systematic learning of Java programming and object-oriented design, cultivate students' solid programming abilities and computer science thinking. The course content strictly follows the AP exam syllabus while emphasizing practical skills, helping students prepare for the AP exam and future computer science studies."
    }
  },
  {
    id: "ap-csp",
    title: {
      zh: "AP CSP",
      en: "AP CSP"
    },
    description: {
      zh: "AP Computer Science Principles 是一门计算机科学原理课程，不局限于特定编程语言。课程涵盖计算机科学的核心概念，包括算法、数据、互联网、编程等。通过项目实践，学生将学习如何运用计算思维解决实际问题，理解计算机科学对社会的影响。",
      en: "AP Computer Science Principles is a computer science principles course not limited to specific programming languages. The course covers core concepts of computer science, including algorithms, data, the internet, programming, and more. Through project practice, students will learn how to apply computational thinking to solve real-world problems and understand the impact of computer science on society."
    },
    chapters: [],
    grade: ["G10", "G11"],
    type: {
      zh: "专业基础课",
      en: "Professional Foundation Course"
    },
    target: {
      zh: "培养学生对计算机科学原理的深入理解，发展计算思维和问题解决能力。课程不仅关注技术知识，更注重培养学生的创新思维和社会责任感，帮助他们成为数字时代的思考者和创造者。",
      en: "Cultivate students' deep understanding of computer science principles and develop computational thinking and problem-solving abilities. The course not only focuses on technical knowledge but also emphasizes cultivating students' innovative thinking and social responsibility, helping them become thinkers and creators in the digital age."
    }
  },
  {
    id: "cloud-computing",
    title: {
      zh: "云计算基础",
      en: "Cloud Computing Fundamentals"
    },
    description: {
      zh: "云计算基础课程介绍现代云计算的核心概念和技术。课程涵盖云服务模型、虚拟化技术、容器化、DevOps实践等。通过实际项目，学生将学习如何设计、部署和管理云应用，为未来的云计算和DevOps工作做好准备。",
      en: "The Cloud Computing Fundamentals course introduces core concepts and technologies of modern cloud computing. The course covers cloud service models, virtualization technologies, containerization, DevOps practices, and more. Through practical projects, students will learn how to design, deploy, and manage cloud applications, preparing them for future cloud computing and DevOps work."
    },
    chapters: [
      {
        id: "git-collaboration",
        title: {
          zh: "Git 与合作",
          en: "Git and Collaboration"
        },
        description: {
          zh: "版本控制和团队协作",
          en: "Version control and team collaboration"
        }
      },
      {
        id: "markdown",
        title: {
          zh: "Markdown",
          en: "Markdown"
        },
        description: {
          zh: "Markdown 语法和使用",
          en: "Markdown syntax and usage"
        }
      },
      {
        id: "linux",
        title: {
          zh: "Linux",
          en: "Linux"
        },
        description: {
          zh: "Linux 操作系统基础",
          en: "Linux operating system basics"
        }
      },
      {
        id: "cloud-basics",
        title: {
          zh: "云计算基础",
          en: "Cloud Computing Basics"
        },
        description: {
          zh: "云计算概念和基础",
          en: "Cloud computing concepts and fundamentals"
        }
      }
    ],
    grade: ["G11", "G12"],
    type: {
      zh: "专业衔接课",
      en: "Professional Transition Course"
    },
    target: {
      zh: "帮助学生掌握现代云计算技术，培养云原生应用开发和DevOps实践能力。通过项目实践，学生将学习如何设计、部署和管理云应用，为未来的云计算和DevOps工作做好准备。",
      en: "Help students master modern cloud computing technologies and cultivate cloud-native application development and DevOps practical abilities. Through project practice, students will learn how to design, deploy, and manage cloud applications, preparing them for future cloud computing and DevOps work."
    },
    resources: [
      {
        title: {
          zh: "学生团队笔记",
          en: "Student Team Notes"
        },
        url: "https://github.com/Tylerzhangyi/Yungu-Highschool-G12-Cloud-Computing-Notebook-2025",
        description: {
          zh: "这是一个团队合作项目，通过GitHub协作完成课程笔记。学生通过实践掌握Git基本操作和GitHub协作流程，积累多人协同时的冲突解决等经验。",
          en: "This is a team collaboration project where course notes are completed through GitHub collaboration. Students master basic Git operations and GitHub collaboration workflows through practice, gaining experience in conflict resolution during multi-person collaboration."
        }
      }
    ]
  },
  {
    id: "machine-learning",
    title: {
      zh: "机器学习",
      en: "Machine Learning"
    },
    description: {
      zh: "机器学习课程介绍人工智能和机器学习的核心概念和方法。课程涵盖监督学习、无监督学习、深度学习等主题，通过实际项目，学生将学习如何应用机器学习算法解决实际问题，理解AI技术的基本原理和应用场景。",
      en: "The Machine Learning course introduces core concepts and methods of artificial intelligence and machine learning. The course covers topics such as supervised learning, unsupervised learning, deep learning, and more. Through practical projects, students will learn how to apply machine learning algorithms to solve real-world problems and understand the basic principles and application scenarios of AI technology."
    },
    chapters: [
      {
        id: "intro-ml",
        title: {
          zh: "Introduction to Machine Learning",
          en: "Introduction to Machine Learning"
        },
        description: {
          zh: "机器学习基础介绍",
          en: "Introduction to machine learning basics"
        }
      },
      {
        id: "regression",
        title: {
          zh: "Regression with Multiple Input Variables",
          en: "Regression with Multiple Input Variables"
        },
        description: {
          zh: "多元回归分析",
          en: "Multiple regression analysis"
        }
      },
      {
        id: "classification",
        title: {
          zh: "Classification",
          en: "Classification"
        },
        description: {
          zh: "分类算法",
          en: "Classification algorithms"
        }
      },
      {
        id: "neural-network",
        title: {
          zh: "Neural Network",
          en: "Neural Network"
        },
        description: {
          zh: "神经网络基础",
          en: "Neural network basics"
        }
      },
      {
        id: "neural-network-training",
        title: {
          zh: "Neural Network Training",
          en: "Neural Network Training"
        },
        description: {
          zh: "神经网络训练",
          en: "Neural network training"
        }
      },
      {
        id: "ml-advice",
        title: {
          zh: "Advice for applying machine learning",
          en: "Advice for applying machine learning"
        },
        description: {
          zh: "机器学习应用建议",
          en: "Machine learning application advice"
        }
      },
      {
        id: "mid-term",
        title: {
          zh: "Mid-Term",
          en: "Mid-Term"
        },
        description: {
          zh: "期中考试",
          en: "Mid-term exam"
        }
      },
      {
        id: "decision-trees",
        title: {
          zh: "Decision Trees",
          en: "Decision Trees"
        },
        description: {
          zh: "决策树算法",
          en: "Decision tree algorithms"
        }
      },
      {
        id: "unsupervised-learning",
        title: {
          zh: "Unsupervised Learning",
          en: "Unsupervised Learning"
        },
        description: {
          zh: "无监督学习",
          en: "Unsupervised learning"
        }
      },
      {
        id: "recommender-systems",
        title: {
          zh: "Recommender Systems",
          en: "Recommender Systems"
        },
        description: {
          zh: "推荐系统",
          en: "Recommender systems"
        }
      },
      {
        id: "reinforcement-learning",
        title: {
          zh: "Reinforcement Learning",
          en: "Reinforcement Learning"
        },
        description: {
          zh: "强化学习",
          en: "Reinforcement learning"
        }
      }
    ],
    grade: ["G11", "G12"],
    type: {
      zh: "专业衔接课",
      en: "Professional Transition Course"
    },
    target: {
      zh: "培养学生对机器学习和人工智能的深入理解，掌握核心算法和工具。通过项目实践，学生将学习如何应用机器学习解决实际问题，为未来的AI研究和应用工作做好准备。",
      en: "Cultivate students' deep understanding of machine learning and artificial intelligence, mastering core algorithms and tools. Through project practice, students will learn how to apply machine learning to solve real-world problems, preparing them for future AI research and application work."
    }
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