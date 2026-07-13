import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpaceX IPO S-1 中英对照版",
  description: "Space Exploration Technologies Corp. S-1 注册说明书中英对照",
};

const normalizeChineseSecLinesScript = `
(() => {
  const firstPageTranslations = [
    ["于 2026 年 5 月 20 日向美国证券交易委员会提交", true],
    ["注册号 333-", true],
    ["________", false],
    ["美国", true],
    ["证券交易委员会", true],
    ["华盛顿特区 20549", true],
    ["表格 S-1", true],
    ["注册声明", true],
    ["根据 1933 年证券法", true],
    ["太空探索技术公司", true],
    ["（章程中指定的注册人的确切姓名）", true],
    ["德克萨斯州", true],
    ["7370", true],
    ["01-0627671", true],
    ["（公司或组织所在州或其他", true],
    ["司法管辖区）", true],
    ["（主要标准行业分类代码", true],
    ["编号）", true],
    ["（国税局雇主识别号）", true],
    ["火箭路 1 号", true],
    ["斯塔基地，德克萨斯州 78521", true],
    ["（注册人主要执行办公室的地址，包括邮政编码和电话号码，包括区号）", true],
    ["埃隆·马斯克", true],
    ["首席执行官", true],
    ["火箭路 1 号", true],
    ["斯塔基地，德克萨斯州 78521", true],
    ["电话：(310) 363-6000", true],
    ["（送达代理人的姓名、地址（包括邮政编码）和电话号码（包括区号）", true],
    ["）", true],
    ["并附副本至：", true],
    ["乔治·J·桑帕斯", true],
    ["希拉里·H·霍姆斯", true],
    ["哈里森·塔克", true],
    ["阿特玛·J·卡巴德", true],
    ["吉布森·邓恩·克拉彻律师事务所", true],
    ["大街 811 号，3000 室", true],
    ["德克萨斯州休斯顿 77002", true],
    ["电话：(346) 718-6600", true],
    ["布雷特·约翰森", true],
    ["迈克尔·史密斯", true],
    ["太空探索技术公司", true],
    ["火箭路 1 号", true],
    ["加利福尼亚州霍桑 90250", true],
    ["电话：(310) 363-6000", true],
    ["拜伦·B·鲁尼", true],
    ["艾伦·F·德南伯格", true],
    ["斯蒂芬·A·拜夫", true],
    ["乔泽·弗拉尼卡", true],
    ["戴维斯·波尔克和沃德韦尔律师事务所", true],
    ["列克星敦大道 450 号", true],
    ["纽约州纽约 10017", true],
    ["电话：(212) 450-4000", true],
    ["拟议向公众出售的大致开始日期：", true],
    ["本注册声明生效后，在切实可行的情况下尽快进行。", true],
    ["如果根据 1933 年证券法第 415 条，本表格所登记的任何证券将延迟或连续发行，请勾选以下", false],
    ["方框。☐", false],
    ["如果提交本表格是为了根据《证券法》第 462(b) 条登记同一发行的其他证券，请勾选以下方框并列出《证券法》", false],
    ["同一发行较早有效注册声明的注册声明编号。☐", false],
    ["如果本表格是根据《证券法》第 462(c) 条提交的生效后修订，请勾选以下方框并列出《证券法》", false],
    ["同一发行较早有效注册声明的注册声明编号。☐", false],
    ["如果本表格是根据《证券法》第 462(d) 条提交的生效后修订，请勾选以下方框并列出《证券法》", false],
    ["同一发行较早有效注册声明的注册声明编号。☐", false],
    ["请用复选标记表明注册人是大型加速申报人、加速申报人、非加速申报人、小型报告公司还是新兴成长型公司。", false],
    ["参见《交易法》规则 12b-2 中“大型加速申报人”、“加速申报人”、“小型报告公司”和“新兴成长型公司”的定义：", false],
    ["大型加速申报人", false],
    ["☐", false],
    ["加速申报人", false],
    ["☐", false],
    ["非加速申报人", false],
    ["☒", false],
    ["较小报告公司", false],
    ["☐", false],
    ["新兴成长型公司", false],
    ["☐", false],
    ["如果是新兴成长型公司，请用复选标记表明注册人是否选择不使用延长的过渡期来遵守任何新的或修订的", false],
    ["根据《证券法》第 7(a)(2)(B) 条提供的财务会计准则。☐", false],
    ["注册人特此修订本注册声明，修订日期为必要的一个或多个日期，以将其生效日期延迟至注册人提交进一步", false],
    ["修正案，明确说明本注册声明此后将根据经修订的 1933 年证券法第 8(a) 条生效，或直至", false],
    ["本注册声明在证券交易委员会根据第 8(a) 条行事所确定的日期生效，", false],
    ["由其确定。", false],
  ];

  const readPt = (styleText, prop) => {
    const match = styleText.match(new RegExp(prop + "\\\\s*:\\\\s*(-?\\\\d+(?:\\\\.\\\\d+)?)pt", "i"));
    return match ? Number(match[1]) : null;
  };

  const getReportPages = (columnSelector) => {
    const root = document.querySelector(columnSelector + " > div");
    if (!root) {
      return [];
    }

    return Array.from(root.children).filter((child) => {
      const style = child.getAttribute("style") || "";
      return /height\\s*:\\s*792pt/i.test(style) && /width\\s*:\\s*612pt/i.test(style);
    });
  };

  const repairFirstPage = () => {
    const zhPage = getReportPages(".sec-chinese-column")[0];
    const enPage = getReportPages(".sec-english-column")[0];
    if (!zhPage || !enPage || zhPage.dataset.secFirstPageRepaired === "true") {
      return;
    }

    zhPage.innerHTML = enPage.innerHTML;
    zhPage.dataset.secFirstPageRepaired = "true";

    const pageRect = zhPage.getBoundingClientRect();
    const fonts = Array.from(zhPage.querySelectorAll("font"));
    const centers = fonts.map((font) => {
      const rect = font.getBoundingClientRect();
      return rect.left - pageRect.left + rect.width / 2;
    });

    for (let index = 0; index < firstPageTranslations.length; index += 1) {
      const font = fonts[index];
      if (!font) {
        continue;
      }

      const [text, shouldCenter] = firstPageTranslations[index];
      font.textContent = text;

      if (shouldCenter) {
        const rect = font.getBoundingClientRect();
        const parentRect = (font.offsetParent || zhPage).getBoundingClientRect();
        const parentLeft = parentRect.left - pageRect.left;
        font.style.left = ((centers[index] - rect.width / 2 - parentLeft) * 0.75) + "pt";
      }
    }
  };

  const fitVisibleLines = () => {
    const lines = document.querySelectorAll(".sec-chinese-column [data-sec-line-normalized='true']");
    for (const line of lines) {
      const rect = line.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200 || rect.width <= 0) {
        continue;
      }

      line.style.transform = "";
      const unscaledRect = line.getBoundingClientRect();
      if (unscaledRect.width > 0 && line.scrollWidth > unscaledRect.width + 0.5) {
        line.style.transform = "scaleX(" + (unscaledRect.width / line.scrollWidth) + ")";
      }
    }
  };

  const scheduleFit = () => {
    if (window.__secChineseFitQueued) {
      return;
    }

    window.__secChineseFitQueued = true;
    window.requestAnimationFrame(() => {
      window.__secChineseFitQueued = false;
      fitVisibleLines();
    });
  };

  const normalizeLines = () => {
    const column = document.querySelector(".sec-chinese-column");
    if (!column || column.dataset.secLinesNormalized === "true") {
      return;
    }

    const firstPage = getReportPages(".sec-chinese-column")[0];
    const lineNodes = column.querySelectorAll("div[style*='position:absolute'][style*='top:'][style*='width:']");
    for (const line of lineNodes) {
      if ((firstPage && firstPage.contains(line)) || line.closest("table")) {
        continue;
      }

      const directFonts = Array.from(line.children).filter((child) => {
        if (child.tagName !== "FONT") {
          return false;
        }

        const style = child.getAttribute("style") || "";
        return /position\\s*:\\s*absolute/i.test(style) && (child.textContent || "").length > 0;
      });

      if (directFonts.length < 2) {
        continue;
      }

      const positionedFonts = directFonts.map((font) => ({
        font,
        left: readPt(font.getAttribute("style") || "", "left") ?? 0,
        top: readPt(font.getAttribute("style") || "", "top") ?? 0,
      })).sort((a, b) => (a.top - b.top) || (a.left - b.left));

      const minTop = Math.min(...positionedFonts.map((item) => item.top));
      const maxTop = Math.max(...positionedFonts.map((item) => item.top));
      if (maxTop - minTop > 1) {
        continue;
      }

      const lineStyle = line.getAttribute("style") || "";
      const lineWidthPt = readPt(lineStyle, "width") ?? 612;
      const originalLeftPt = readPt(lineStyle, "left") ?? 0;
      const firstLeftPt = Math.max(0, Math.min(...positionedFonts.map((item) => item.left)));
      const availableWidthPt = Math.max(1, lineWidthPt - firstLeftPt);

      line.style.left = (originalLeftPt + firstLeftPt) + "pt";
      line.style.width = availableWidthPt + "pt";
      line.style.whiteSpace = "pre";
      line.style.transformOrigin = "left top";
      line.style.overflow = "visible";
      line.dataset.secLineNormalized = "true";

      for (const { font } of positionedFonts) {
        font.style.position = "static";
        font.style.left = "";
        font.style.top = "";
        font.style.display = "inline";
        font.style.whiteSpace = "pre";
      }
    }

    column.dataset.secLinesNormalized = "true";
    scheduleFit();
  };

  const start = () => {
    repairFirstPage();
    normalizeLines();
    window.addEventListener("scroll", scheduleFit, { passive: true });
    window.addEventListener("resize", scheduleFit);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
`;

