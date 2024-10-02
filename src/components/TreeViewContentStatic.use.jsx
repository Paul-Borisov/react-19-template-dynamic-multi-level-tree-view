import TreeViewProvider from "./TreeViewProvider";
import { use, useMemo } from "react";

const staticEndpointUri = "/api/v1.0/data/staticTreeView.json";

const TreeViewContentStatic = ({ defaultContextValue }) => {
  const data = useMemo(
    () =>
      fetch(staticEndpointUri)
        .then((response) => response.json())
        .then((data) => {
          const contextValue = { ...defaultContextValue, data };
          contextValue.data = data;
          return contextValue;
        })
        .catch((e) => {
          console.error(e);
          return { ...defaultContextValue };
        }),
    [defaultContextValue]
  );
  const contextValue = use(data);

  return <TreeViewProvider value={contextValue} />;
};

export default TreeViewContentStatic;
