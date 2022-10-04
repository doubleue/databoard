import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { ISideMenu } from "../../../types/side-menu";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISideMenu>
) {
  const jsonDirectory = path.join(process.cwd(), "data");

  const fileContents = await fs.readFile(
    jsonDirectory + "/side-menu.json",
    "utf8"
  );

  res.status(200).json(JSON.parse(fileContents));
}
