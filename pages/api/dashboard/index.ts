import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { IMenu } from "../../../types/side-bar";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMenu>
) {
  const jsonDirectory = path.join(process.cwd(), "data");

  const fileContents = await fs.readFile(
    jsonDirectory + "/sidebar.json",
    "utf8"
  );

  res.status(200).json(JSON.parse(fileContents));
}
