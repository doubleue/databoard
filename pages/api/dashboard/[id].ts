import { NextApiRequest, NextApiResponse } from "next";
import { ISideMenuItem } from "../../../types/side-menu";
import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISideMenuItem>
) {
  const { id } = req.query;

  const jsonDirectory = path.join(process.cwd(), "data");

  const fileContents = await fs.readFile(
    jsonDirectory + "/side-menu.json",
    "utf8"
  );

  const { sideMenu } = JSON.parse(fileContents);
  const sideMenuItem = sideMenu.find((item: ISideMenuItem) => item.id == id);
  res.status(200).json(sideMenuItem);
}
