const objectAssign = require('object-assign');

const Annotator = require('pug-source-gen/lib/annotator');
const CodeGenerator = require('./ast');
const cleanupAST = require('pug-source-gen/lib/cleanup-ast');

export const defaultOptions = {
  indentChar: '  ',
  useColon: false, // Use block expansion when possible
  preferredQuote: "'", // Preferred quotation mark used in attributes
};

export default function generateCode(ast, options) {
  options = objectAssign({}, defaultOptions, options);
  const cleanedAST = cleanupAST(ast);
  const annotatedAST = new Annotator(ast, options).compile();
  return new CodeGenerator(annotatedAST, options).compile();
}