export default function SpaceXIpoReportPage() {
  const englishReportHtml = readFileSync(
    join(process.cwd(), "src/content/reports/spacex-ipo-en.html"),
    "utf8",
  );
  const chineseReportHtml = readFileSync(
    join(process.cwd(), "src/content/reports/spacex-ipo-zh.html"),
    "utf8",
  );

  return (
    <div className="sec-filing-route">
      <style>{`
        body:has(.sec-filing-route) header,
        body:has(.sec-filing-route) footer,
        body:has(.sec-filing-route) .fixed.inset-0 {
          display: none !important;
        }

        body:has(.sec-filing-route) main {
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        body:has(.sec-filing-route) .min-h-screen {
          background: #e4e4e4 !important;
        }

        body:has(.sec-filing-route) {
          background: #e4e4e4 !important;
        }

        .sec-filing-route {
          --sec-page-width: 612pt;
          background: #e4e4e4;
          margin: 0;
          min-height: 100vh;
          padding: 0;
        }

        .sec-language-toggle {
          display: none;
        }

        .sec-mobile-tabs {
          display: none;
        }

        .sec-bilingual-layout {
          display: flex;
          align-items: flex-start;
          gap: 0;
          margin: 0 auto;
          width: calc(var(--sec-page-width) * 2);
        }

        .sec-bilingual-column {
          flex: 0 0 var(--sec-page-width);
          width: var(--sec-page-width);
          overflow: hidden;
        }

        .sec-bilingual-column > div {
          width: var(--sec-page-width);
        }

        .sec-filing-route img {
          max-width: none !important;
        }

        .sec-english-column [style*="height:792pt"][style*="width:612pt"][style*="margin:10px auto"] {
          margin: 10px 0 10px auto !important;
        }

        .sec-chinese-column [style*="height:792pt"][style*="width:612pt"][style*="margin:10px auto"] {
          margin: 10px auto 10px 0 !important;
        }

        @media (max-width: 767px) {
          .sec-mobile-tabs {
            align-items: center;
            background: #f7f7f7;
            border-bottom: 1px solid #bdbdbd;
            display: flex;
            gap: 8px;
            left: 0;
            padding: 8px;
            position: sticky;
            top: 0;
            width: 100vw;
            z-index: 20;
          }

          .sec-mobile-tab {
            background: #ffffff;
            border: 1px solid #a9a9a9;
            border-radius: 4px;
            color: #111111;
            cursor: pointer;
            display: inline-flex;
            font-family: Arial, sans-serif;
            font-size: 14px;
            justify-content: center;
            line-height: 1;
            min-width: 72px;
            padding: 9px 12px;
          }

          #sec-lang-zh:checked ~ .sec-mobile-tabs label[for="sec-lang-zh"],
          #sec-lang-en:checked ~ .sec-mobile-tabs label[for="sec-lang-en"] {
            background: #111111;
            border-color: #111111;
            color: #ffffff;
          }

          .sec-bilingual-layout {
            display: block;
            width: var(--sec-page-width);
          }

          .sec-bilingual-column {
            width: var(--sec-page-width);
          }

          .sec-english-column [style*="height:792pt"][style*="width:612pt"][style*="margin:10px auto"],
          .sec-chinese-column [style*="height:792pt"][style*="width:612pt"][style*="margin:10px auto"] {
            margin: 10px auto !important;
          }

          #sec-lang-zh:checked ~ .sec-bilingual-layout .sec-english-column {
            display: none;
          }

          #sec-lang-en:checked ~ .sec-bilingual-layout .sec-chinese-column {
            display: none;
          }
        }
      `}</style>
      <input
        aria-label="显示中文"
        className="sec-language-toggle"
        defaultChecked
        id="sec-lang-zh"
        name="sec-language"
        type="radio"
      />
      <input
        aria-label="Show English"
        className="sec-language-toggle"
        id="sec-lang-en"
        name="sec-language"
        type="radio"
      />
      <div className="sec-mobile-tabs" aria-label="语言切换">
        <label className="sec-mobile-tab" htmlFor="sec-lang-zh">
          中文
        </label>
        <label className="sec-mobile-tab" htmlFor="sec-lang-en">
          English
        </label>
      </div>
      <div className="sec-bilingual-layout">
        <div
          className="sec-bilingual-column sec-chinese-column"
          dangerouslySetInnerHTML={{ __html: chineseReportHtml }}
        />
        <div
          className="sec-bilingual-column sec-english-column"
          dangerouslySetInnerHTML={{ __html: englishReportHtml }}
        />
      </div>
      <script
        dangerouslySetInnerHTML={{ __html: normalizeChineseSecLinesScript }}
      />
    </div>
  );
}
