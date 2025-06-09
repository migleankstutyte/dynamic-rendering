import { Suspense } from "react";
import { COMPONENT_MAP } from "../registry/componentRegistry";
import { RendererProps } from "./renderer.types";

export const Renderer = ({ schema }: RendererProps) => {
  if (!schema?.components || !Array.isArray(schema.components)) {
    return <div>Invalid schema: "components" must be an array.</div>;
  }

  return (
    <Suspense fallback={<div>Loading UI...</div>}>
      {schema.components.map((component, index) => {
        const Component = COMPONENT_MAP[component.type];

        if (!Component) {
          return (
            <div key={index}>
              Unknown component type: <strong>{component.type}</strong>
            </div>
          );
        }

        return <Component key={index} {...component} />;
      })}
    </Suspense>
  );
};
