import { traverse } from '../utils';

const defaultRenderer = (name, { value, children, href }) => {
  if (name === 'paragraph' && value === '') {
    return '';
  } else if (name === 'paragraph' && !value) {
    return '<br />';
  } else if (name === 'paragraph') {
    return `<span>${value}</span>`;
  } else if (name === 'h1') {
    return `<h1>${value}</h1>`;
  } else if (name === 'link') {
    return `<a href=${href}>${value}</a>`;
  }
};

export default (ast, { renderer, context }) => {
  const render = (...args) => {
    const v = renderer ? renderer(...args) : undefined;
    if (v !== undefined) {
      return v;
    }
    return defaultRenderer(...args);
  };
  // object to react component
  const create = (name, props, decos) => {
    if (props.value) {
      props.value = props.value.trim();
    }
    if (props.children) {
      props.children = props.children.join('');
    }
    let text = render(name, props);
    decos.forEach(({ type, args }) => {
      const newText = render('@{type}', props, text);
      if (newText !== undefined) {
        text = newText;
      }
    });
    return text;
  };
  return ast.map(traverse(create)(context)).join('');
};
