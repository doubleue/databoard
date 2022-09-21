import { NextApiRequest, NextApiResponse } from "next";
import { ISideBarItem } from "../../../types/side-bar";
import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISideBarItem>
) {
  const { id } = req.query;

  const jsonDirectory = path.join(process.cwd(), "data");

  const fileContents = await fs.readFile(
    jsonDirectory + "/sidebar.json",
    "utf8"
  );

  const { menus } = JSON.parse(fileContents);
  const sideBarItem = menus.find((item: ISideBarItem) => item.id == id);
  res.status(200).json(sideBarItem);
}
