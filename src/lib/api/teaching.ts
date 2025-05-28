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
    id: string;
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

export interface Student {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  github: string;
  courses: Course[];
  university: string;
  major: string;
  graduationYear: number;
  avatar: string;
}

export interface StudentReview {
  id: string;
  content: {
    zh: string;
    en: string;
  };
  studentId: string;
  year: number;
}

const courses: Course[] = [
  
  {
    id: "ict",
    title: {
      zh: "信息与智能计算",
      en: "Information and Intelligent Computing"
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
          zh: "计算机的基本硬件组成和操作系统的入门，要求学生理解计算机各个硬件的工作原理和关键性能指标。",
          en: "The basic hardware composition and introductory operating system of computers, requiring students to understand the working principles and key performance indicators of each hardware component of the computer."
        }
      },
      {
        id: "ai-development",
        title: {
          zh: "AI应用开发",
          en: "AI Application Development"
        },
        description: {
          zh: "使用成熟的大模型API，如阿里云的百炼平台。并结合时下流行的开发方法如 Dify 等，让学生了解AI应用开发的基本方法。能够进行知识库、prompt 和简单的工作流开发",
          en: "Using mature large model APIs, such as Aliyun's Bailei platform. Combining the latest development methods like Dify, students will understand the basic methods of AI application development. They will be able to develop knowledge bases, prompts, and simple workflow applications."
        }
      },
      {
        id: "data-visualization",
        title: {
          zh: "数据可视化",
          en: "Data Visualization"
        },
        description: {
          zh: "要求学生理解常用的数据可视化图表的特征和使用方法、适用场景。了解数据可视化的作用和设计方法。使用 Python、Tableau 或其他数据可视化工具尝试使用数据来表达客观现象和观点",
          en: "Students will understand the characteristics and usage methods of common data visualization charts, their适用场景. They will also understand the purpose and design methods of data visualization. Using Python, Tableau, or other data visualization tools, they will try to use data to express objective phenomena and viewpoints."
        }
      },
      {
        id: "office-multimedia",
        title: {
          zh: "Office和多媒体",
          en: "Office and Multimedia"
        },
        description: {
          zh: "学习信息时代的基本工作和学习技能，要求掌握 MLA 论文格式的排版和编辑方法，能够使用电子表格处理数据，能够使用PPT进行简单的排版，能够运用视频和图像编辑工具并理解关键的参数指标",
          en: "Learning the basic work and learning skills in the information age, requiring students to master the formatting and editing methods of the MLA paper format, to use electronic spreadsheets to process data, to use PPT for simple layout, to use video and image editing tools and understand the key parameter indicators."
        }
      },
      {
        id: "programming-basics",
        title: {
          zh: "编程基础",
          en: "Programming Basics"
        },
        description: {
          zh: "要求学生理解编程逻辑，能够使用AI生成python代码，并能够阅读和调试python代码。",
          en: "Students will understand the programming logic, be able to use AI to generate Python code, and read and debug Python code."
        }
      }
    ],
    grade: ["Pre-G10", "G10"],
    type: {
      id: "popular-science",
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
      id: "foundation",
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
      zh: "计算机科学基础",
      en: "Fundamental of Computer Science"
    },
    description: {
      zh: "Fundamental of Computer Science 是一门计算机科学原理课程，不局限于特定编程语言。课程涵盖计算机科学的核心概念，包括算法、数据、互联网、编程等。通过项目实践，学生将学习如何运用计算思维解决实际问题，理解计算机科学对社会的影响。",
      en: "Fundamental of Computer Science is a computer science principles course not limited to specific programming languages. The course covers core concepts of computer science, including algorithms, data, the internet, programming, and more. Through project practice, students will learn how to apply computational thinking to solve real-world problems and understand the impact of computer science on society."
    },
    chapters: [
      {
        id: "computer-basics",
        title: {
          zh: "计算机基础",
          en: "Computer Basics"
        },
        description: {
          zh: "计算机的基本硬件组成和操作系统的入门，要求学生理解计算机和操作系统的工作原理。",
          en: "The basic hardware composition and introductory operating system of computers, requiring students to understand the working principles of computers and operating systems."
        }
      },
      {
        id: "python",
        title: {
          zh: "Python编程和算法入门",
          en: "Python Programming and Algorithm Introduction"
        },
        description: {
          zh: "掌握 Python 语法，并学习算法的概念、评估方法。掌握经典的贪婪、分治、动态规划、启发式算法等方法。",
          en: "Master Python syntax and learn the concepts and evaluation methods of algorithms. Master classic greedy, divide-and-conquer, dynamic programming, heuristic algorithm, etc."
        }
      },
      {
        id: "data",
        title: {
          zh: "数据",
          en: "Data"
        },
        description: {
          zh: "掌握数据结构的基本概念，掌握数据的一般表达方式、压缩方式和加密方式，了解结构化数据的设计、处理和可视化。",
          en: "Master the basic concepts of data structures, understand the general expression, compression, and encryption of data, and learn about the design, processing, and visualization of structured data."
        }
      },
      {
        id: "network",
        title: {
          zh: "计算机网络",
          en: "Computer Network"
        },
        description: {
          zh: "了解计算机网络的原理、结构、协议、安全等。深入剖析5层网络结构的设计理念和实现方法。",
          en: "Understand the principles, structure, protocols, and security of computer networks. Deeply analyze the design concepts and implementation methods of the 5-layer network structure."
        }
      },
      {
        id: "creative-development",
        title: {
          zh: "技术创新和社会影响及创造性开发",
          en: "Innovation and Social Impact and Creative Development"
        },
        description: {
          zh: "了解计算机科学对社会的影响，了解计算机科学在社会中的应用，了解计算机科学在社会中的发展趋势。能够利用计算机科学解决实际问题，并能够进行创造性开发。",
          en: "Understand the impact of computer science on society, understand the application of computer science in society, and understand the development trend of computer science in society. Be able to use computer science to solve practical problems and develop creative solutions."
        }
      },

    ],
    grade: ["G10", "G11"],
    type: {
      id: "foundation",
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
          zh: "学习 Git 的本地和远程命令，并初步学习通过 GitHub 进行协作。",
          en: "Learn Git's local and remote commands, and initially learn to collaborate through GitHub."
        }
      },
      {
        id: "markdown",
        title: {
          zh: "Markdown",
          en: "Markdown"
        },
        description: {
          zh: "学习 Markdown 的语法和使用方法，并初步学习通过 git 来管理纯文本文件。",
          en: "Learn Markdown syntax and usage, and initially learn to manage plain text files through git."
        }
      },
      {
        id: "linux",
        title: {
          zh: "Linux",
          en: "Linux"
        },
        description: {
          zh: "学习 Linux 的基本命令和文件系统结构，了解 Linux 的用户、文件、系统、权限等概念。能够完成软件安装、远程登录、日志管理、进程管理、用户管理等基本任务。",
          en: "Learn the basic commands and file system structure of Linux, understand the concepts of users, files, systems, and permissions in Linux. Be able to complete basic tasks such as software installation, remote login, log management, process management, and user management."
        }
      },
      {
        id: "cloud-basics",
        title: {
          zh: "云计算基础",
          en: "Cloud Computing Basics"
        },
        description: {
          zh: "学习云计算的基本概念和原理，了解云计算的架构和实现方式。了解基本的云计算服务并能够通过python编程完成简单的弹性计算编排",
          en: "Learn the basic concepts and principles of cloud computing, understand the architecture and implementation of cloud computing. Understand basic cloud computing services and be able to complete simple elastic computing orchestration through Python programming."
        }
      }
    ],
    grade: ["G11", "G12"],
    type: {
      id: "transition",
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
          zh: "学生团队笔记 2025 春季学期",
          en: "Student Team Notes 2025 Spring Semester"
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
          zh: "机器学习基础介绍，回归模型的训练和梯度下降的方法。",
          en: "Introduction to machine learning basics, regression model training and gradient descent method."
        }
      },
      {
        id: "regression",
        title: {
          zh: "多元回归分析",
          en: "Regression with Multiple Input Variables"
        },
        description: {
          zh: "基于矩阵的多元回归分析，和基于矩阵的梯度下降方法实现。",
          en: "Based on linear algebra and probability theory, introduce the basic theory and implementation methods of multiple regression analysis."
        }
      },
      {
        id: "classification",
        title: {
          zh: "Classification",
          en: "Classification"
        },
        description: {
          zh: "Sigmoid, Softmax 等用于分类的算法理论和实现",
          en: "Sigmoid, Softmax and other classification algorithms"
        }
      },
      {
        id: "neural-network",
        title: {
          zh: "Neural Network",
          en: "Neural Network"
        },
        description: {
          zh: "神经网络的结构理论及基于 Tensorflow 的实现方法.",
          en: "The theory of neural network structure and its implementation based on Tensorflow."
        }
      },
      {
        id: "unsupervised-learning",
        title: {
          zh: "Unsupervised Learning",
          en: "Unsupervised Learning"
        },
        description: {
          zh: "无监督学习算法理论和实现，包括聚类、降维等",
          en: "Unsupervised learning algorithm theory and implementation, including clustering and dimensionality reduction."
        }
      },
      {
        id: "reinforcement-learning",
        title: {
          zh: "Reinforcement Learning",
          en: "Reinforcement Learning"
        },
        description: {
          zh: "强化学习算法理论和实现，通过 Q-learning 和 DQN 等算法，基于 gym 库实现简单的训练",
          en: "Reinforcement learning algorithm theory and implementation, through Q-learning and DQN algorithms, and simple training based on the gym library."
        }
      }
    ],
    grade: ["G11", "G12"],
    type: {
      id: "transition",
      zh: "专业衔接课",
      en: "Professional Transition Course"
    },
    target: {
      zh: "培养学生对机器学习和人工智能的深入理解，掌握核心算法和工具。通过项目实践，学生将学习如何应用机器学习解决实际问题，为未来的AI研究和应用工作做好准备。",
      en: "Cultivate students' deep understanding of machine learning and artificial intelligence, mastering core algorithms and tools. Through project practice, students will learn how to apply machine learning to solve real-world problems, preparing them for future AI research and application work."
    }
  },
  {
    id: "school-team",
    title: {
      zh: "校队",
      en: "School Team"
    },
    description: {
      zh: "校队课程以编程竞赛和应用开发为主，帮助学生掌握计算机科学竞赛和应用开发的基本知识和方法。",
      en: "The School Team course focuses on programming competitions and application development, helping students master the basic knowledge and methods of computer science competitions and application development."
    },
    chapters: [],
    grade: ["G9", "G10", "G11"],
    type: {
      id: "transition",
      zh: "专业衔接课",
      en: "Professional Transition Course"
    },
    target: {
      zh: "培养学生对计算机科学竞赛和应用开发的深入理解，掌握核心算法和工具。通过项目实践，学生将学习如何应用机器学习解决实际问题，为未来的AI研究和应用工作做好准备。",
      en: "Cultivate students' deep understanding of computer science competitions and application development, mastering core algorithms and tools. Through project practice, students will learn how to apply machine learning to solve real-world problems, preparing them for future AI research and application work."
    }
  }
];

