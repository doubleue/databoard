import { ISideBarItem } from "../../../types/side-bar";
import { Wrapper, Text } from "./style";

interface SideBarItemProps extends ISideBarItem {}

export default function SideBar({ id, title }: SideBarItemProps) {
  return (
    <Wrapper>
      <Text>{title}</Text>
    </Wrapper>
  );
}
