import { traverse } from '../utils';

const defaultRenderer = (name, { value, children, href }) => {
  if (name === 'paragraph' && value === '') {
    return '';
  } else if (name === 'paragraph' && !value) {
    return '\n';
  } else if (name === 'paragraph') {
    return `${value}`;
  } else if (name === 'h1') {
    return `${value}\n`;
  } else if (name === 'link') {
    return `${value} => ${href}`;
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
