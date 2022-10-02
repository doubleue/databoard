import useSWR from "swr";

import { IMenu, ISideBarItem } from "../../types/side-bar";
import SideBarItem from "./SideBarItem";
import { AddButton, ButtonWrapper, Wrapper } from "./style";
import Add from "../../icons/Add.svg";

export interface SideBarProps {
  menus?: ISideBarItem[];
}

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function SideBar({ menus }: SideBarProps) {
  const { data, error } = useSWR<IMenu>("/api/sidebar", fetcher);
  menus = data?.menus;
  return (
    <Wrapper>
      <ButtonWrapper>
        <AddButton
          onClick={() => {
            console.log("Click Event");
          }}
        >
          <Add />
        </AddButton>
      </ButtonWrapper>
      {menus
        ? menus.map((item) => (
            <SideBarItem key={item.id} title={item.title} id={item.id} />
          ))
        : null}
    </Wrapper>
  );
}
