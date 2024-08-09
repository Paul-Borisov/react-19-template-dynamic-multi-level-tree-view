import randomTreeView from "../../public/api/v1.0/data/randomTreeView";
import TreeViewProvider from "./TreeViewProvider";

const TreeViewContentDynamic = ({ defaultContextValue }) => {
  const contextValue = structuredClone(defaultContextValue);
  contextValue.data = randomTreeView;
  //console.log(randomTreeView);

  return <TreeViewProvider value={contextValue} />;
};

export default TreeViewContentDynamic;
