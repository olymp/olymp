export default (chars) => {
  switch (chars) {
    case '*':
    case '-':
    case '+':
      return 'bulleted-list-item';
    case '>':
      return 'block-quote';
    case '#':
      return 'heading-one';
    case '##':
      return 'heading-two';
    case '###':
      return 'heading-three';
    case '####':
      return 'heading-four';
    case '#####':
      return 'heading-five';
    case '######':
      return 'heading-six';
    case '1.':
      return 'numbered-list-item';
    default:
      return null;
  }
};
