import { useEffect } from "react";
import { PageTitleProps } from "./pageTitle.types";

import "./pageTitle.scss";

const PageTitle = ({ label }: PageTitleProps) => {
  useEffect(() => {
    document.title = label;
  }, [label]);

  return <h1>{label}</h1>;
};
export default PageTitle;