const studentReviews: StudentReview[] = [
  {
    id: "1",
    content: {
      zh: "【译】Eric老师是一位非常注重实践的教师。在他的课堂上，我总能学到大量实用的计算机知识。从网络安全到Linux命令，从网站编程到机器学习，Eric老师教会我们像程序员一样思考。作为教师，他不仅传授编程知识，更培养我们的编程思维和用技术解决问题的能力。Eric老师的课程是我上过最好的编程课，内容充实又充满幽默感，通过一个接一个的项目帮助我们巩固各种编程知识。",
      en: "Mr. Eric is a very practical teacher. In his class, I always learn a lot of useful computer knowledge. From network security to Linux commands, from website programming to machine learning, Mr. Eric teaches us to think like programmers. As a teacher, he not only teaches us programming and knowledge, but also gives us programming thinking and the ability to solve problems with technology. Mr. Eric's class is the best programming class I have ever taken. It is rich in content and humorous at the same time. Through one project after another, he helps us consolidate various programming knowledge."
    },
    studentId: "2",
    year: 2025
  }
];

const students: Student[] = [
  {
    id: "0",
    name: {
      zh: "吕一凡",
      en: "Yifan Lv"
    },
    github: "",
    courses: [courses.find(course => course.id === "ap-csp")!],
    university: "California State University, Santa Cruz",
    major: "Computer Science",
    graduationYear: 2024,
    avatar: ""
  },
  {
    id: "1",
    name: {
      zh: "周子轶",
      en: "Ziyi Zhou"
    },
    github: "https://github.com/ZiFeng11",
    courses: [courses.find(course => course.id === "ap-csp")!],
    university: "Stevens Institute of Technology",
    major: "Computer Science",
    graduationYear: 2024,
    avatar: "https://avatars.githubusercontent.com/u/130559464?v=4"
  },
  {
    id: "2",
    name: {
      zh: "胡绚琦",
      en: "Xuanqi Hu"
    },
    github: "https://github.com/LiMuma",
    courses: [courses.find(course => course.id === "ap-csp")!,
               courses.find(course => course.id === "machine-learning")!, 
               courses.find(course => course.id === "cloud-computing")!],
    university: "California State University, Davis",
    major: "Computer Engineering",
    graduationYear: 2025,
    avatar: "https://avatars.githubusercontent.com/u/121914299?v=4"
  },
  {
    id: "3",
    name: {
      zh: "赵轩",
      en: "Xuan Zhao"
    },
    github: "https://github.com/YUHOUCHAXING",
    courses: [courses.find(course => course.id === "ap-csp")!,
               courses.find(course => course.id === "machine-learning")!, 
               courses.find(course => course.id === "cloud-computing")!],
    university: "California State University, Riverside",
    major: "Robotics",
    graduationYear: 2025,
    avatar: "https://avatars.githubusercontent.com/u/145020833?v=4"
  },
  {
    id: "4",
    name: {
      zh: "张翼",
      en: "Yi Zhang"
    },
    github: "https://github.com/Tylerzhangyi",
    courses: [
               courses.find(course => course.id === "machine-learning")!, 
               courses.find(course => course.id === "cloud-computing")!],
    university: "",
    major: "",
    graduationYear: 2026,
    avatar: "https://avatars.githubusercontent.com/u/144305826?v=4"
  },
  {
    id: "5",
    name: {
      zh: "王家锐",
      en: "Jiarui Wang"
    },
    github: "https://github.com/garywanggali",
    courses: [courses.find(course => course.id === "school-team")!],
    university: "",
    major: "",
    graduationYear: 2028,
    avatar: "https://avatars.githubusercontent.com/u/145777433?v=4"
  },
  {
    id: "6",
    name: {
      zh: "寇子谦",
      en: "Ziqian Kou"
    },
    github: "https://github.com/kouziqian",
    courses: [courses.find(course => course.id === "ict")!,
      courses.find(course => course.id === "school-team")!,
              
    ],
    university: "",
    major: "",
    graduationYear: 2028,
    avatar: "https://avatars.githubusercontent.com/u/134479138?v=4"
  },
  {
    id: "7",
    name: {
      zh: "郑博纬",
      en: "Bowei Zhen"
    },
    github: "https://github.com/chihairou111",
    courses: [courses.find(course => course.id === "school-team")!],
    university: "",
    major: "",
    graduationYear: 2028,
    avatar: "https://avatars.githubusercontent.com/u/202615932?v=4"
  },
  {
    id: "8",
    name: {
      zh: "朱殷磊",
      en: "Yinlei Zhu"
    },
    github: "",
    courses: [courses.find(course => course.id === "school-team")!],
    university: "",
    major: "",
    graduationYear: 2029,
    avatar: ""
  }
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

export async function getStudentReviews(): Promise<StudentReview[]> {
  return studentReviews;
}

export async function getStudents(): Promise<Student[]> {
  return students;
} 