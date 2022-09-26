import { Draggable } from "react-beautiful-dnd";
import { IDataBoardElement } from "../../../types/databoard";
import { Wrapper } from "./style";

interface ElementProps {
  index: number;
  item: IDataBoardElement;
}

export default function Element({ item, index }: ElementProps) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
        >
          {item.text}
        </Wrapper>
      )}
    </Draggable>
  );
}
