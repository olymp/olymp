import { traverse } from '../utils';

const defaultRenderer = (name, { value, children, href }) => {
  if (name === 'line' && value === '') {
    return '';
  } else if (name === 'line' && !value) {
    return '<br />';
  } else if (name === 'line') {
    return `<p>${value}</p>`;
  } else if (name === 'h1') {
    return `<h1>${value}</h1>`;
  } else if (name === 'link') {
    return `<a href=${href}>${value}</a>`;
  }
};

export default (ast, { renderer, trim, context }) => {
  renderer = renderer || defaultRenderer;
  // object to react component
  const create = (name, props, decos) => {
    if (props.value) {
      props.value = props.value.trim();
    }
    if (props.children) {
      props.children = props.children.join('');
    }
    let text = renderer(name, props);
    decos.forEach(({ type, args }) => {
      const newText = renderer('@{type}', props, text);
      if (newText !== undefined) {
        text = newText;
      }
    });
    return text;
  };
  return ast.map(traverse(create)(context)).join('');
};
