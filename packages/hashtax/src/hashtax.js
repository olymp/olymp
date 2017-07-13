import { toAst } from './processors';
import { interpolate } from './utils';
export default function (text, props) { return toAst(interpolate(text, props)); };
//# sourceMappingURL=hashtax.js.map