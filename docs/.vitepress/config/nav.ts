import { DefaultTheme } from "vitepress";

const navConfig: DefaultTheme.NavItem[] = [

  {
    text: "☕ 动态海报",
    items: [
      { text: "美式咖啡", link: "/images/anime1.gif" },
      { text: "拿铁咖啡", link: "/images/anime2.gif" },
      { text: "意式浓缩", link: "/images/anime3.gif" }
    ]
  }
];

export default navConfig;
