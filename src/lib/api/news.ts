export interface NewsItem {
  id: number;
  title: {
    en: string;
    zh: string;
  };
  content: {
    en: string;
    zh: string;
  };
  date: string;
  sourceUrl?: string;
  fullContent?: string;
  videoUrl?: string;
  author?: string;
  thumbnail?: string;
}

const news: NewsItem[] = [
  {
    id: 10,
    title: {
      en: "First Time Seeing a School Supporting Students to Start Companies, Can't Stop Being Envious",
      zh: "第一次见到支持学生开公司的学校，羡慕已经说累了"
    },
    content: {
      en: "The ability of AI is human ability. Teacher Mu taught students how to use AIGC to learn complex knowledge points. Students drew diagrams themselves, step by step connecting chips, processors, and wires into self-made integrated circuit boards, finally achieving 'as many buttons as you want!'",
      zh: "杭I的能力就是人类的能力」，木酱老师教会了同学们怎么利用AIGC学习复杂的知识点。同学们自己画图，一步一步把芯片、处理器、连线接入自制集成电路板中，最后终于实现「爱做多少个按钮，就做多少个按钮了！"
    },
    date: "2024-10-22",
    author: "谷雨星球",
    sourceUrl: "https://www.sohu.com/a/819023431_121948389",
    thumbnail: "https://res.mojalab.cn/images/news/10/cover.jpeg",
    fullContent: `
      <div class="article-content">
        <p>大家好，我是莎莫。</p>
        <p>我们常说，教育是为了培养更好的人，但毋庸置疑，对于大多数人来说，<strong>教育也是让人过上更好生活的工具。</strong>换句话说，找到一份好工作，如鱼得水进行进阶，最终在职业生涯中实现自我价值。</p>
        <p>尤其是在<strong>2030年接近30%工作将被自动化取代的当下，</strong>教育如何既能实现与职业的贯通，还能发展终身能力呢？</p>
        <p>创校七年光是软性技术投入（不包括硬件）就高达一个亿、再度拿下全新创新教育最高奖项之一<strong>「Apple杰出学校」的杭州云谷学校，或许最有发言权。</strong></p>
        <img src="https://res.mojalab.cn/images/news/10/cover.jpeg" alt="云谷学校" class="object-cover rounded-lg w-full h-full my-8">
        <p>近十年来，这所由阿里巴巴投资创办的一所涵盖幼小初高16年的非营利性学校，背靠资源丰富的阿里，得益于杭州创新研究氛围，<strong>毗邻西湖大学和阿里巴巴达摩院的优势</strong>，已经进行了范式颠覆——</p>
        <p>从小为真实世界而学的00后10后们，毕业竟然可以「原地上班」！</p>
        
        <h2>我在云谷开公司</h2>
        <p>前段时间，我在云谷公众号上看到了一篇印象深刻的推送，哪怕是像我这样的专业人士，都自愧不如其立意和创意。</p>
        <p>更令人惊讶的是，这竟然出自一个刚刚高中毕业，不过18岁孩子之手。</p>
        <p>老师自豪地跟我说：娃早就开了自己的工作室，在接单，你去咨询下，因为兼顾学术，<strong>据说业务都排不过来了。</strong></p>
        <img src="https://res.mojalab.cn/images/news/10/design.gif" alt="设计作品" class="object-cover rounded-lg w-full h-full my-8">
        <p>■袁博做的这篇微信推送，还有点击打开抽屉的互动，非常好玩。</p>
        <p>孩子叫袁博，刚去伊利诺伊大学香槟分校（UIUC）学习最喜欢的平面设计。</p>
        <p>早在高二时，他就和同学张含琪一起创办了设计工作室，有偿接单，已经接了10次大型活动主视觉设计，参与了100多个艺术与设计项目，设计出了200多张海报。</p>
        <p>在AI让人人能变成设计师的现在，他早早洞悉AI无法取代的是人与人之间的共鸣：「设计关乎美和创意。但我心里它最关乎的是人。」</p>
        <p>他曾偶然认识了一位自闭症患者母亲，向他倾诉了孩子无法正常和同龄人和自己交流的痛苦，这驱使袁博和同学们去往残疾人托养中心、特殊儿童学校、精神康养中心进一步了解不被「主流」关注的人群处境。</p>
        <p>受到巨大震撼的他，把想法落地变成了产品。</p>
        <p>他发现自闭症群体用图像交流更容易，于是他用两年时间设计出一整套表情符号交流系统，<strong>最终设计出一款针对自闭症患者开发的社交软件——Spark。</strong></p>
        <p>成熟、有同理心、合作沟通、社会责任、自我探索……在袁博身上，我们看到这些赶超不少职场人的素养。</p>
        <img src="https://res.mojalab.cn/images/news/10/design_week.jpeg" alt="设计周分享" class="object-cover rounded-lg w-full h-full my-8">
        <p>■袁博登上2023U设计周，是最年轻的分享嘉宾，他分享了用设计改造一对夫妻档早餐店的故事。</p>
        <p>袁博这样的高中生在云谷绝不是个例。</p>
        <p><strong>高中STEM、艺术设计、商科等老师们跨学科联合设计了一个极具特色的原创课程，就叫「超级大公司」，</strong>同学们可以自选加入工程技术组，商科组或设计组，亲身体验从市场调研、数据分析、产品设计到营销设计、工程落地、路演分享的真实商业全过程。</p>
        <p>每个高中生都有一个自己的产品说明会，支持每一个学生在职业探索和毕业项目中进行实践式学习。</p>
        <p>看完孩子们在做的事情、去调研过的地方、学习的方法，不得不感慨：<strong>只有云谷有这样的前瞻性去设计教学，也只有阿里有这个资源支撑学生们做到。</strong></p>
        <p>从进入校服厂了解生产一线，还简化工流程，将以往工人们需要一天的工作在3小时就完成了↓</p>
        <img src="https://res.mojalab.cn/images/news/10/factory1.jpeg" alt="工厂参观1" class="object-cover rounded-lg w-full h-full my-8">
        <p>去智能化工厂深度研学↓</p>
        <img src="https://res.mojalab.cn/images/news/10/factory2.jpeg" alt="工厂参观2" class="object-cover rounded-lg w-full h-full my-8">
        <p>与隔壁的西湖大学和阿里达摩院研讨↓</p>
        <img src="https://res.mojalab.cn/images/news/10/factory3.jpeg" alt="工厂参观3" class="object-cover rounded-lg w-full h-full my-8">
        <p>■云谷学校就在阿里巴巴园区里，距离西湖大学仅1公里。</p>
        <p>更别提，校园里经常可以和名企高管和企业家面对面了，在这样文化影响下，学生们纷纷行动了起来——</p>
        <p>光是校内就有香香社、环保社、maynot工作室、奶茶社，从产品端、运营端、市场端去调动资源，设计产品，销售产品等等。</p>
        <p>一个个就像是小小的企业家。</p>
        <p>比如当你以为「奶茶社」就是卖奶茶的时候，他们已经在用计算机编程去研发饮料，通过开发程序，帮助计算到底放多少糖分更合适，利用更便利的交互设计帮助客户线上点单等等。</p>
        <p>就像下图展示的那样，除了读书学习外，高中生的日常模拟飞行驾驶，在实验室设计制作唇膏，玩AI，去实习，搞项目，羡慕已经说累了……</p>
        
        <h2>我想改变世界 但不必等到我长大</h2>
        <p>说实话，对于大多数人来说，教育最大的矛盾始终在于学校培养和社会需求的断层。</p>
        <p>美国大学协会曾调研世界500强的人力资源官，最关注员工的哪些能力？其中「将知识应用于真实世界」和「自我驱动」是雇主们非常在意的能力。</p>
        <p>数据显示，<strong>这两项能力的期待与毕业生实际所具备的能力之间存在巨大的鸿沟。</strong></p>
        <img src="https://res.mojalab.cn/images/news/10/ability_gap.jpeg" alt="能力鸿沟" class="object-cover rounded-lg w-full h-full my-8">
        <p>这个鸿沟靠分数难以弥合，尤其是在AI时代，必须进行跨越式的教育迭代。</p>
        <p><strong>「现代学校是在第三次科技革命后根据工业时代的需求而建立的单一的教学模式，AI的变革带来了第四次科技革命，教育更应该走在前面，而不是滞后的。」</strong></p>
        <p>未来规划中心负责人Susan，曾在微软负责高潜力人才学习与发展工作多年，站在世界最好企业的人才端，她发现企业里高绩效和高潜力的人才，都具备发现问题、合作解决问题的素养；</p>
        <p>「过往多年，我也看到很多学业优秀的学生、年轻的职场人，<strong>搞定学科学习不在话下，真正制约其发展的就是素养能力。」</strong></p>
        <p>那到底什么是素养呢？如果展开说的话，可能几十个小时也讲不清楚，我是这么理解的：</p>
        <p><strong>素养就是我们这些社会人明明都知道非常重要，却在过往高中里从来不去教、也不评估的「房间里的大象」。</strong></p>
        <img src="https://res.mojalab.cn/images/news/10/susan.jpeg" alt="Susan老师" class="object-cover rounded-lg w-full h-full my-8">
        <p>■Susan老师</p>
        <p>说个简单的故事，可能你就理解了。</p>
        <p>负责云谷高中工程与技术的木酱老师，对人工智能给人类社会和教育带来的重大改变有深刻的理解。</p>
        <p>「现在所说的AI时代具体是AIGC（人工智能自动内容生成）时代了，它带来最大的差别就是，以前我们要先学会知识，再去解决问题，而现在AIGC作为辅助工具，我们可以聚焦问题，利用AI去解决。」</p>
        <p>今年高中的同学们完成了一个「玩点真东西」的项目——<strong>复刻F18战斗机驾驶舱里的面板。</strong></p>
        <p>这是一个非常复杂的项目，编程，3D打印，调整模型等，需要三个小组协作，外加一位项目经理管理进度才能完成。</p>
        <p>等第一个成品出现的时候，大家发现F18的真实面板上有20个按钮，但学生们只能做出几个按钮，象牙解决必须先搞定线路复杂、按钮众多的集成电路板。</p>
        <p>「但这个名词一听就不是高中生该玩的东西呀，怎么办呢？」</p>
        <p>「AI的能力就是人类的能力」，木酱老师教会了同学们怎么利用AIGC学习复杂的知识点。同学们自己画图，一步一步把芯片、处理器、连线接入自制集成电路板中，最后终于实现「爱做多少个按钮，就做多少个按钮了！」</p>
        <p>终于，F18战斗机面板也升级到了第二代，做到了跟战斗机模拟器一摸一样的程度。</p>
        <p>在云谷，无论是学科的学习还是素养的学习，都是在用超前于传统教育的方式在学习，点亮的素养如在不确定中航行，「<strong>进入到现实环境中，去学习最新的知识，去解决真实的问题</strong>。」</p>
        <p>就像一个孩子说的：「我想改变世界，但不必等到我长大」。</p>
        <p>而云谷素养里有7个高阶素养，按照Susan老师的话说，<strong>那些点亮高阶素养的孩子，和成熟的职场人无异了，基本可以原地上班了！</strong></p>
        <p>谁敢说这不比重复性刷了几十套题符合标准答案更有价值呢？</p>
        
        <h2>教育的范式改变</h2>
        <p>从数据中学生与职场人能力的巨大鸿沟，到云谷学生身上看到的鸿沟的弥合，其中根本的改变，在于云谷教育范式的改革。</p>
        <p>所谓「范式」，是对于基本认知的共识达成一致，而当撼动了底层逻辑之时，就实现了颠覆性的变革。</p>
        <p>比如曾经统治世界的「地心说」，当基本的共识发生改变时，「日心说」被证实才是真理时，宗教、航海版图和世界秩序都发生了巨大变革。<strong>放在教育上，也是同理。</strong></p>
        <p>早在八年前，阿里身为企业主，从高中到大学再到社会，顺向迁移和不断深化发展的素养能力，通过「人才市场端」的逆向反馈，倒推回了云谷高中。</p>
        <p>素养教育正是云谷高中在教育上一次颠覆式创新的范式转移，<strong>成绩单不仅展示的是成绩这个固定的过程，而是能力这个动态的呈现——</strong></p>
        <p>从「向内」、「向外」、「向未来」三个板块展示学生在自我、自我与社会的关系维度的发展水平，还可以从时间维度看到素养成长从「萌芽、生长、精熟、卓越」的长期、动态过程。</p>
        <img src="https://res.mojalab.cn/images/news/10/cambridge.jpeg" alt="剑桥大学招生官来访" class="object-cover rounded-lg w-full h-full my-8">
        <p>■剑桥大学招生官来访，云谷学生与其交流</p>
        <p>这样的颠覆，从理念到具体落地如跨界思维，科技感和未来感，都需要极大的投入和极广的视野才可能实现。</p>
        <p>云谷可以说聚齐了中国极有教育创新精神的一批老师，走在科技+教育的前沿，AI在全校的应用都很深入：</p>
        <p><strong>「如果老师都没有面向未来的视野，没有跟时代发展同频，怎么可能教会给孩子们呢？」</strong></p>
        <p>目前云谷成为全球第一所美国境外使用素养成绩单申请大学的学校，毕业生大学走向好，在大学里表现特别出色，率先跑通了这条打通素养与大学，甚至与职场之间的路。</p>
        <p>下滑查看云谷学生的专业录取 👇</p>
        <p>每个人都找到自己的心之所向。</p>
        <img src="https://res.mojalab.cn/images/news/10/students1.jpeg" alt="学生录取1" class="object-cover rounded-lg w-full h-full my-8">
        <img src="https://res.mojalab.cn/images/news/10/students2.jpeg" alt="学生录取2" class="object-cover rounded-lg w-full h-full my-8">
        <img src="https://res.mojalab.cn/images/news/10/students3.jpeg" alt="学生录取3" class="object-cover rounded-lg w-full h-full my-8">
        <img src="https://res.mojalab.cn/images/news/10/students4.jpeg" alt="学生录取4" class="object-cover rounded-lg w-full h-full my-8">
        <p>这不是随便说说，而是被检验过的。</p>
        <p>得益于阿里的商业版图，老师推荐了不少孩子去相关企业去各大领域实习，不管读什么学科的孩子，都让人赞不绝口：实在不像是一个新人，太「好用」了！</p>
        <p>说来也巧，毕业生中点亮高阶素养最多的Zoey，从初中就进入了云谷，是今年回到校园来实习生之一。</p>
        <p><strong>目前就读于纽约大学的她展现出了极强的综合能力，</strong>身为创意达人，无论视频创意、拍摄剪辑、还是平面设计创意，策划活动等都可以直接「上手」，合作沟通交付统筹能力都相当在线，并且出品能力极强。</p>
        <p>实习结束后，市场部老师们对她恋恋不舍：<strong>我们想直接跟她签一个供应商服务合同了。</strong></p>
        <img src="https://res.mojalab.cn/images/news/10/interns.jpeg" alt="回母校实习的孩子们" class="object-cover rounded-lg w-full h-full my-8">
        <p>■回母校实习的孩子们</p>
        <p>「行动学习」负责老师Benny，从人才层面解读了这种「好用」——</p>
        <p>「<strong>我们提前将人才素养模型转变成了高中生听得懂也能学得会的素养教育，</strong>教的都是通用的人才模式，以当社会之网变大后，他们转型很快，顺理成章地将这种能力从高中迁移到大学，再迁移到社会中，这就是原地上班背后更深厚的含义。」</p>
        <p>爱因斯坦引用过的一句话：<strong>如果你把学校教授给你的一切知识都忘记了以后，剩下的那部分内容才是教育，</strong>我们的生活就是去运用剩下的内容去思考，去走进真实世界迎接并战胜困难，去开创事业，去追求美好生活。</p>
        <p>今年上半年走访了一圈美国大学，见了不少毕业生的Susan老师特别自豪，孩子说得最多的就是，<strong>离开云谷的每一天都在用素养去学习和生活，</strong>虽然从云谷毕业了，但这些东西永远都在。</p>
        <p>在AI带来第四次科技革命变革，当孩子离开学校后，剩下来的那部分到底是什么？</p>
        <p><strong>我想，云谷已经给出了一个高分答案。</strong></p>
        
        <h2>——谷雨星球本期福利——</h2>
        <p>云谷又迎来了下一个招生季</p>
        <p>我们有幸围观了去年火爆的开放日</p>
        <p>面对面与老师、学生、家长聊天</p>
        <p>了解云谷不为人知的日常点滴</p>
        <p>还与校长面对面</p>
        <p>对于有意向就读云谷的初二、初三学生</p>
        <p>分享最新的申请时间轴和开放日</p>
        <p>欢迎带孩子一起参加</p>
        <p>深度感受走在前沿不一样的教育</p>
        <p>去不了现场的也可以加老师咨询</p>
        <img src="https://res.mojalab.cn/images/news/10/qrcode1.jpeg" alt="二维码1" class="object-cover rounded-lg w-full h-full my-8">
        <img src="https://res.mojalab.cn/images/news/10/qrcode2.jpeg" alt="二维码2" class="object-cover rounded-lg w-full h-full my-8">
        <p><strong>微信改变了推送规则</strong></p>
        <p><strong>请关注并星标谷雨星球</strong></p>
        
        <p><strong>来源：谷雨星球</strong></p>
      </div>
    `
  },
  {
    id: 9,
    title: {
      en: "AI World, Science and Technology Dream",
      zh: "遨游AI世界，点燃科技梦想"
    },
    content: {
      en: "In the past two months, the 'mysterious Eastern force' of Hangzhou Six Dragons has once again sparked an AI boom. To meet the popular science needs of young people in Gongshu District for artificial intelligence and enhance scientific literacy, the 'Science Popularization Helps Double Reduction, Lights Up Scientific Dreams' activity organized AI field workers to enter campuses, bringing a series of futuristic technology feasts to teachers and students.",
      zh: "在过去的两个多月里，杭州六小龙这一股\"神秘的东方力量\"再一次掀起了人工智能的热潮。为进一步满足拱墅区内青少年对人工智能领域科普需求，提升科学素养，拱墅区\"科普助力双减 点亮科学梦想\"科学家进校园活动组织了人工智能领域科技工作者走进校园，为老师和同学们带来了一场场充满未来感的科技盛宴，激发青少年对前沿科技的浓厚兴趣。"
    },
    date: "2025-03-07",
    author: "拱墅区科协",
    sourceUrl: "https://www.hkx.org.cn/mindex/gzdt/12652.html",
    thumbnail: "https://res.mojalab.cn/images/news/9/1.jpg",
    fullContent: `
      <div class="article-content">
        <p>在过去的两个多月里，杭州六小龙这一股"神秘的东方力量"再一次掀起了人工智能的热潮。为进一步满足拱墅区内青少年对人工智能领域科普需求，提升科学素养，拱墅区"科普助力双减 点亮科学梦想"科学家进校园活动组织了人工智能领域科技工作者走进校园，为老师和同学们带来了一场场充满未来感的科技盛宴，激发青少年对前沿科技的浓厚兴趣。</p>
        
        <p>活动邀请了杭州云谷学校工程技术老师兼教育科技技术顾问代立晨为杭州市卖鱼桥小学六年级的同学们带来了主题为"拥抱AI时代——每个人都有自己的哆啦A梦"科普讲座。代老师从人工智能的发展史讲起，深入浅出，为大家讲述了大模型的工作原理以及用途，并以英语学习为例子，为大家介绍了如何运用用AI帮助学习，鼓励大家向AI学习深度思考。最后，同学们提出了"AI比人类聪明吗？""为什么会出现服务器繁忙提示？"等问题与代老师进行深入互动。</p>
        
        <img src="https://res.mojalab.cn/images/news/9/1.jpg" alt="讲座现场" class="object-cover rounded-lg w-full h-full my-8">
        
        <p>此次活动还邀请了北京航空航天大学杭州创新研究院高级副研究员马群老师为杭州市文晖中心师生带来了主题为"创想AI 走向智能"科普讲座。讲座中，马群老师以生动形象的语言和贴近生活的案例，深入浅出地讲解了人工智能的定义、发展历程、应用领域以及未来趋势。从人脸识别到语音助手，从家政服务到自动驾驶，马老师用一个个鲜活的例子，向同学们展示了人工智能如何改变着我们的生活。同时马老师也指出人工智能不是万能的，也存在着缺陷和不足，并引导大家思考人工智能带来的机遇与挑战。互动环节，同学们踊跃提问，马老师耐心解答，现场气氛热烈。同学们纷纷表示，通过此次讲座，对人工智能有了更深入的了解，也激发了对科技创新的浓厚兴趣。</p>
        
        <img src="https://res.mojalab.cn/images/news/9/2.jpg" alt="讲座现场" class="object-cover rounded-lg w-full h-full my-8">
        
        <p>随着科技的飞速发展，人工智能已经渗透到生活的方方面面，成为推动社会进步的重要力量。拱墅区"科普助力双减 点亮科学梦想"科学家进校园活动暨人工智能系列科普主题讲座进校园活动旨在普及以人工智能为代表的科学知识，弘扬科学（家）精神，培养学生的创新意识和实践能力。下一步，拱墅区科协将邀请更多科学家、科技工作者，推动更多精品课程走进校园，让学生们了解科技前沿动态，培养他们对科学的热爱和探索精神，点燃青少年科技梦想，为未来投身科技创新领域打下坚实基础。</p>
        
        <p><strong>来源：拱墅区科协</strong></p>
      </div>
    `
  },
  {
    id: 6,
    title: {
      en: "Second Science Education Conference \"Science and Technology Achievement Popularization Release\" Annual Special Planning Activity Held",
      zh: "第二届科学教育大会\"科技成果科普发布\"年度特别策划活动举行"
    },
    content: {
      en: "In Dai Lichen's view, there is no skill called 'AI usage techniques.' Using AI 'requires a person to understand scenarios, empathize with others, identify opportunities in social life, consider different future possibilities...' The AI era will definitely produce new art forms, new ways of working, and new life pleasures. We will all have better lives.",
      zh: "在代立晨看来，并没有一个叫做\"AI使用技巧\" 的技能，会使用AI\"是要求一个人能够理解场景、与他人共情、识别社会生活中的机会、考虑未来的不同可能性……\"AI时代一定会产生新的艺术形式、新的工作方式、新的生活乐趣，我们都将会有更加美好的人生。\""
    },
    date: "2024-08-26",
    author: "省科协科普部、橙柿互动",
    sourceUrl: "https://www.zast.org.cn/art/2024/8/26/art_1673864_58973805.html",
    thumbnail: "https://res.mojalab.cn/images/news/6/955.jpg",
    fullContent: `
      <div class="article-content">
        <p>小学三年级的5位小学生通过AI写了一本名为《情绪宝典》的书；初一的2位学生利用AI做了一个可以分享3D建模作品的网站；高三的3位学生通过AI做了一个可以将3位同学的特征合成到一起，并最终做成视频的虚拟数字人……这些都是正在杭州的学校里发生的事。</p>
        <img src="https://res.mojalab.cn/images/news/6/955.jpg" alt="新闻图片1" class="object-cover rounded-lg w-full h-full my-8">
        <p>在这个科技飞速发展的时代，教育的变革与创新从未如此紧迫。而AIGC（生成式人工智能）技术的崛起，就如同划破黑夜的一道曙光，为科学教育带来了前所未有的机遇与挑战。</p>
        <img src="https://res.mojalab.cn/images/news/6/958.jpg" alt="新闻图片2" class="object-cover rounded-lg w-full h-full my-8">
        <p>AIGC究竟可以给我们的教育带来些什么？未来的科学教育将会怎样改变？</p>
        <p>8月24日下午，第二届科学教育大会"科技成果科普发布"年度特别策划活动在钱塘江畔的杭州国际博览中心举行。3位在科技和教育领域颇具影响力的嘉宾，共同探讨了这个引领时代潮流、充满无限可能的主题——"智能未来：AIGC 引领科学教育新纪元"。</p>
        <img src="https://res.mojalab.cn/images/news/6/960.jpg" alt="新闻图片3" class="object-cover rounded-lg w-full h-full my-8">
        <p>高校、中学、企业</p>
        <p>多重视角看AIGC如何赋能科学教育</p>
        <p>首先登场的是北京师范大学科学教育研究院院长、教育部基础教育教学指导委员会科学教学专委会主任委员郑永和。</p>
        <p>想象一下，将全国某门课（比如语文）教得最好的20位教师教某一堂课的过程都记录下来，让AI学习，然后生成一个综合性的教学方案再教学生，会是怎样的效果？郑永和的这个假设让在场观众一下子打开了对于AIGC教学应用的想象。</p>
        <img src="https://res.mojalab.cn/images/news/6/962.jpg" alt="新闻图片4" class="object-cover rounded-lg w-full h-full my-8">
        <p>郑永和表示，多媒体、互联网、VR、元宇宙等几轮标志性的技术变革对教育的推进，都是比较"物化"的，工具性特别强，而生成式的人工智能带有自己的"思维"，与教育结合会创造出非常大的可能性，为教育发展带来新机遇。一堂45分钟的课，或许可以先用20分钟让学生和机器进行问答、交互，再用剩下的时间让教师和学生进行深度交流。</p>
        <p>在谈到AIGC赋能科学教育和科技创新人才培养的紧迫性时，郑永和特别谈到了"小模型"。近些年，我们可能听多了"大模型"，结合具体学科（比如生物、化学等）的小模型对教育的创新发展也具有非常重要的战略意义。</p>
        <img src="https://res.mojalab.cn/images/news/6/965.jpg" alt="新闻图片5" class="object-cover rounded-lg w-full h-full my-8">
        <p>同样来自高校，但还有另一重企业家身份的朱明雄为我们带来了从社会人才需求角度的观察与思考。作为杭州国科智飞科技有限公司CEO、国科大杭高院科创俱乐部主席，朱明雄在科学教育的探索和实践中也有不少经验。</p>
        <p>在朱明雄看来，传统的教学形态是"师-生"，新时代相对被认可的是"师-生-机"，而令部分人担忧的是会演变成"生-机"教学形态。</p>
        <img src="https://res.mojalab.cn/images/news/6/967.jpg" alt="新闻图片6" class="object-cover rounded-lg w-full h-full my-8">
        <p>朱明雄表示，在国科大杭高院今年的期末考试中，有部分学科是开卷的，允许学生上网、使用各种AI工具。如何在这种情况下维持考试的价值和难度？比如24号考试，教师会从23号发表的论文中提取素材，这些最前沿的内容，ChatGPT上是没有的，这时候就很考验学生的分析思维能力了。</p>
        <img src="https://res.mojalab.cn/images/news/6/969.jpg" alt="新闻图片7" class="object-cover rounded-lg w-full h-full my-8">
        <p>最后上场的代立晨，目前是一位云谷学校的高中工程技术老师，也是资深的技术专家、原阿里云航空行业技术总监。代立晨表示，从科技公司的团队领导者到课堂，看似截然不同，但目标都是在不断变化的世界中培养出合适的人才。</p>
        <p>教学目标的变化来自于人才需求的变化。现如今，AI正在替代带货主播、配音演员、翻译等越来越多的工作。在代立晨看来，并没有一个叫做"AI使用技巧" 的技能，"会使用AI"是要求一个人能够理解场景、与他人共情、识别社会生活中的机会、考虑未来的不同可能性……这也是他所在的学校强调的素养。</p>
        <img src="https://res.mojalab.cn/images/news/6/970.jpg" alt="新闻图片8" class="object-cover rounded-lg w-full h-full my-8">
        <p>科学沙龙碰撞思维火花</p>
        <p>探寻AIGC+教育的多种可能性</p>
        <p>本次活动的重头戏——科学沙龙环节，3位嘉宾回答了一些观众们感兴趣的问题，与他们进行了愉快的交流与讨论。</p>
        <p>郑永和和代立晨都是从科技界转到教育领域的。谈及身份转变的契机和感悟，郑永和表示，随着新一轮科技革命和产业变革的逐步推进，科技创新成为提高综合国力的决定性因素，从教育入手、培养科技创新人才可以从根源上解决科技领域的"卡脖子"问题，因此希望能把自己在科技界的经验带到教育实践中。</p>
        <img src="https://res.mojalab.cn/images/news/6/971.jpg" alt="新闻图片9" class="object-cover rounded-lg w-full h-full my-8">
        <p>AIGC对教育理念、教学目标、学习方式等方面的影响都指向了创新能力的培养，多年的科技业工作经历也让他更加深刻地体会到这点。因此需要对AIGC赋能教育进行系统性布局，推动教育实践的创新变革，为科技创新人才培养赋能。</p>
        <p>未来的科学教师需要具备哪些新的技能和知识？郑永和说，对学生和教师的某些要求是相似的，未来的教师更加需要提高自身的学习能力和创新素养，学会更好地运用AIGC等技术工具。</p>
        <img src="https://res.mojalab.cn/images/news/6/975.jpg" alt="新闻图片10" class="object-cover rounded-lg w-full h-full my-8">
        <p>代立晨则说，在企业里带团队和当教师其实有一定的相似性，都是培养人，更具体地说，是在不断变化的世界中培养出合适的人才。之前在科技公司的一次经历让他印象深刻，客户对于某数据智能平台抛出一个问题，"工具不错，没人会用啊？"这让他意识到，没有好的人才建设，很多技术出来是跟不上的。他希望通过自己的工作经历让工程技术的教学能更贴近企业实际，面向未来。</p>
        <p>面对"现在学编程还有什么意义？"这个问题，代立晨表示，编程教育应该教思维模式，而不是编码本身。未来并不是说不需要编程了，而是会不断发展到更高级的语言。</p>
        <img src="https://res.mojalab.cn/images/news/6/977.jpg" alt="新闻图片11" class="object-cover rounded-lg w-full h-full my-8">
        <p>"如何打造一个真正的战斗机驾驶舱？"嘉宾们对代立晨先前演讲里提到的这个高中生完成的项目很感兴趣。</p>
        <p>AI带来了让所有学生都能够去做更复杂的任务的可能性。代立晨介绍了制作的具体过程，包括3D建模、EDA电路板设计和基于arduino对电脑模拟器的通信等。在AI的帮助下，边学边做，一步步摸索。"我有同事称这个过程叫作'下山式'学习，我觉得很贴切。下山的路或许窄、曲折，但终将会到达，而你也可以随时选择折返，欣赏过程中的风景。"</p>
        <img src="https://res.mojalab.cn/images/news/6/978.jpg" alt="新闻图片12" class="object-cover rounded-lg w-full h-full my-8">
        <p>这一点，朱明雄在企业招聘中同样实践过。以前可能会问具体的技术问题，现在有时也会给应试者一个超越他现有知识范畴的、很复杂的问题，限时两天完成，使用任何方法都可以，这样能更好地筛选出符合企业需求的综合能力强的人才。并且从实际看来，绝大多数应试者都会借助各种AI工具来完成这类任务。</p>
        <p>在人才的培训上，AIGC正起到越来越重要的作用。朱明雄举例，比如传统企业招聘500人，要配备至少15人的HR和培训团队作支撑。而现在，将企业内部的资料全部数据化，做成一个智能平台，让新员工在平台上通过模拟对话等形式进行学习，大大减轻了公司的负担。</p>
        <p>关于AICG和科学教育</p>
        <p>他们怎么说？</p>
        <p>郑永和："将来，我们不会去问'十万个为什么'，更多的是'十万个干什么''怎么干'，在特定情景下解决问题的素养变得非常重要。"</p>
        <p>朱明雄："过去几年在技术领域我们需要的是垂直类的专才，但今天，AIGC时代更需要的是有创造性、分析性思维、技术素养、好奇心和学习能力等综合技能的人才。"</p>
        <p>代立晨："AI时代一定会产生新的艺术形式、新的工作方式、新的生活乐趣，我们都将会有更加美好的人生。"</p>
        <p><strong>来源：省科协科普部、橙柿互动</strong></p>
      </div>
    `
  },
  {
    id: 3,
    title: {
      en: "CCTV News Focuses on Guizhou: Building 'Rockets' for Children in the Mountains",
      zh: "央视新闻聚焦贵州：为大山里的孩子造\"火箭\""
    },
    content: {
      en: "In the mountains of Pu'an County, Guizhou Province, a group of mountain children realized their dream of building rockets. This project was made possible by several young people from the city, who not only built flying rockets for the children but also planted seeds of exploration in their hearts.",
      zh: "在贵州省黔西南州普安县的大山里，一群山里娃实现了造火箭的梦想。这个项目由几个城里来的年轻人帮助实现，他们不仅给孩子们造出了会飞的火箭，还给孩子们种下了探索的种子。"
    },
    date: "2022-01-14",
    author: "央视新闻",
    sourceUrl: "https://news.qq.com/rain/a/20220114A01FUN00",
    thumbnail: "https://res.mojalab.cn/images/news/3/image-1.jpg",
    fullContent: `
      <div class="article-content">
        <p>2021年，是中国航天事业发展的大年。这一年里，我们有了空间站，有了出差三人组……全年，中国航天发射一共55次，世界领跑。而2022年，我们要关注的第一次发射，不是在西昌、也不是在酒泉、文昌，而是在贵州。</p>
        <p>近日，在贵州省黔西南州普安县的大山里，一枚特殊的火箭成功发射。而这一切，源于一群山里娃"想造一个真正火箭"的愿望。</p>
        <p>帮他们实现这个愿望的，是几个城里来的年轻人，他们不但给这些山里的孩子造出了会飞的新年礼物——火箭，还给孩子们种下了探索的种子。</p>
        <p><strong>"我们能造一个真的火箭吗？"</strong></p>
        <img src="https://res.mojalab.cn/images/news/3/image-1.jpg" alt="新闻图片 1" class="object-cover rounded-lg w-full h-full my-8">
        <p>这群来自贵州普安县铅矿学校四、五年级的小学生，他们对天空的想象五花八门。现在，孩子们站在大山里的一个小山包上，正兴奋地不断练习倒数计时，在期盼着什么。</p>
        <p>山下，一个闲置的养鸡场旁，几个年轻人在冬日暖阳里，忙得满头大汗。他们正在给孩子们组装一个大家伙——火箭！</p>
        <img src="https://res.mojalab.cn/images/news/3/image-2.jpg" alt="新闻图片 2" class="object-cover rounded-lg w-full h-full my-8">
        <p>曹林和代立晨，都是软件工程师。一个偶然的机会，他俩作为志愿者，通过线上授课的方式，给普安县铅矿学校的孩子们，上了两堂有关太空和航天知识的视频科普课，很受孩子们的欢迎。而课堂上孩子们的一个提问，让两个程序员动了心思。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-3.jpg" alt="新闻图片 3" class="object-cover rounded-lg w-full h-full my-8">
        <p><strong>乡村科普支教志愿者 曹林：</strong>（小朋友）说老师我们能造一个真的火箭吗，当时其实我们就知道这件事情非常难，但是下面有200多个小朋友看着你，然后眼睛里有期待感，我们当时就说好那我们去试一下。其实我们就带着这样的忐忑，就出发了。</p>
        <p>说干就干，可是曹林、代立晨每天的工作都是码代码，从没接触过火箭。火箭要多高？分设几个舱？带什么功能？怎么搞追踪？动力从哪儿来？两个程序员，眼前一抹黑。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-4.jpg" alt="新闻图片 4" class="object-cover rounded-lg w-full h-full my-8">
        <p>于是，曹林通过网上的火箭爱好者群或论坛，找到了还在深圳高校读书的火箭爱好者余畅一起加盟。三个小伙子通过网络沟通、分工，利用业余时间每天干到凌晨。十几天过后，终于拿出了一份很"亲近"小朋友的透明火箭设计方案。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-5.jpg" alt="新闻图片 5" class="object-cover rounded-lg w-full h-full my-8">
        <p><strong>乡村科普支教志愿者 曹林：</strong>既要小朋友看得见，又要小朋友能感知，所以我们设定了800米的飞行高度，在这个高度上小朋友是能很清晰地看见火箭的轨迹的。火箭长度的设计是1.37米，正好比四五年级的小朋友可能略高一点点，这样小朋友抬起头就能看到一个火箭，就会非常有仪式感。</p>
        <p>火箭的制作同样充满挑战。三个小伙伴各显神通，火箭外壳3D打印，航电系统自己焊接，固体燃料自己调配，北斗模块、发射架和降落伞网上订制……</p>
        <img src="https://res.mojalab.cn/images/news/3/image-6.jpg" alt="新闻图片 6" class="object-cover rounded-lg w-full h-full my-8">
        <p>三个多月后，一枚小火箭需要的100多个零部件全部就绪。三个小伙伴分别从杭州和深圳出发，向普安会合。</p>
        <p><strong>攻坚克难 小"火箭"一飞冲天</strong></p>
        <p>奔着为大山里的孩子实地发射一枚火箭的小目标，年轻人们出发了。而要达到目标，过程总是曲折的。</p>
        <p>这个一起网聊了将近四个月的小团队，在经历不断磨合和克服困难后，向着目标不断前进。</p>
        <p>在和余畅这个"网友"见面后，大伙儿取了11个大箱子的火箭零配件和组装工具，马不停蹄赶往铅矿学校，要尽快寻找发射场、确定发射时间。而气象和地形的复杂，让团队的工作进度第一次陷入僵局。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-7.jpg" alt="新闻图片 7" class="object-cover rounded-lg w-full h-full my-8">
        <p>最终，在铅矿学校校长、老师的帮助下，发射场地选在了大山深处一个闲置的养鸡场里，确保安全。紧接着，在一间简陋的民房里，小伙伴们就着一盆柴火、一张木桌，开始火箭组装。而伴随着组装工作进行的，也有大家不断的争论。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-8.jpg" alt="新闻图片 8" class="object-cover rounded-lg w-full h-full my-8">
        <p>所有的争论，都是为了更好地接近目标。经过一昼夜努力，火箭组装完毕。第二天，为了给孩子们科普知识，找找发射火箭的感觉。大家带着四枚微型火箭来到学校，一边给孩子们讲课，一边让孩子们亲手发射火箭。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-9.jpg" alt="新闻图片 9" class="object-cover rounded-lg w-full h-full my-8">
        <p>第三天，普安气象良好，大伙儿在发射场都很兴奋。泥巴水塘旁，空心砖一坐，曹林和余畅开始组装发射架。而由于前一天空气湿度大，放在露天的电动组装工具受潮罢工，大家只得手动拧螺栓，导致组装进度严重滞后。同时，曹林偏胖的身体也出现了状况。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-10.jpg" alt="新闻图片 10" class="object-cover rounded-lg w-full h-full my-8">
        <p><strong>乡村科普支教志愿者 曹林：</strong>脚有点痛风，刚到贵州比较激动吃了点酸汤鱼，本来尿酸比较点高，就痛风了。</p>
        <p>所幸天公作美，良好的气象条件一直保持。大伙儿一边组装，一边还抽空给孩子们现场教学。而孩子们对太空和航天知识的渴望和敏锐，令大家感到振奋。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-11.jpg" alt="新闻图片 11" class="object-cover rounded-lg w-full h-full my-8">
        <p><strong>普安铅矿学校的学生：</strong>能不能利用太阳来帮助人类抗疫。</p>
        <p><strong>乡村科普支教志愿者 曹林：</strong>其实小朋友求知欲很强，他们居然知道黑洞，知道中子星，（这是）四年级的小朋友，他们希望看到更大的世界。</p>
        <p>下午3时30分，大家齐心协力，火箭终于进入发射架。经过紧张的航电调试之后，孩子们和程序员一起，开始倒计时。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-12.jpg" alt="新闻图片 12" class="object-cover rounded-lg w-full h-full my-8">
        <p><strong>乡村科普支教志愿者 曹林：</strong>其实是给他们种下了一个种子，让他们知道（像）我们这样的普通人也可以跟航空航天事业结合，可能这些小朋友以后，未来二十年或三十年，真的会出现中国的宇航员、中国的航天载人总师从他们中间诞生，这些都是无限可能的。</p>
        <p><strong>普安铅矿学校校长 黄国成：</strong>我们发射这样一个小的东西，都要花这么大的力气，你想国家的卫星发射，那是要花多大的人力、财力、物力才能做得好。我觉得要培养学生能够敬畏、懂得、热爱（科学）， 我觉得这个是很重要的。</p>
        <p>一枚小火箭，把城里的年轻人和山里的孩子们联系在一起。在曹林和小伙伴们看来，虽然是他们给孩子们带来知识和火箭，但彼此都是收获满满。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-13.jpg" alt="新闻图片 13" class="object-cover rounded-lg w-full h-full my-8">
        <p><strong>乡村科普支教志愿者 代立晨：</strong>昨天有一个小朋友来问我，地球会不会跟太阳在几千年后相撞。他们带给我太多惊喜了，有很多东西我完全没有想到，让我重新认识了乡村，让我重新认识了乡村小学，也重新让我认识了现在的这些小朋友。</p>
        <img src="https://res.mojalab.cn/images/news/3/image-14.jpg" alt="新闻图片 14" class="object-cover rounded-lg w-full h-full my-8">
        <p><strong>乡村科普支教志愿者 曹林：</strong>他们人在地球上，但可能他们的思想早就飘到宇宙外面是什么去了。很多我们没有办法回答的问题，甚至科学家没有回答的问题，但是在小朋友心里面就是一颗种子，它慢慢在萌发。今天这个小火箭飞的距离也不高，飞的时间也不长，但是我相信他们目睹过了，知道什么是航天，知道什么是空间站，就知道什么是未来。</p>
        <p><strong>来源 央视新闻客户端</strong></p>
        <p><strong>编辑 徐然</strong></p>
        <p><strong>编审 王璐瑶 施昱凌</strong></p>
      </div>
    `,
    videoUrl: "https://res.mojalab.cn/images/news/3/video.mp4"
  },
  {
    id: 5,
    title: {
      en: "Baiyun Airport Launches First Aircraft Parking Warning System in China",
      zh: "白云机场推出国内首个飞机泊位警示系统"
    },
    content: {
      en: "The warning system combines traffic signals with the existing parking system, automating three processes: aircraft parking guidance, information processing, and signal light control. It ensures aircraft parking safety by displaying appropriate traffic signals based on the current parking status, improving service lane operation speed and reducing aircraft parking risks.",
      zh: "该警示系统将交通信号灯和原有泊位系统结合起来，通过系统自动化控制飞机泊位引导、信息自动化处理和信号灯指挥三个流程，实现自动泊位系统根据当前机位的不同状态显示相应的交通信号，确保飞机进位的安全性，提高了服务车道运行速度，降低飞机进位风险。"
    },
    date: "2021-10-14",
    author: "中国民航局",
    sourceUrl: "http://zn.caac.gov.cn/ZN_XXGK/ZN_HYDT/202110/t20211014_209614.html",
    thumbnail: "https://res.mojalab.cn/images/news/5/thumb.jpg",
    fullContent: `
      <div class="article-content">
        <p>近日，白云机场投入运行国内首个飞机泊位警示系统！该警示系统将交通信号灯和原有泊位系统结合起来，通过系统自动化控制飞机泊位引导、信息自动化处理和信号灯指挥三个流程，实现自动泊位系统根据当前机位的不同状态显示相应的交通信号，确保飞机进位的安全性，提高了服务车道运行速度，降低飞机进位风险。</p>
        <p>民航局相关安全管理规定：在航空器进入机位过程中，任何车辆、人员不得在航空器和接机人员或目视泊位引导系统之间穿行。近年来，白云机场引进了飞机自动泊位系统来帮助飞机"自动泊车"，自动泊位不再需要人工指挥。因为泊位信号只在泊位系统与飞行员之间传递，且航站楼设施设备会遮挡视线，这就存在行驶车辆和进位航空器冲突的安全风险。</p>
        <p>鉴于此种情况，白云机场相关工作人员通过对可能出现的问题进行实地勘察和图纸对比，最后决定借鉴道路交通信号灯的模式，联合泊位系统厂家，在现有的泊位系统工作模式上进行创新，将交通信号灯和泊位系统结合起来，开发出一套飞机泊位警示系统。泊位警示系统由自动泊位系统、中控通信系统和信号灯指示系统三部分组成，当机位有飞机正在进入时，机位正前方的服务车道就会向司机亮起红灯，禁止车辆通行；相邻两个机位前方的服务车道会向司机亮起黄灯，提醒司机慢行；飞机进位完成后，就会亮起绿灯，车辆正常通行。</p>
        <p>目前，白云机场在T2航站楼所有存在视线盲区的37个停机位都安装了泊位警示系统，服务车道的车辆通行效率大大提高。飞机泊位警示系统是白云机场打造"平安机场""智慧机场"、解决车辆与飞机运行冲突问题的重要尝试，该系统在保证安全秩序的前提下尽可能提高了服务车道的运行效率，在国内机场尚属首创。</p>
        <p><strong>来源：中国民航局</strong></p>
      </div>
    `
  },
  
  {
    id: 4,
    title: {
      en: "Tech Against COVID: Alibaba Cloud and Qianfang Technology Support Civil Aviation Epidemic Prevention",
      zh: "科技抗疫 阿里云、千方科技助力民航疫情防控"
    },
    content: {
      en: "On February 28, Alibaba Cloud released an aviation industry heat prediction service. This service, in collaboration with Fliggy and Flight Manager, provides support for airlines' route operation recovery and service refinement management during the later stages of epidemic prevention and control.",
      zh: "2月28日，阿里云发布航空行业热度预测服务。这项服务联合飞猪和航班管家，在疫情防控后期阶段，为航空公司的航线运行恢复以及服务的精细化管理提供支持。"
    },
    date: "2020-03-04",
    author: "中国民航网",
    sourceUrl: "http://caacnews.com.cn/1/4/202003/t20200304_1294451.html",
    thumbnail: "https://res.mojalab.cn/images/news/4/cover.png",
    fullContent: `
      <div class="article-content">
        <p>《中国民航报》、中国民航网 记者张薇 报道：2月28日，阿里云发布航空行业热度预测服务。这项服务联合飞猪和航班管家，在疫情防控后期阶段，为航空公司的航线运行恢复以及服务的精细化管理提供支持。疫情发生以来，阿里云和联合其合作伙伴千方科技旗下的远航通，为民航疫情的防控工作提供科技助力。</p>
        <p>据了解，该项服务将可为航空公司提供未来一个月的运行支持：包括一个月的旅客流量预测、航班分配和航线优化支持，同时提供未来一个月航班的活跃度趋势预测、城市出行趋势，同时可以对航空公司的航班执行率等具体信息进行分析复盘，提供精细化的航班管理。</p>
        <p>新冠肺炎疫情发生以来，民航各行业、各单位、各部门都在积极抗击疫情，战斗在疫情防控的第一线。阿里云和远航通依靠多年在航空行业的经验沉淀，为航空企业提供生产效率提升、降本增效的解决方案；提供包括"千班千面"的精细化管理，针对每一次航班任务为机组操作提供关注事项和参考建议服务；同时，为了解决疫情期间航空企业机组人员远程培训的需求，提供基于阿里云的在线培训课程体系服务。</p>
        <p>疫情期间，阿里云结合航空行业的情况积极推进了航空行业应对疫情的技术方案，从园区管理、机场、员工管理、办公协同和业务支持五大方面帮助航空企业应对疫情。阿里云为整个疫情提供防控数据的收集、统计、分析以及为政府、防疫单位，以及民航和交通类的生产单位提供了非常好的数据保障和信息流的能力。</p>
        <p>"我们现在主要的方向是基于国内主要城市航空出行需求，从这个方面帮助航空公司判断未来主要市场需求的热度以及市场需求集中的方向，从而帮助航空公司有效的组织运力，同时能够在数据支撑下帮助航空公司合理的进行收益以及利润方面的保障。" 阿里云智能航空行业资深业务拓展专家高乐奇介绍，"航空公司、机场等很多的客户也都在使用钉钉进行在线培训，利用支付宝小程序将疫情情况上报，我们的产品可以帮助客户实现防疫的上报和汇总。"</p>
        <p>作为阿里云重要合作伙伴，远航通基于大数据为民航企业生产优化和安全保障提供数字智能专业服务。面对此次疫情，远航通携手阿里云推出航空公司航班运行智能优化云服务，支持航空公司的生产恢复以及持续降本增效；通过线上远程的专业培训平台为航空公司机组人员提供远程培训；同时，为机场用户搭建生产安全风险的量化管理系统，针对风险预警提供快速响应的措施建议，并持续跟进风险优化效果，实现智能安全管理的闭环。</p>
        <p><strong>来源：中国民航网</strong></p>
        <p><strong>编辑：张薇</strong></p>
      </div>
    `
  },
  {
    id: 7,
    title: {
      en: "There's a Kind of 'Tech Filial Piety' Called Remote Smart Elderly Care",
      zh: "有一种\"科技尽孝\"叫远程智慧养老"
    },
    content: {
      en: "The '13th Five-Year Plan' for National Aging Development and Elderly Care System Construction released by the State Council in 2017 pointed out: 'It is expected that by 2020 (next year), the national elderly population over 60 years old will increase to about 255 million, and the number of elderly living alone and empty nesters will increase to about 118 million.'",
      zh: "国务院在2017年公布的《\"十三五\"国家老龄事业发展和养老体系建设规划》中指出：\"预计到2020年（也就是明年），全国60岁以上老年人口将增加到2.55亿人左右，独居和空巢老年人将增加到1.18亿人左右。\""
    },
    date: "2019-02-25",
    author: "阿里巴巴公益",
    sourceUrl: "https://mp.weixin.qq.com/s?__biz=MzU2MzAxODI0Nw==&mid=2247567386&idx=1&sn=3ae23b2581765efcf8e3fc3f87933310",
    thumbnail: "https://res.mojalab.cn/images/news/7/bracelet.png",
    fullContent: `
      <div class="article-content">
        <p>国务院在2017年公布的《\"十三五\"国家老龄事业发展和养老体系建设规划》中指出：\"预计到2020年（也就是明年），全国60岁以上老年人口将增加到2.55亿人左右，独居和空巢老年人将增加到1.18亿人左右。\"</p>
        <img src="https://res.mojalab.cn/images/news/7/cover.png" alt="新闻图片1" class="object-cover rounded-lg w-full h-full my-8">
        <p>在这样的形势下，远在异乡的儿女们，如何照顾家里的老人成为了一个逃不开的话题。</p>
        <p>你们还记得去年那个为视障人士爆改一间房的代立晨（木酱）吗？</p>
        <img src="https://res.mojalab.cn/images/news/7/previous_project.png" alt="新闻图片2" class="object-cover rounded-lg w-full h-full my-8">
        <p>今年他又出来搞事情了，这次他的目标是老年人。</p>
        <img src="https://res.mojalab.cn/images/news/7/new_project.png" alt="新闻图片3" class="object-cover rounded-lg w-full h-full my-8">
        <p>前不久，家住武汉的一对老夫妻找到了代立晨（木酱）。</p>
        <p>他们是开心爷爷和快乐奶奶。</p>
        <p>两位老人一位80岁，一位77岁，平时最爱的就是玩直播，爷爷唱歌，奶奶跳舞。奶奶问：\"开心爷爷，你几岁啦？\"爷爷回答：\"我8岁啦！\"</p>
        <p>一开始，网友以为爷爷是在逗大家，但问得多了，网友们发现，事实并非如此。</p>
        <img src="https://res.mojalab.cn/images/news/7/grandparents.png" alt="新闻图片4" class="object-cover rounded-lg w-full h-full my-8">
        <p>爷爷年轻的时候参与了南京长江大桥的建设。</p>
        <p>像那个年代走过来的很多人一样，爷爷几乎将一生都献给了祖国的桥梁事业，一年也回不了几次家。</p>
        <img src="https://res.mojalab.cn/images/news/7/bridge.png" alt="新闻图片5" class="object-cover rounded-lg w-full h-full my-8">
        <p>奶奶就坚持三四天给爷爷写一封信，这一写就是17年，2000多封信。</p>
        <p>终于等到了爷爷退休，突如其来的疾病却夺走了他的记忆。</p>
        <p>在这儿孙满堂之时，爷爷却叫不出他们的名字。</p>
        <img src="https://res.mojalab.cn/images/news/7/letters.png" alt="新闻图片6" class="object-cover rounded-lg w-full h-full my-8">
        <p>全球每3秒钟，就有1个人患上阿尔兹海默症，这种疾病最残忍的是——不可逆转。</p>
        <p>从爷爷患病以后，奶奶坚持亲自护理，寸步不离。</p>
        <p>因为一旦离开，爷爷就有可能走丢。</p>
        <p>有一次爷爷自顾自地推门出去，家人找了8个小时才把他找回来，问他为什么出去。他说\"我要找我老婆，曹雪梅\"。</p>
        <img src="https://res.mojalab.cn/images/news/7/care.png" alt="新闻图片7" class="object-cover rounded-lg w-full h-full my-8">
        <p>被爷爷和奶奶的深情和可爱打动，木酱决定与合作伙伴光速达共同研发一套远程看护解决方案来帮助他们。</p>
        <p>在爷爷家，借助物联网传感器，可以记录爷爷在家里的所有行为。通过智能分析，对异样的行为进行预警。比如说爷爷奶奶平时9点钟睡觉突然今天 9:30 了还没有睡，系统就会给你发送一条预警， 比如爷爷晚上起夜次数多了， 第二天也会预警给你。</p>
        <img src="https://res.mojalab.cn/images/news/7/sensors.png" alt="新闻图片8" class="object-cover rounded-lg w-full h-full my-8">
        <p>爷爷佩戴了一个手环，这个手环会监测爷爷的一些身体指数，再加上刚刚说的人体传感器给出的睡眠质量数据，睡觉和起床的时间等等， 系统会给一个综合的评分。如果今天给出的评分偏低了，那就要格外的关注一下爷爷的身体了。</p>
        <img src="https://res.mojalab.cn/images/news/7/bracelet.png" alt="新闻图片9" class="object-cover rounded-lg w-full h-full my-8">
        <p>手环更大的功能是可以实时检测爷爷的定位，如果爷爷以后再走丢可以通过地图定位找到他，还能一键呼叫爷爷，爷爷也可以一键报警。</p>
        <img src="https://res.mojalab.cn/images/news/7/location.png" alt="新闻图片10" class="object-cover rounded-lg w-full h-full my-8">
        <p>手机软件还中有爷爷家温度湿度的数据，孙女贝贝可以实时监测到老人家里的环境， 如果爷爷奶奶家温度过低， 也会预警到贝贝手机，还有开启空调的按钮，可以远程一键给他们开启空调。</p>
        <img src="https://res.mojalab.cn/images/news/7/temperature.png" alt="新闻图片11" class="object-cover rounded-lg w-full h-full my-8">
        <p>智能药箱是另一个惊喜，贝贝可以在系统里设置爷爷每天需要吃药的时间。比如爷爷每天晚上八点钟要吃药打针，八点十分，药箱还没有打开，那么贝贝手机端就会弹出一个提示，进入页面之后有个一键通话的功能，可以直接给奶奶打过去电话，提醒她给爷爷吃药。</p>
        <img src="https://res.mojalab.cn/images/news/7/medicine.png" alt="新闻图片12" class="object-cover rounded-lg w-full h-full my-8">
        <p>如果药箱按时打开了的话，也会有家人的语音提示。[孙女语音提示: 奶奶， 现在要给爷爷打胰岛素哦， 不是降压药， 不要拿错啦]</p>
        <p>智能冰箱可以自动识别冰箱里有什么食材，还能依据爷爷奶奶的身体状况，给出提示音。[孙女语音提示: 奶奶， 柚子对你和爷爷的身体特别好，记得多吃一点啊]</p>
        <p>如果冰箱里的食材快没有了，还有一个一键购买的功能，直接跳转到外卖程序， 一键外卖到爷爷奶奶家。</p>
        <img src="https://res.mojalab.cn/images/news/7/fridge.png" alt="新闻图片13" class="object-cover rounded-lg w-full h-full my-8">
        <p>智能画框，是为爷爷量身定做的。因为爷爷的短期记忆的原因，儿女们可以把随时拍的视频和照片一键传运到爷爷奶奶的相框里，爷爷能每天都看到他们，或许就能够唤醒一些他的记忆。</p>
        <img src="https://res.mojalab.cn/images/news/7/frame.png" alt="新闻图片14" class="object-cover rounded-lg w-full h-full my-8">
        <p>奶奶的儿子在广州工作，只要对着说一声\"给儿子打电话\"，就会自动呼出视频电话。</p>
        <img src="https://res.mojalab.cn/images/news/7/video_call.png" alt="新闻图片15" class="object-cover rounded-lg w-full h-full my-8">
        <p>这样的设计不仅让不能守候在老人身边的儿女通过科技实时关注父母的健康状况。还能为社区和养老机构提供更高效的集中看护方案。</p>
        <img src="https://res.mojalab.cn/images/news/7/solution.png" alt="新闻图片16" class="object-cover rounded-lg w-full h-full my-8">
        <p>在未来，代立晨（木酱）希望用科技让老人真正老有所依。</p>
        <p><strong>来源：阿里巴巴公益</strong></p>
      </div>
    `
  },
  {
    id: 8,
    title: {
      en: "Alibaba Cloud IoT Engineer Intelligently Transforms Visually Impaired Homes, Making Houses 'Able to Hear and See'",
      zh: "阿里云IoT工程师智能改造视障家庭，让房子变得\"能听会看\""
    },
    content: {
      en: "Using Alibaba Cloud's existing IoT smart living technology, Dai Lichen set up control commands for lighting, appliances, curtains, etc. in the old house, all of which can be controlled uniformly through voice. That's not all - if you live in this house long enough, the house will learn your living habits.",
      zh: "通过阿里云已有的IoT智能人居技术，代立晨对老房子内的照明、家电、窗帘等设置了控制指令，全部都可以通过语音统一控制。这还没完，只要你在这房子里住久了，房子还会学习你的生活习惯。"
    },
    date: "2018-07-30",
    author: "阿里云",
    sourceUrl: "https://mp.weixin.qq.com/s?__biz=MzU2MzAxODI0Nw==&mid=2247567386&idx=1&sn=3ae23b2581765efcf8e3fc3f87933310",
    thumbnail: "https://res.mojalab.cn/images/news/8/sensors.png",
    fullContent: `
      <div class="article-content">
        <p>房子如何既会听，又会看？</p>
        <p>最近央视《秘密大改造》播放了一期特殊节目：为一位视障人士进行家居改造。阿里云IoT工程师代立晨接受了这项极具挑战的项目。</p>
        <img src="https://res.mojalab.cn/images/news/8/cover.gif" alt="新闻图片1" class="object-cover rounded-lg w-full h-full my-8">
        <p>通过阿里云已有的IoT智能人居技术，代立晨对老房子内的照明、家电、窗帘等设置了控制指令，全部都可以通过语音统一控制。</p>
        <p>这还没完，只要你在这房子里住久了，房子还会学习你的生活习惯。到时候，都不需要自己张嘴，房子就都明白你心里所想的了。</p>
        <p>灯带起到了为视障人士指路的作用。</p>
        <img src="https://res.mojalab.cn/images/news/8/light_guide.gif" alt="新闻图片2" class="object-cover rounded-lg w-full h-full my-8">
        <p>移步到客厅，不得不说说这个小编最喜欢的窗帘。只要当室外温度达到事先设置好的临界温度，窗帘就会自动合起，太阳下山前窗帘又会自动拉开。</p>
        <img src="https://res.mojalab.cn/images/news/8/curtain.gif" alt="新闻图片3" class="object-cover rounded-lg w-full h-full my-8">
        <p>洗手间的灯光也会根据主人的进出自动打开、熄灭。</p>
        <img src="https://res.mojalab.cn/images/news/8/bathroom_light.gif" alt="新闻图片4" class="object-cover rounded-lg w-full h-full my-8">
        <p>当主人走出洗手间，灯光会自动熄灭，马桶也会自动感应冲水。</p>
        <img src="https://res.mojalab.cn/images/news/8/toilet.gif" alt="新闻图片5" class="object-cover rounded-lg w-full h-full my-8">
        <p>不过你一定要问，这么多声控设备，万一自己的声音或者声控设备出了问题怎么办？</p>
        <p>这个问题，设计者早已经想好。房间内所有的电器都可以用包括物理按键、声音控制、手机APP控制三种方式去控制。</p>
        <img src="https://res.mojalab.cn/images/news/8/control.gif" alt="新闻图片6" class="object-cover rounded-lg w-full h-full my-8">
        <p>在60余平米的房子中，代立晨主要还是通过大量的传感设备、网络设置、传输指令实现对设备的统一控制。</p>
        <img src="https://res.mojalab.cn/images/news/8/sensors.png" alt="新闻图片7" class="object-cover rounded-lg w-full h-full my-8">
        <p>桌上摆着的一堆零件，有的是人体感应器，有的是红外信号发射器，有的是识别声音指令的，就是为了让家里的电器能够随时响应主人的需求。</p>
        <img src="https://res.mojalab.cn/images/news/8/parts.png" alt="新闻图片8" class="object-cover rounded-lg w-full h-full my-8">
        <p>还有更新奇的，如果使用的次数增多了，智能人居还会越来越"懂"你。比如，家里的空调目前是语音操纵的，随着时间推移，当手机的 GPS 位置接近家的时候，空调就自动开启了。</p>
        <p>一份统计数据显示，中国视障人士大概有1800万，这背后就代表着上千万的家庭。但在家居环境中一直没有一个面向"视障人士"的技术方案。</p>
        <blockquote>
          <p>代立晨表示：</p>
          <p>比起接受精心的照顾，视障人士更愿意接受能让他们回归正常世界的工具。</p>
          <p>在互联网世界里，他们能够无障碍的使用淘宝、支付宝、用4倍速度听语音。我希望用物联网的技术同样也能是他们在物理的世界里变得"无障碍"。</p>
        </blockquote>
        <p>其实代立晨早已是一名"网红"工程师。去年，他对自己的家进行了全面的智能化改造，甚至还为家中的猫研发了"自动投喂机"，引发了同事的集体朝拜。</p>
        <p>代立晨还希望和同事一起尽快推出一套面向特殊人群的智能人居方案，能够标准化的快速部署让更多人受益。</p>
        <p><strong>来源：阿里云</strong></p>
      </div>
    `
  },
];

export async function getNews() {
  // 按日期倒序排列新闻
  return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 