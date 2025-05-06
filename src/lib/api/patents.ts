export interface Patent {
  id: number;
  title: {
    zh: string;
    en: string;
  };
  inventors: string[];
  patentNumber: string;
  filingDate: string;
  grantDate: string | null;
  abstract: {
    zh: string;
    en: string;
  };
  status: {
    zh: string;
    en: string;
  };
  technicalFeatures?: string[];
  impact?: string;
  relatedProject?: number;
  citations?: number;
  url?: string;
}

const patents: Patent[] = [
  {
    id: 1,
    title: {
      zh: "数据代理方法、装置以及电子设备",
      en: "Data Proxy Method, Device and Electronic Equipment"
    },
    inventors: ["代立晨"],
    patentNumber: "CN201710089684.0",
    filingDate: "2017-01-01",
    grantDate: "2021-04-09",
    abstract: {
      zh: "本申请公开了一种数据代理方法，向数据服务提供方发送访问数据服务的请求；接收所述数据服务提供方返回的所述数据服务对应的服务逻辑；向所述数据服务提供方提交基于所述服务逻辑选择的已选择数据服务；接收所述数据服务提供方返回的所述已选择数据服务对应的数据操作指令；向用户数据的代理服务器发送所述数据操作指令；接收所述代理服务器发送的所述数据操作指令对应的用户数据。在进行数据代理时，通过本申请提供的所述数据代理方法实现二者之间的数据交互，避免直接访问用户数据，使用户数据更加安全，从而提升了数据代理过程中的网络数据安全。",
      en: "This application discloses a data proxy method, which includes: sending a request to access data service to the data service provider; receiving the service logic corresponding to the data service returned by the data service provider; submitting selected data service based on the service logic to the data service provider; receiving data operation instructions corresponding to the selected data service returned by the data service provider; sending the data operation instructions to the user data proxy server; receiving user data corresponding to the data operation instructions sent by the proxy server. During data proxy, the data proxy method provided by this application realizes data interaction between the two parties, avoiding direct access to user data, making user data more secure, thereby improving network data security during the data proxy process."
    },
    status: {
      zh: "已授权",
      en: "Granted"
    },
    citations: 3,
    url: "https://patents.google.com/patent/CN108462731B"
  },
  {
    id: 2,
    title: {
      zh: "数据处理方法、装置及系统",
      en: "Data processing method, device and system"
    },
    inventors: ["代立晨"],
    patentNumber: "CN201811082257.0",
    filingDate: "2018-01-01",
    grantDate: "2023-04-07",
    abstract: {
      zh: "本发明公开了一种数据处理方法、数据处理装置和数据处理系统。其中，该方法包括以下步骤：基于用户端输入的密码生成公钥和对应的私钥；将公钥发送至边缘服务器，其中边缘服务器使用公钥对存储的数据信息进行加密，并将加密得到的加密结果上传至云服务器；接收从云服务器下载的加密结果，并采用私钥对加密结果进行解密，得到数据信息。本发明解决了由于第二设备无法解密数据，导致用户无法通过网页或应用程序方便地查看第二设备中的数据的技术问题。",
      en: "The invention discloses a data processing method, a data processing device and a data processing system. Wherein, the method comprises the following steps: generating a public key and a corresponding private key based on a password input by a user side; the method comprises the steps that a public key is sent to an edge server, wherein the edge server encrypts stored data information by using the public key and uploads an encryption result obtained through encryption to a cloud server; and receiving the encrypted result downloaded from the cloud server, and decrypting the encrypted result by adopting a private key to obtain data information. The invention solves the technical problem that the user can not easily view the data from the second device through the webpage or the application program because the second device can not decrypt the data."
    },
    status: {
      zh: "已授权",
      en: "Granted"
    },
    citations: 7,
    url: "https://patents.google.com/patent/CN110912682A"
  },
  {
    id: 4,
    title: {
      zh: "电量信息的处理方法及装置",
      en: "Power Information Processing Method and Device"
    },
    inventors: ["代立晨"],
    patentNumber: "CN201811083934.0",
    filingDate: "2018-09-17",
    grantDate: "2022-06-14",
    abstract: {
      zh: "本发明公开了一种电量信息的处理方法及装置。其中，该方法包括：读取与房屋对应的电表的电量信息，其中，电表与房屋的距离大于预设距离；将电量信息传输至用户的目标客户端，其中，目标客户端为以下至少之一：应用程序、目标显示器、智能终端控制系统。本发明解决了由于电表距离各个用户房屋距离较远，造成用户难以便利的知道其房屋内用电的电量信息的技术问题。",
      en: "The invention discloses a power information processing method and device. The method includes: reading power information from the electricity meter corresponding to the house, where the distance between the electricity meter and the house is greater than a preset distance; transmitting the power information to the user's target client, where the target client is at least one of: application program, target display, intelligent terminal control system. The invention solves the technical problem that users cannot easily know the power consumption information of their houses due to the long distance between the electricity meter and each user's house."
    },
    status: {
      zh: "已授权",
      en: "Granted"
    },
    url: "https://patents.google.com/patent/CN110912956B"
  },
  {
    id: 5,
    title: {
      zh: "消息发布方法、装置及电子设备",
      en: "Message issuance method, device and electronic equipment"
    },
    inventors: ["代立晨"],
    patentNumber: "CN201710006699.6",
    filingDate: "2017-01-05",
    grantDate: null,
    abstract: {
      zh: "本申请公开了一种消息发布方法，包括：在接收到发布者发送的消息的情况下，将当前消息发送给订阅了当前消息的订阅者；使用第一节点对订阅者针对订阅的消息的反馈进行消息响应汇总；将汇总后的消息响应发送给发布者。该消息发布方法在发布者进行消息发布后，通过发布者、第一节点和订阅者之间的通信实现订阅者对发布者发布的消息进行汇总反馈，发布者可以根据消息响应确定发布消息的状态，实现发布者发布消息状态的保持。",
      en: "This application discloses a kind of message issuance methods, including：In the case where receiving the first node control that publisher sends message current message is sent to the subscriber for subscribing to current message；Summarize the message response for the subscriber's feedback for subscribing to the message using the first node；The message response after summarizing is sent to the publisher for sending the message.The message issuance method is after publisher carries out news release, the message response to be given out information by the communication realization publisher between subscriber, first node and subscriber summarizes and feeds back, the state that publisher gives out information is can determine according to message response, realizes that publisher gives out information state holding."
    },
    status: {
      zh: "申请中",
      en: "Pending"
    },
    citations: 7,
    url: "https://patents.google.com/patent/CN108282500A"
  }
];

export async function getPatents() {
  // 按申请时间倒序排列专利
  return patents.sort((a, b) => {
    const dateA = new Date(a.filingDate);
    const dateB = new Date(b.filingDate);
    return dateB.getTime() - dateA.getTime();
  });
} 