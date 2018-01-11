import { get } from 'lodash';
import { createTypeFetcher } from 'olymp-graphql/server';
import { RateLimiter } from 'limiter';
import LRU from 'lru-cache';
import shortId from 'shortid';

const cache = LRU({
  max: 500,
  maxAge: 1000 * 60 * 5,
});
const limit = 1000;
const per = 'hour';

const fetchType = createTypeFetcher(
  (node, name) => get(node, 'name.value') === name,
);

export default {
  name: 'rate-limit',
  onBefore: ({ keys, context, resolverAST, ast, ...rest }) => {
    if (keys.length !== 2) return;
    const type = fetchType(ast, keys[1]);
    const directive = get(type, 'directives', []).find(
      d => get(d, 'name.value') === 'rateLimit',
    );
    const { ip } = context;
    if (type && directive) {
      let cachedLimiter = cache.get(ip);
      if (cachedLimiter) {
        if (cachedLimiter.getTokensRemaining() <= 0) {
          throw new Error('too many requests from your ip!');
        }
        cachedLimiter.tryRemoveTokens(1);
      } else {
        cachedLimiter = new RateLimiter(limit, per);
        cachedLimiter.id = shortId.generate();
      }
      cachedLimiter.cost = 1;
      cachedLimiter.limit = limit;
      cachedLimiter.remaining = Math.floor(cachedLimiter.getTokensRemaining());
      cachedLimiter.resetAt = cachedLimiter.tokenBucket.interval;
      cachedLimiter.nodeCount = 0;
      context.rateLimit = cachedLimiter;
      cache.set(ip, cachedLimiter, 10000);
    }
  },
  queries: `
    rateLimit: RateLimit
  `,
  resolvers: {
    queries: {
      rateLimit: (source, {}, { rateLimit }) =>
        console.log(rateLimit) || rateLimit,
    },
  },
  schema: `
    type RateLimit {
      id: String!
      cost: Int!
      limit: Int!
      remaining: Int!
      resetAt: DateTime!
      nodeCount: Int!
    }
  `,
};
