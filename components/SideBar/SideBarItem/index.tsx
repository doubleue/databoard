import Link from "next/link";
import { Draggable } from "react-beautiful-dnd";
import { ISideBarItem } from "../../../types/side-bar";
import { Wrapper, Text } from "./style";

interface SideBarItemProps extends ISideBarItem {
  index: number;
}

export default function SideBar({ id, title, index }: SideBarItemProps) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Link href={`/dashboard/${id}`}>
          <Wrapper
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
          >
            <Text>{title}</Text>
          </Wrapper>
        </Link>
      )}
    </Draggable>
  );
}
