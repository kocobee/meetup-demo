import { runInference, registerDefaultPlugins } from "@puzzlet/promptdx";
import 'dotenv/config';
import { load } from './load.js'

const run = async () => {
  const props = { name: "Emily" };
  const bundled = await load('./prompts/4.prompt.mdx');
  const result = await runInference(bundled, props);
  console.log(result);
}
registerDefaultPlugins().then(run);