import fs from 'fs';
import { parse } from "@puzzlet/promptdx";

const getMdxFile = (path) => {
  const input = fs.readFileSync(path, 'utf-8');
  return input;
}

export const load = async (file) => {
  const mdx = await getMdxFile(file);
  const bundled = await parse(mdx, `prompts`, getMdxFile);
  return bundled;
}