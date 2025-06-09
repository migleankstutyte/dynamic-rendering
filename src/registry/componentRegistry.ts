import React from "react";

const PageTitle = React.lazy(
  () => import("../components/base/page-title/PageTitle")
);
const CheckboxListPanel = React.lazy(
  () => import("../components/composed/CheckboxListPanel/CheckboxListPanel")
);

export const COMPONENT_MAP: Record<
  string,
  React.LazyExoticComponent<React.FC<any>>
> = {
  "page-title": PageTitle,
  "checkbox-list-panel": CheckboxListPanel,
};
