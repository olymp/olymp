import { get, set } from 'lodash';

const getAllBlocks = (nodes, mapper, parent, arr = []) =>
  nodes.reduce((state, node) => {
    arr.push(node);
    mapper(node, parent);
    if (node.nodes) {
      arr = getAllBlocks(node.nodes, mapper, node, arr);
    }
    return arr;
  }, arr);

export default (value, withKeys = true) => {
  if (!get(value, 'document.nodes')) {
    return [];
  }
  const toc = { children: [] };
  const chapterPath = [-1, -1, -1, -1, -1, -1];

  getAllBlocks(value.document.nodes, (node, parent) => {
    const level =
      node.type === 'heading-one'
        ? 0
        : node.type === 'heading-two'
          ? 1
          : node.type === 'heading-three'
            ? 2
            : node.type === 'heading-four'
              ? 3
              : node.type === 'heading-five'
                ? 4
                : node.type === 'heading-six' ? 5 : null;
    if (level !== null) {
      chapterPath[level] = chapterPath[level] + 1;
      const path = chapterPath.slice(0, level + 1).map(x => x < 0 ? 0 : x);
      const pathStr = path.reduce((result, x, i) => {
        const newResult = [result, 'children'].filter(x => x).join('.');
        if (get(toc, newResult)) {
          return `${newResult}[${x > 0 ? x : 0}]`;
        }
        return result;
      });

      const n = {
        children: [],
        text: node.text,
        id: node.data.get('id'),
      };
      if (withKeys) {
        n.key = node.key;
      }
      set(toc, pathStr, n);
    }
  });
  return toc.children;
};

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

export const getVisible = toc => {
  if (typeof window === 'undefined' || !toc.length) {
    return;
  }
  const vis = toc.filter(({ key }) => {
    const item = document.querySelector(`[data-key="${key}"]`);
    if (!item) return false;
    return isElementInViewport(item);
  });
  return (vis[Math.floor(vis.length / 2)] || vis[0] || {}).key;
};
