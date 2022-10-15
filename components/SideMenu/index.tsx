import useSWR from "swr";

import { ISideMenu, ISideMenuItem } from "../../types/side-menu";
import {
  AddButton,
  ButtonWrapper,
  MenuOpenCloseButtonWrapper,
  Wrapper,
} from "./style";
import Add from "../../icons/Add.svg";
import DoubleArrow from "../../icons/DoubleArrow.svg";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useRecoilState } from "recoil";
import { isOpenSideMenuState } from "../../recoil/isOpenSideMenu";

const SideMenuItem = dynamic(() => import("./SideMenuItem"), { ssr: false });

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function SideMenu() {
  const { data, error } = useSWR<ISideMenu>("/api/side-menu", fetcher);
  const [sideMenu, setSideMenu] = useState<ISideMenuItem[] | undefined>([]);

  const [isOpen, setIsOpen] = useRecoilState(isOpenSideMenuState);

  useEffect(() => {
    setSideMenu(data?.sideMenu);
  }, [data]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination || sideMenu === undefined) {
      return;
    }

    setSideMenu(
      reorder(sideMenu, result.source.index, result.destination.index)
    );
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <MenuOpenCloseButtonWrapper isOpen={isOpen}>
          <Button
            variant="text"
            icon={<DoubleArrow />}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MenuOpenCloseButtonWrapper>
        <Button variant="text" icon={<Add />} />
      </ButtonWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="SideMenu">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sideMenu
                ? sideMenu.map((item, index) => (
                    <SideMenuItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      index={index}
                    />
                  ))
                : null}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
}
