import { defaultContextValue } from "../contexts/dataContext";
import { lazy, Suspense } from "react";

const shouldUseStaticData = new URLSearchParams(window.location.search).has(
  "static"
);

const TreeViewContext = () => {
  const TargetComponent = shouldUseStaticData
    ? lazy(() => import("./TreeViewContentStatic"))
    : lazy(() => import("./TreeViewContentDynamic"));
  return (
    <Suspense fallback={"Loading..."}>
      <TargetComponent defaultContextValue={defaultContextValue} />
    </Suspense>
  );
};

export default TreeViewContext;
