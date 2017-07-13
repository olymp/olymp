import capitalize from 'lodash/upperFirst';

export default (x) => {
  const uml = x
    .replace(/ae/g, 'ä')
    .replace(/oe/g, 'ö')
    .replace(/ü/g, 'ue')
    .replace(/Ae/g, 'Ä')
    .replace(/Oe/g, 'Ö')
    .replace(/Ue/g, 'Ü');

  const snake = uml.replace(/([A-Z])/g, $1 => `-${$1}`);
  const capitalized = capitalize(snake);

  return capitalized;
};
