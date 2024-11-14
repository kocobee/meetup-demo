import { runInference, registerDefaultPlugins } from "@puzzlet/promptdx";
// import { load } from './load';
// Using the webpack loader, but can optionally uncomment for node instead.
import Prompt from '../prompts/4.prompt.mdx';
import 'dotenv/config';

const run = async () => {
  const props = { name: "Emily" };
  // const Prompt = await load('./prompts/4.prompt.mdx');
  const result = await runInference(Prompt, props);
  console.log(result);
}
registerDefaultPlugins().then(run);