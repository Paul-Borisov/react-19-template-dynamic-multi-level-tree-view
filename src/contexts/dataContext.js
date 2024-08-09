import { createContext } from "react";

export const defaultContextValue = {
  data: [],
  expandByDefault: true,
};

const DataContext = createContext(null);
export default DataContext;
