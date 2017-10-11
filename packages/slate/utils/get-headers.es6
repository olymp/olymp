import shortId from 'shortid';

const map = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
};

export const getHeaders = (nodes) => {
  const headers = [];
  const getHeadersNested = ({ kind, type, nodes }) => {
    if (type && type.indexOf('heading-') === 0) {
      const size = map[type.split('-')[1]];
      const text = getText(nodes);
      const slug = text
        .toLowerCase()
        .replace(/[\s!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '-');
      headers.push({ id: shortId.generate(), text, slug, children: [] });
    }
    (nodes || []).map(getHeadersNested);
  };
  (nodes || []).map(getHeadersNested);

  const newHeaders = [];
  let currentPath = [];
  headers.forEach((header) => {
    const lastItem = currentPath.length && currentPath[currentPath.length - 1];
    const mod = (lastItem && header.size - lastItem.size) || 0;
    if (mod > 0) {
      // is deeper into tree
      currentPath = [...currentPath, header];
    } else {
      currentPath = [...currentPath.slice(0, currentPath.length - 1 + mod), header];
    }
    const parent = currentPath.length > 1 && currentPath[currentPath.length - 2];
    if (parent && parent !== header) {
      parent.children.push(header);
    } else {
      newHeaders.push(header);
    }
  });
  return newHeaders;
};
export const getText = (children) => {
  let res = '';
  if (!children) {
    return '';
  }
  if (Array.isArray(children)) {
    return children.map(x => getText(x)).join();
  }
  if (typeof children === 'object') {
    if (children.nodes) {
      res += getText(children.nodes);
    } else if (children.text) {
      res += children.text;
    }
  }
  return res;
};
export const getId = x =>
  getText(x)
    .toLowerCase()
    .replace(/[\s!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '-');
export default getText;
