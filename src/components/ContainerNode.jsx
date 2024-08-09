import CollapsibleNode from "./CollapsibleNode";
import DataContext from "../contexts/dataContext";
import { memo, use } from "react";
import styles from "./ContainerNode.module.css";

const ContainerNode = ({ parentId }) => {
  const { data } = use(DataContext);
  const levelData = data?.filter((o) => o.parentId === parentId);

  return levelData?.length ? (
    <ul className={styles.ul}>
      {levelData.map((obj) => {
        //console.log(obj.id);
        return (
          <CollapsibleNode key={obj.id} id={obj.id} name={obj.name}>
            <ContainerNode parentId={obj.id} />
          </CollapsibleNode>
        );
      })}
    </ul>
  ) : null;
};

export default memo(ContainerNode);
