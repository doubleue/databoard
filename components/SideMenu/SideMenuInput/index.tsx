import {
  useState,
  KeyboardEvent,
  ChangeEvent,
  FocusEvent,
  useRef,
  useEffect,
} from "react";
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
  const thisComponent = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (thisComponent.current) {
      thisComponent.current.focus();
    }
  }, []);

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
      ref={thisComponent}
      type="text"
      placeholder="메뉴 타이틀 입력"
      value={menuTitle}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onBlur={onBlur}
    />
  );
}
