import { get } from 'lodash';

export default (node, directiveName, argumentName) => {
  const directive = node.directives.find(
    ({ name }) => name && name.value === directiveName
  );
  if (directive && directive.arguments) {
    const argument = directive.arguments.find(
      ({ name }) => name && name.value === argumentName
    );
    return get(argument, 'value.value');
  }
  return undefined;
};
