// convert #componentName key=value# to object { type: componentName, args: { key: value } }
export const parseComponent = (raw) => {
  const [text, ...decos] = raw.split('@');
  const [type, ...rest] = text.split(' ');
  const decorators = decos.map(parseComponent);
  const args = {};
  let currentKey = 'value';
  rest.forEach((frag) => {
    if (!frag) { return; }
    if (frag.indexOf('=') !== -1) {
      const key = frag.substr(0, frag.indexOf('='));
      currentKey = key;
      frag = frag.substr(frag.indexOf('=') + 1);
    }
    if (!args[currentKey]) { args[currentKey] = frag; } else { args[currentKey] += ` ${frag}`; }
  });
  return { type, args, decorators, raw };
};
// convert array of lines to AST
export const processLines = (lines, result = []) => {
  if (!lines || lines.length === 0) { return { lines, result }; }
  let [line, ...rest] = lines;
  const split = line.split('#');
  const equalLength = line && line.length === split.length - 1;
  if (equalLength) {
    // '#' or '##' or '##...#'
    if (line.length > 1) { rest.splice(0, 0, '#'); }
    return { lines: rest, result };
  } else if (!split[0] && split.length === 2) {
    // # found exactly once
    const arg = processLines(rest);
    rest = arg.lines;
    result.push({
      ...parseComponent(split[1]),
      kind: 'block',
      children: arg.result,
    });
  } else {
    // no # or more than one # => assume text
    if (result.length) { result.push({ type: 'break' }); } // previous lines in result => add line-break
    split.forEach((frag, i) => {
      //
      if (!frag) { return; }
      const isEven = i % 2; // if even => inline block, else => just text
      if (isEven) { result.push({ ...parseComponent(frag), kind: 'inline', children: [] }); } else { result.push({ text: frag }); }
    });
  }
  return processLines(rest, result);
};
export default (text) => {
  if (!text) { return []; }
  return processLines(text.split('\n')).result;
};
