import { runInference, ModelPluginRegistry, load } from "@puzzlet/promptdx";
import AllModelPlugins from '@puzzlet/promptdx/models/all-latest';
// import Prompt from '../prompts/4.prompt.mdx';
import 'dotenv/config';

ModelPluginRegistry.registerAll(AllModelPlugins);

const run = async () => {
  const props = { name: "Emily" };
  const Prompt = await load('./prompts/4.prompt.mdx');
  const result = await runInference(Prompt, props);
  console.log(result);
}
run();