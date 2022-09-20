import { ISideBarItem } from "../../types/side-bar";
import SideBarItem from "./SideBarItem";
import { Wrapper } from "./style";

export interface SideBarProps {}

export default function SideBar({}: SideBarProps) {
  const menus: ISideBarItem[] = [
    { id: "1", title: "메뉴 1" },
    { id: "2", title: "Menu 2" },
    { id: "3", title: "메뉴 3" },
    { id: "4", title: "Menu 4" },
  ];

  return menus ? (
    <Wrapper>
      {menus.map((item) => (
        <SideBarItem key={item.id} title={item.title} id={item.id} />
      ))}
    </Wrapper>
  ) : null;
}
