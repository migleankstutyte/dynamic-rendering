import { Suspense } from "react";
import { COMPONENT_MAP } from "../registry/componentRegistry";
import { RendererProps } from "./renderer.types";
import { ErrorMessage } from "../components/base";

export const Renderer = ({ schema }: RendererProps) => {
  return (
    <Suspense fallback={<div>Loading UI...</div>}>
      {schema.components.map((component, index) => {
        if (!component.type || typeof component.type !== "string") {
          return (
            <ErrorMessage
              key={index}
              title={`Missing "type" for component at index ${index}`}
              description="Each component must have a valid 'type' string."
            />
          );
        }

        const Component = COMPONENT_MAP[component.type];

        if (!Component) {
          return (
            <ErrorMessage
              key={index}
              title={`Unknown component: "${component.type}"`}
              description="Please check the schema or register the component."
            />
          );
        }

        return <Component key={index} {...component} />;
      })}
    </Suspense>
  );
};
