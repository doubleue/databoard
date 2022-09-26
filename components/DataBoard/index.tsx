import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { IDataBoard } from "../../types/databoard";
import { Wrapper } from "./style";

const Object = dynamic(() => import("./Object"), { ssr: false });

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

interface DataBoardProps extends IDataBoard {}

export default function DataBoard({ elements }: DataBoardProps) {
  const [items, setItems] = useState(elements);

  useEffect(() => {
    setItems(elements);
  }, [elements]);

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
