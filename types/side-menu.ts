import { IDataBoard } from "./databoard";

export interface ISideMenuItem {
  id: string;
  title: string;
  databoard?: IDataBoard;
}

export interface ISideMenu {
  sideMenu: ISideMenuItem[];
}
