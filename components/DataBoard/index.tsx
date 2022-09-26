import dynamic from "next/dynamic";
import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Wrapper } from "./style";

const Object = dynamic(() => import("./Object"), { ssr: false });

const Items = [
  { id: "1", text: "test1" },
  { id: "2", text: "test2" },
  { id: "3", text: "test3" },
  { id: "4", text: "test4" },
];

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function DataBoard() {
  const [items, setItems] = useState(Items);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const tItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(tItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="col">
        {(provided, snapshot) => (
          <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Object key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}
