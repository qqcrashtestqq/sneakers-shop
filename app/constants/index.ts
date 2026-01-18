export type { HeaderMenu } from "@/types/header";
export type { FooterMenu } from "@/types/footer";

export const HEDER_MENU: HeaderMenu[] = [
  {
    link: "/",
    icon: "IconBasket",
    text: "0",
  },
  {
    link: "/",
    icon: "IconFavourites",
    text: "Закладки",
  },
  {
    link: "/",
    icon: "IconProfile",
    text: "Профиль",
  },
];

export const FOOTER_MENU: FooterMenu[] = [
  {
    link: "/",
    text: "For users",
  },
  {
    link: "/",
    text: "About",
  },
  {
    link: "/",
    text: "Info for users",
  },
];
