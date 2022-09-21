import Link from "next/link";
import { ISideBarItem } from "../../../types/side-bar";
import { Wrapper, Text } from "./style";

interface SideBarItemProps extends ISideBarItem {}

export default function SideBar({ id, title }: SideBarItemProps) {
  return (
    <Link href={`/dashboard/${id}`}>
      <Wrapper>
        <Text>{title}</Text>
      </Wrapper>
    </Link>
  );
}
