import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { ISideMenu, ISideMenuItem } from "../../types/side-menu";

import useMenuOpen from "../../hooks/useMenuOpen";

import { ButtonWrapper, MenuOpenButtonWrapper, Wrapper } from "./style";
import Add from "../../icons/Add.svg";
import DoubleArrow from "../../icons/DoubleArrow.svg";

import Button from "../Button";

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
  const { isMenuOpen, setIsMenuOpen } = useMenuOpen();

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
        <MenuOpenButtonWrapper isOpen={isMenuOpen}>
          <Button
            variant="text"
            icon={<DoubleArrow />}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </MenuOpenButtonWrapper>
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
