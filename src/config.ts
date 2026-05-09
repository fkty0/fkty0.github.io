// src/config.ts - 只需改这 6 处
export const SITE = {
  website: "https://fkty0.github.io/",           // 🔥 你的博客地址（末尾加 /）
  author: "fkty0",                               // 🔥 作者名（显示在文章底部）
  profile: "https://github.com/fkty0",           // 🔥 点击作者名跳转的链接
  desc: "论文阅读 × AI系统 × 知识沉淀",            // 🔥 SEO 描述
  title: "fkty0的技术笔记",                      // 🔥 浏览器标签页标题
  lang: "zh-CN",                                 // 🔥 关键！改成中文
  // 其他字段保持默认即可，不影响上线
  timezone: "Asia/Shanghai",
  scheduledPostMargin: 15 * 60 * 1000,
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "在 GitHub 编辑",
    url: "https://github.com/fkty0/fkty0.github.io/edit/main/", // 🔥 改成你的仓库
  },
  dynamicOgImage: true,
  dir: "ltr",
} as const;
