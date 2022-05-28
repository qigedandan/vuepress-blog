import { defineUserConfig } from "vuepress";
import theme from "./theme";

const userBase = 'vupress-blog';

export default defineUserConfig({
  lang: "zh-CN",
  title: "旦旦的博客", // TODO: 主题演示
  description: "vuepress-theme-hope 的演示",

  base: `/${userBase}/`,

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  theme,
});
