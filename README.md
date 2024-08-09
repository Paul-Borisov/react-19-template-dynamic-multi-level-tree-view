# A simple template logic for dynamically generated multi-level Tree View hierarchy

React 19 + JS + Vite 5.x with .env parameters

Number of tree nodes can be managed using three parameters in the supplied .env file

VITE_ROOT_ITEMS, number of root items in the Tree View, default is 2

VITE_MAX_ITEMS, number of all items in the Tree View, default is 30

VITE_ITEM_NAME_PREFIX, all node names start with this value, default is "Element"

# Getting started

npm i

npm run dev

http://localhost:3000 shows a dynamically generated Tree View

- Dynamic Tree View data is provided by the logic in public/api/v1.0/data/randomTreeView.js

http://localhost:3000?static=1 shows a predefined static Tree View

- Static Tree View data is loaded from public/api/v1.0/data/staticTreeView.json

# Component hierarchy

- index.html
  - main
    - App
      - TreeViewContext
        - TreeViewContentDynamic / TreeViewContentStatic.use / TreeViewContentStatic.hooks (conditional lazy loading)
          - TreeViewProvider (provides DataContext)
            - ContainerNode
              - CollapsibleNode (loads optional ContainerNode as children)

# A valid example of applying the "use" hoc to fetch data in a client-side component

Have a look at TreeViewContentStatic.use.jsx

- In order to load TreeViewContentStatic.use.js, which uses "use" hoc to fetch data, you'll need to set VITE_EXPERIMENTAL=true in .env (default)
- Otherwise, if VITE_EXPERIMENTAL=false, the logic will load TreeViewContentStatic.hooks.js, which uses a classic useEffect to fetch data.

The documentation on React 19 states:

**use does not support promises created in render.**

If you try to pass a promise created in render to use, React will warn:

**A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.
To fix, you need to pass a promise from a suspense powered library or framework that supports caching for promises. In the future we plan to ship features to make it easier to cache promises in render.**

A simple solution is to wrap your fetch promise into useMemo. If you do so, the warning will not appear in console.
