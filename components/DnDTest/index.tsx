import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListWrapper = styled.div<{ isDraggingOver: boolean }>`
  background: ${({ isDraggingOver }) => (isDraggingOver ? "blue" : "gray")};
  width: 250px;
  padding: grid;
`;

export default function DnDTest() {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <ListWrapper
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          ></ListWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}
