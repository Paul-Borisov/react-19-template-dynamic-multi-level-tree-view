const rootItems = import.meta.env.VITE_ROOT_ITEMS;
const maxItems = import.meta.env.VITE_MAX_ITEMS;
const name = import.meta.env.VITE_ITEM_NAME_PREFIX;

function generateTreeView() {
  const randomize = () => Math.floor(Math.random() * maxItems);
  const createNode = (id, parentId) => {
    const node = {
      id,
      name: `${name} ${id}`,
      parentId,
    };
    return node;
  };

  const existingIds = new Set();
  const data = [];
  for (let i = 1; i <= rootItems; i++) {
    let id;
    while ((id = randomize()) === 0 || existingIds.has(id));
    const node = createNode(id, null);
    data.push(node);
    existingIds.add(id);
  }
  const parents = Array.from(existingIds);
  for (let id = 1; id <= maxItems; id++) {
    if (existingIds.has(id)) continue;
    let index = Math.round(Math.random() * parents.length);
    if (index === parents.length) index--;
    //console.log(index, parents);
    const parentId = parents[index];
    const node = createNode(id, parentId);
    data.push(node);
    existingIds.add(id);
    parents.push(id);
  }

  //if (data.length > maxItems) console.log(data);
  return data;
}

export default new generateTreeView();
