import { parse } from 'graphql/language';
import { buildASTSchema } from 'graphql/utilities';
import { addResolveFunctionsToSchema } from 'graphql-tools';
import applyDirectivesToAST from './apply-directives';
import { isPlainObject, isFunction, get, keys as _keys, values } from 'lodash';

export default ({ typeDefs, resolvers, directives, onBefore, onAfter }) => {
  const ast = parse(typeDefs);
  if (directives) {
    applyDirectivesToAST(ast, directives, resolvers);
  }
  const builtSchema = buildASTSchema(ast);

  // Wrap resolvers for onAfter, onBefore
  const recurse = (obj, currentKeys = []) => {
    return Object.keys(obj).reduce((store, key) => {
      const keys = [...currentKeys, key];
      if (isPlainObject(obj[key]) && typeof obj[key].name === 'string') {
        store[key] = obj[key];
      } else if (isPlainObject(obj[key])) {
        store[key] = recurse(obj[key], keys);
      } else if (isFunction(obj[key])) {
        const fn = obj[key];
        store[key] = (source, variables, context, resolverAST) => {
          let promise = Promise.resolve(variables);
          onBefore.forEach((hook) => {
            promise = promise.then((newVariables) => {
              variables = newVariables || variables;
              return hook({ keys, source, variables, context, resolverAST, ast });
            });
          });
          promise = promise.then((newVariables) => {
            variables = newVariables || variables;
            return fn(source, variables, context, resolverAST);
          });
          let value;
          onAfter.forEach((hook) => {
            promise = promise.then((newValue) => {
              value = newValue || value;
              return hook({ keys, source, value, variables, context, resolverAST, ast });
            });
          });
          return promise.then(newValue => newValue || value);
        };
      } else {
        store[key] = obj[key];
      } return store;
    }, {});
  };
  addResolveFunctionsToSchema(builtSchema, recurse(resolvers));
  // console.log(resolvers);
  return builtSchema;
};
