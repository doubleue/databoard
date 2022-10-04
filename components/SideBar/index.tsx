import useSWR from "swr";

import { IMenu, ISideBarItem } from "../../types/side-bar";
import { AddButton, ButtonWrapper, Wrapper } from "./style";
import Add from "../../icons/Add.svg";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SideBarItem = dynamic(() => import("./SideBarItem"), { ssr: false });

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function SideBar() {
  const { data, error } = useSWR<IMenu>("/api/sidebar", fetcher);
  const [menus, setMenus] = useState<ISideBarItem[] | undefined>([]);

  useEffect(() => {
    setMenus(data?.menus);
  }, [data]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination || menus === undefined) {
      return;
    }

    setMenus(reorder(menus, result.source.index, result.destination.index));
  };

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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="SideMenu">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {menus
                ? menus.map((item, index) => (
                    <SideBarItem
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
