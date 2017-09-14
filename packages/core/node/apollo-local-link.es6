import { graphql } from 'graphql';
import { print } from 'graphql/language/printer';
import { ApolloLink, Operation, FetchResult, Observable } from 'apollo-link-core';

const __extends =
  (this && this.__extends) ||
  (function () {
    const extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (d, b) {
          d.__proto__ = b;
        }) ||
      function (d, b) {
        for (const p in b) {
          if (b.hasOwnProperty(p)) {
            d[p] = b[p];
          }
        }
      };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  }());
const __assign =
  (this && this.__assign) ||
  Object.assign ||
  function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (const p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }
    return t;
  };

const HttpLink = (function (_super) {
  __extends(HttpLink, _super);
  function HttpLink(fetchParams) {
    const _this = _super.call(this) || this;
    _this.schema = fetchParams.schema;
    _this.rootValue = fetchParams.rootValue;
    _this.context = fetchParams.context;
    return _this;
  }
  HttpLink.prototype.request = function (operation) {
    const request = {
      ...operation,
      query: print(operation.query),
    };
    return new Observable((observer) => {
      graphql(
        this.schema,
        request.query,
        this.rootValue,
        this.context,
        request.variables,
        request.operationName,
      )
        .then((data) => {
          if (!observer.closed) {
            observer.next(data);
            observer.complete();
          }
        })
        .catch((error) => {
          if (!observer.closed) {
            observer.error(error);
          }
        });
    });
  };
  return HttpLink;
}(ApolloLink));

export default HttpLink;
// # sourceMappingURL=httpLink.js.map
