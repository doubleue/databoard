import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useMenuOpen() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [cookies, setCookie] = useCookies(["is_menu_open"]);

  const handleStatusChange = (isOpen: boolean) => {
    setCookie("is_menu_open", isOpen, { path: "/" });
  };

  useEffect(() => {
    setIsMenuOpen(cookies.is_menu_open == "true");
  }, [cookies.is_menu_open]);

  return {
    isMenuOpen,
    setIsMenuOpen: handleStatusChange,
  };
}
