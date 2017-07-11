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
      if (isPlainObject(obj[key])) {
        store[key] = recurse(obj[key], keys);
      } else if (isFunction(obj[key])) {
        const fn = obj[key];
        store[key] = (source, input, context, resolverAST) => {
          onBefore.forEach((hook) => {
            const newArg = hook({ keys, source, input, context, resolverAST, ast });
            if (newArg) input = newArg;
          });
          let result = fn(source, input, context);
          if (result && result.then) {
            return result.then((value) => {
              onAfter.forEach((hook) => {
                const newResult = hook({ keys, value, source, input, context, resolverAST, ast });
                if (newResult) value = newResult;
              });
              return value;
            });
          } else {
            onAfter.forEach((hook) => {
              const newResult = hook({ keys, result, source, input, context, resolverAST, ast });
              if (newResult) result = newResult;
            });
            return result;
          }
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
