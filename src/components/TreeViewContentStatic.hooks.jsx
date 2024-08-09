import TreeViewProvider from "./TreeViewProvider";
import { useEffect, useState } from "react";

const staticEndpointUri = "/api/v1.0/data/staticTreeView.json";

const TreeViewContentStatic = ({ defaultContextValue }) => {
  const [contextValue, setContextValue] = useState(defaultContextValue);

  useEffect(() => {
    fetch(staticEndpointUri)
      .then((response) => response.json())
      .then((data) => setContextValue((prev) => ({ ...prev, data })))
      .catch((e) => console.error(e));
  }, []);

  return <TreeViewProvider value={contextValue} />;
};

export default TreeViewContentStatic;
