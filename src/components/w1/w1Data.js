import { useState } from "react";

//Menu

// 1. 靜態資料
export const menuItem = [
  "全部",
  "品牌設計",
  "平面設計",
  "UIUX 設計",
  "網頁設計",
  "設計規範",
  "前端技術",
  "後端架構",
  "AI 趨勢應用",
];
// 2. React 邏輯 (Custom Hook)
export function useW1() {
  const [currentCategory, setCurrentCategory] = useState("全部");
  const handleCategoryChange = (category) => {
    console.log("切換分類到:", category);
    setCurrentCategory(category);
  };
  return {
    currentCategory,
    handleCategoryChange,
  };
}

//blog context
export const blogContext = [
  {
    blogUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_1.png?raw=true",
    blogTag: ["UIUX 設計", "網頁設計", "前端技術"],
    blogTitle:"網頁裡的微互動藝術：利用 CSS 與 JS 動畫為諮詢網站注入靈魂並提升用戶轉化率",
    blogCDT:"Oct 16, 2022",
    viewCount:110,
    shareCount:2
  },
  {
    blogUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_2.png?raw=true",
    blogTag: ["UIUX 設計", "設計規範", "前端技術"],
    blogTitle:"10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統",
    blogCDT:"Oct 16, 2022",
    viewCount:110,
    shareCount:2
  },
  {
    blogUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_3.png?raw=true",
    blogTag: ["品牌設計", "平面設計", "UIUX 設計"],
    blogTitle:"從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯",
    blogCDT:"Oct 16, 2022",
    viewCount:110,
    shareCount:2
  },
  {
    blogUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_4.png?raw=true",
    blogTag: ["UIUX 設計", "前端技術", "AI 趨勢應用"],
    blogTitle:"當 AI 遇上介面設計：資深設計師如何利用生成式工具重塑前端開發工作流與視覺想像力",
    blogCDT:"Oct 16, 2022",
    viewCount:110,
    shareCount:2
  },
  {
    blogUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_5.png?raw=true",
    blogTag: ["前端技術", "後端架構", "AI 趨勢應用"],
    blogTitle:"揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性",
    blogCDT:"Oct 16, 2022",
    viewCount:110,
    shareCount:2
  },
];
