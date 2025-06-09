import { Renderer } from "./registry/Renderer";
import schema from "../src/schemas/page-schema.json";
import "./App.scss";

export default function App() {
  let content;

  try {
    content = <Renderer schema={schema} />;
  } catch (error: any) {
    content = <div>Error rendering UI: {error.message}</div>;
  }

  return <main>{content}</main>;
}
