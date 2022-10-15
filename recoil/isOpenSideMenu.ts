import { atom } from "recoil";
import { v1 } from "uuid";

export const isOpenSideMenuState = atom<boolean>({
  key: `isOpenSideMenuState/${v1()}`,
  default: true,
});
