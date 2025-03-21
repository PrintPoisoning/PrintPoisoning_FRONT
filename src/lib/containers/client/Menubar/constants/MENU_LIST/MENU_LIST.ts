import {
  MenuBookIcon,
  MenuCloverIcon,
  MenuTalkIcon,
  MenuUserIcon,
} from "@lib/components/server";

const MENU_LIST = [
  { title: "나의 책풀", href: "/myBook", MenuIcon: MenuCloverIcon },
  { title: "기록", href: "/record", MenuIcon: MenuBookIcon },
  { title: "커뮤니티", href: "/community", MenuIcon: MenuTalkIcon },
  { title: "프로필", href: "/profile", MenuIcon: MenuUserIcon },
] as const;

export default MENU_LIST;
