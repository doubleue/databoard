import Link from "next/link";
import { Draggable } from "react-beautiful-dnd";
import { ISideMenuItem } from "../../../types/side-menu";
import { Wrapper, Text } from "./style";

interface SideMenuItemProps extends ISideMenuItem {
  index: number;
}

export default function SideMenuItem({ id, title, index }: SideMenuItemProps) {
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
