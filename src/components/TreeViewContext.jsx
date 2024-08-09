import { defaultContextValue } from "../contexts/dataContext";
import { lazy, Suspense } from "react";

const shouldUseStaticData = new URLSearchParams(window.location.search).has(
  "static"
);
const isExperimental = /true|1|yes/i.test(import.meta.env.VITE_EXPERIMENTAL);

const TreeViewContext = () => {
  const TargetComponent = shouldUseStaticData
    ? lazy(() =>
        isExperimental
          ? import("./TreeViewContentStatic.use")
          : import("./TreeViewContentStatic.hooks")
      )
    : lazy(() => import("./TreeViewContentDynamic"));
  return (
    <Suspense fallback={"Loading..."}>
      <TargetComponent defaultContextValue={defaultContextValue} />
    </Suspense>
  );
};

export default TreeViewContext;
