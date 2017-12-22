import { toAst } from './processors';
import { interpolate } from './utils';

export default (text, props) => toAst(interpolate(text, props));
