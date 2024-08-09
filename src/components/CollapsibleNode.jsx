import DataContext from "../contexts/dataContext";
import styles from "./CollapsibleNode.module.css";
import { use, useState } from "react";

const CollapsibleNode = ({ id, name, children }) => {
  const { data, expandByDefault } = use(DataContext);
  const [isCollapsed, setCollapsed] = useState(!expandByDefault);
  const hasChildren = data.some((o) => o.parentId === id);

  const handleExpanded = (e) => {
    e.stopPropagation();
    if (!hasChildren) return;
    setCollapsed((prev) => !prev);
  };

  //console.log(id, name);
  return (
    <li className={styles.li} onClick={handleExpanded}>
      <span className={styles.noselection}>
        {hasChildren ? (isCollapsed ? " + " : " - ") : ""}
        {hasChildren && isCollapsed ? <strong>{name}</strong> : name}
      </span>
      <span className={isCollapsed ? styles.collapsed : styles.expanded}>
        {children}
      </span>
    </li>
  );
};

export default CollapsibleNode;
