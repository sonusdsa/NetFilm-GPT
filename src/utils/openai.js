import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constants";

const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default client;
