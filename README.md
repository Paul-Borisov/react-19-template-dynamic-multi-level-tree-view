# Simple template logic for dynamically generated multi-level Tree View hierarchy

React 19 + JS + Vite 5.x with .env parameters

Number of tree nodes can be managed using three parameters in the supplied .env file

VITE_ROOT_ITEMS, number of root items in the Tree View, default is 2
VITE_MAX_ITEMS, number of all items in the Tree View, default is 30
VITE_ITEM_NAME_PREFIX, all node names start with this value, default is "Element"

# Getting started

npm i

npm run dev

http://localhost:3000 shows a dynamically generated Tree View

http://localhost:3000?static=1 shows a predefined static Tree View

# Components' hierarchy

- index.html
  - main
    - App
      - TreeViewContext
        - TreeViewContentDynamic / TreeViewContentStatic (conditional lazy loading)
          - TreeViewProvider (provides DataContext)
            - ContainerNode
              - CollapsibleNode (loads optional ContainerNode as children)
