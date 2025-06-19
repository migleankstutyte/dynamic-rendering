import { Renderer } from "./registry/Renderer";
import schema from "../src/schemas/page-schema.json";
import { ErrorMessage } from "../src/components/base";

import "./App.scss";

export default function App() {
  let content;

  try {
    content = <Renderer schema={schema} />;
  } catch (error: any) {
    content = <ErrorMessage title="Render Error" description={error.message} />;
  }

  return <main>{content}</main>;
}
