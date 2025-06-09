export type ComponentSchema = {
  type?: string;
  [key: string]: any;
};

export type RendererProps = {
  schema: {
    title: string;
    components: ComponentSchema[];
  };
};
