import { useEffect } from "react";

import "./pageTitle.scss";

const PageTitle = ({ label }: { label: string }) => {
  useEffect(() => {
    document.title = label;
  }, [label]);

  return <h1>{label}</h1>;
};
export default PageTitle;
