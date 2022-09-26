import { Draggable } from "react-beautiful-dnd";
import { Wrapper } from "./style";

export default function Object({ item, index }: any) {
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
