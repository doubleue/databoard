import {
  useState,
  KeyboardEvent,
  ChangeEvent,
  FocusEvent,
  useRef,
  useEffect,
} from "react";
import useAutoFocus from "../../../hooks/useAutoFocus";
import { TitleInput } from "./style";

interface SideMenuInputProps {
  modifyText?: string;
  onEndEdit?: (value: string | undefined) => void;
}

export default function SideMenuInput({
  modifyText,
  onEndEdit,
}: SideMenuInputProps) {
  const [menuTitle, setMenuTitle] = useState(modifyText ?? "");
  const { inputRef } = useAutoFocus();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMenuTitle(value);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      if (onEndEdit) {
        onEndEdit(menuTitle);
        setMenuTitle("");
      }
    }
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (onEndEdit) {
      onEndEdit(menuTitle);
      setMenuTitle("");
    }
  };

  return (
    <TitleInput
      ref={inputRef}
      type="text"
      placeholder="메뉴 타이틀 입력"
      value={menuTitle}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onBlur={onBlur}
    />
  );
}
