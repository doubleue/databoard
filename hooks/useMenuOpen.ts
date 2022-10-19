import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function useMenuOpen() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [cookies, setCookie] = useCookies();

  const handleStatusChange = (isOpen: boolean) => {
    setCookie("is_menu_open", isOpen);
  };

  useEffect(() => {
    setIsMenuOpen(cookies.is_menu_open == "true");
  }, [cookies.is_menu_open]);

  return {
    isMenuOpen,
    setIsMenuOpen: handleStatusChange,
  };
}
