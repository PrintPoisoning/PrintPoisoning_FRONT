import {
  MenuBookIcon,
  MenuCloverIcon,
  MenuTalkIcon,
  MenuUserIcon,
} from "@lib/components/server";

const MENU_LIST = [
  { title: "나의 책풀", href: "/", MenuIcon: MenuCloverIcon },
  { title: "기록", href: "/", MenuIcon: MenuBookIcon },
  { title: "커뮤니티", href: "/", MenuIcon: MenuTalkIcon },
  { title: "프로필", href: "/", MenuIcon: MenuUserIcon },
] as const;

export default MENU_LIST;
