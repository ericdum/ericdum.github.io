export interface Patent {
  id: number;
  title: string;
  inventors: string[];
  patentNumber: string;
  filingDate: string;
  grantDate: string | null;
  abstract: string;
  status: string;
  technicalFeatures?: string[];
  impact?: string;
  relatedProject?: number;
  citations?: number;
  url?: string;
}

const patents: Patent[] = [
  {
    id: 1,
    title: "数据代理方法、装置以及电子设备",
    inventors: ["代立晨"],
    patentNumber: "CN201710089684.0",
    filingDate: "2017-01-01",
    grantDate: "2021-04-09",
    abstract: "本申请公开了一种数据代理方法，向数据服务提供方发送访问数据服务的请求；接收所述数据服务提供方返回的所述数据服务对应的服务逻辑；向所述数据服务提供方提交基于所述服务逻辑选择的已选择数据服务；接收所述数据服务提供方返回的所述已选择数据服务对应的数据操作指令；向用户数据的代理服务器发送所述数据操作指令；接收所述代理服务器发送的所述数据操作指令对应的用户数据。在进行数据代理时，通过本申请提供的所述数据代理方法实现二者之间的数据交互，避免直接访问用户数据，使用户数据更加安全，从而提升了数据代理过程中的网络数据安全。",
    status: "已授权",
    citations: 3,
    url: "https://patents.google.com/patent/CN108462731B"
  },
  {
    id: 2,
    title: "Data processing method, device and system",
    inventors: ["代立晨"],
    patentNumber: "CN201811082257.0",
    filingDate: "2018-01-01",
    grantDate: "2023-04-07",
    abstract: "The invention discloses a data processing method, a data processing device and a data processing system. Wherein, the method comprises the following steps: generating a public key and a corresponding private key based on a password input by a user side; the method comprises the steps that a public key is sent to an edge server, wherein the edge server encrypts stored data information by using the public key and uploads an encryption result obtained through encryption to a cloud server; and receiving the encrypted result downloaded from the cloud server, and decrypting the encrypted result by adopting a private key to obtain data information. The invention solves the technical problem that the user can not easily view the data from the second device through the webpage or the application program because the second device can not decrypt the data.",
    status: "已授权",
    citations: 7,
    url: "https://patents.google.com/patent/CN110912682A"
  },
  {
    id: 4,
    title: "电量信息的处理方法及装置",
    inventors: ["代立晨"],
    patentNumber: "CN201811083934.0",
    filingDate: "2018-09-17",
    grantDate: "2022-06-14",
    abstract: "本发明公开了一种电量信息的处理方法及装置。其中，该方法包括：读取与房屋对应的电表的电量信息，其中，电表与房屋的距离大于预设距离；将电量信息传输至用户的目标客户端，其中，目标客户端为以下至少之一：应用程序、目标显示器、智能终端控制系统。本发明解决了由于电表距离各个用户房屋距离较远，造成用户难以便利的知道其房屋内用电的电量信息的技术问题。",
    status: "已授权",
    url: "https://patents.google.com/patent/CN110912956B"
  },
  {
    id: 5,
    title: "Message issuance method, device and electronic equipment",
    inventors: ["代立晨"],
    patentNumber: "CN201710006699.6",
    filingDate: "2017-01-05",
    grantDate: null,
    abstract: "This application discloses a kind of message issuance methods, including：In the case where receiving the first node control that publisher sends message current message is sent to the subscriber for subscribing to current message；Summarize the message response for the subscriber's feedback for subscribing to the message using the first node；The message response after summarizing is sent to the publisher for sending the message.The message issuance method is after publisher carries out news release, the message response to be given out information by the communication realization publisher between subscriber, first node and subscriber summarizes and feeds back, the state that publisher gives out information is can determine according to message response, realizes that publisher gives out information state holding.",
    status: "申请中",
    citations: 7
  }
];

export async function getPatents() {
  return patents;
} 