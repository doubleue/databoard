import { IDataBoard } from "./databoard";

export interface ISideBarItem {
  id: string;
  title: string;
  databoard: IDataBoard;
}

export interface IMenu {
  menus: ISideBarItem[];
}
