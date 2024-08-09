import ContainerNode from "./ContainerNode";
import DataContext from "../contexts/dataContext";

const TreeViewProvider = ({ value }) => {
  return (
    <DataContext value={value}>
      <ContainerNode parentId={null} />
    </DataContext>
  );
};

export default TreeViewProvider;
