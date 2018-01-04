'use strict';

var fs = require('fs');
var path = require('path');

var _require = require('lodash'),
    upperFirst = _require.upperFirst,
    camelCase = _require.camelCase;

var arr = [path.resolve(__dirname, 'svg')];

var index = '';
arr.forEach(function (readFrom) {
  fs.readdir(readFrom, function (err, files) {
    files.forEach(function (file) {
      var fileName = 'fa-' + file.split('.')[0];
      var name = '' + upperFirst(camelCase(fileName));
      var content = fs.readFileSync(path.resolve(readFrom, file), {
        encoding: 'utf8'
      }).replace('<?xml version="1.0" encoding="utf-8"?>', '').replace(' width="2048"', '').replace(' width="2304"', '').replace(' width="1792"', '').replace(' height="1792"', '').trim();
      fs.writeFileSync(path.resolve(__dirname, 'lib', fileName + '.es6'), generate(content, name).trim());
      index += '\nexport { default as ' + name + ' } from \'./lib/' + fileName + '\';';
    });
    fs.writeFileSync(path.resolve(__dirname, 'index.es6'), index);
  });
});

var generate = function generate(content, name) {
  return '\nimport React from \'react\';\nimport styled from \'../styled\';\nconst icon = ({ color, width, height, size, ...rest }) => (\n  ' + content.split('<svg ').join('<svg fill={color} width={size || width} height={size || height} {...rest} ') + '\n);\nicon.defaultProps = { width: 100, height: 100 };\nicon.displayName = \'' + name + '\';\nexport default styled(icon);\n\n';
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ljb25zL19nZW5lcmF0ZS5lczYiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aCIsInVwcGVyRmlyc3QiLCJjYW1lbENhc2UiLCJhcnIiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaW5kZXgiLCJmb3JFYWNoIiwicmVhZGRpciIsInJlYWRGcm9tIiwiZXJyIiwiZmlsZXMiLCJmaWxlTmFtZSIsImZpbGUiLCJzcGxpdCIsIm5hbWUiLCJjb250ZW50IiwicmVhZEZpbGVTeW5jIiwiZW5jb2RpbmciLCJyZXBsYWNlIiwidHJpbSIsIndyaXRlRmlsZVN5bmMiLCJnZW5lcmF0ZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsS0FBS0MsUUFBUSxJQUFSLENBQVg7QUFDQSxJQUFNQyxPQUFPRCxRQUFRLE1BQVIsQ0FBYjs7ZUFDa0NBLFFBQVEsUUFBUixDO0lBQTFCRSxVLFlBQUFBLFU7SUFBWUMsUyxZQUFBQSxTOztBQUVwQixJQUFNQyxNQUFNLENBQUNILEtBQUtJLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixLQUF4QixDQUFELENBQVo7O0FBRUEsSUFBSUMsUUFBUSxFQUFaO0FBQ0FILElBQUlJLE9BQUosQ0FBWSxvQkFBWTtBQUN0QlQsS0FBR1UsT0FBSCxDQUFXQyxRQUFYLEVBQXFCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNuQ0EsVUFBTUosT0FBTixDQUFjLGdCQUFRO0FBQ3BCLFVBQU1LLG1CQUFpQkMsS0FBS0MsS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBdkI7QUFDQSxVQUFNQyxZQUFVZCxXQUFXQyxVQUFVVSxRQUFWLENBQVgsQ0FBaEI7QUFDQSxVQUFNSSxVQUFVbEIsR0FDYm1CLFlBRGEsQ0FDQWpCLEtBQUtJLE9BQUwsQ0FBYUssUUFBYixFQUF1QkksSUFBdkIsQ0FEQSxFQUM4QjtBQUMxQ0ssa0JBQVU7QUFEZ0MsT0FEOUIsRUFJYkMsT0FKYSxDQUlMLHdDQUpLLEVBSXFDLEVBSnJDLEVBS2JBLE9BTGEsQ0FLTCxlQUxLLEVBS1ksRUFMWixFQU1iQSxPQU5hLENBTUwsZUFOSyxFQU1ZLEVBTlosRUFPYkEsT0FQYSxDQU9MLGVBUEssRUFPWSxFQVBaLEVBUWJBLE9BUmEsQ0FRTCxnQkFSSyxFQVFhLEVBUmIsRUFTYkMsSUFUYSxFQUFoQjtBQVVBdEIsU0FBR3VCLGFBQUgsQ0FDRXJCLEtBQUtJLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixLQUF4QixFQUFrQ08sUUFBbEMsVUFERixFQUVFVSxTQUFTTixPQUFULEVBQWtCRCxJQUFsQixFQUF3QkssSUFBeEIsRUFGRjtBQUlBZCwwQ0FBa0NTLElBQWxDLHdCQUF3REgsUUFBeEQ7QUFDRCxLQWxCRDtBQW1CQWQsT0FBR3VCLGFBQUgsQ0FBaUJyQixLQUFLSSxPQUFMLENBQWFDLFNBQWIsRUFBd0IsV0FBeEIsQ0FBakIsRUFBdURDLEtBQXZEO0FBQ0QsR0FyQkQ7QUFzQkQsQ0F2QkQ7O0FBeUJBLElBQU1nQixXQUFXLFNBQVhBLFFBQVcsQ0FBQ04sT0FBRCxFQUFVRCxJQUFWO0FBQUEsZ0pBSWJDLFFBQ0NGLEtBREQsQ0FDTyxPQURQLEVBRUNTLElBRkQsQ0FHRSw0RUFIRixDQUphLHFGQVdLUixJQVhMO0FBQUEsQ0FBakIiLCJmaWxlIjoiZXh0ZXJuYWwvaWNvbnMvX2dlbmVyYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHsgdXBwZXJGaXJzdCwgY2FtZWxDYXNlIH0gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuY29uc3QgYXJyID0gW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzdmcnKV07XG5cbmxldCBpbmRleCA9ICcnO1xuYXJyLmZvckVhY2gocmVhZEZyb20gPT4ge1xuICBmcy5yZWFkZGlyKHJlYWRGcm9tLCAoZXJyLCBmaWxlcykgPT4ge1xuICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGBmYS0ke2ZpbGUuc3BsaXQoJy4nKVswXX1gO1xuICAgICAgY29uc3QgbmFtZSA9IGAke3VwcGVyRmlyc3QoY2FtZWxDYXNlKGZpbGVOYW1lKSl9YDtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmc1xuICAgICAgICAucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShyZWFkRnJvbSwgZmlsZSksIHtcbiAgICAgICAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgICAgICB9KVxuICAgICAgICAucmVwbGFjZSgnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIj8+JywgJycpXG4gICAgICAgIC5yZXBsYWNlKCcgd2lkdGg9XCIyMDQ4XCInLCAnJylcbiAgICAgICAgLnJlcGxhY2UoJyB3aWR0aD1cIjIzMDRcIicsICcnKVxuICAgICAgICAucmVwbGFjZSgnIHdpZHRoPVwiMTc5MlwiJywgJycpXG4gICAgICAgIC5yZXBsYWNlKCcgaGVpZ2h0PVwiMTc5MlwiJywgJycpXG4gICAgICAgIC50cmltKCk7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKFxuICAgICAgICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbGliJywgYCR7ZmlsZU5hbWV9LmVzNmApLFxuICAgICAgICBnZW5lcmF0ZShjb250ZW50LCBuYW1lKS50cmltKCksXG4gICAgICApO1xuICAgICAgaW5kZXggKz0gYFxcbmV4cG9ydCB7IGRlZmF1bHQgYXMgJHtuYW1lfSB9IGZyb20gJy4vbGliLyR7ZmlsZU5hbWV9JztgO1xuICAgIH0pO1xuICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4LmVzNicpLCBpbmRleCk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGdlbmVyYXRlID0gKGNvbnRlbnQsIG5hbWUpID0+IGBcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlZCc7XG5jb25zdCBpY29uID0gKHsgY29sb3IsIHdpZHRoLCBoZWlnaHQsIHNpemUsIC4uLnJlc3QgfSkgPT4gKFxuICAke2NvbnRlbnRcbiAgICAuc3BsaXQoJzxzdmcgJylcbiAgICAuam9pbihcbiAgICAgICc8c3ZnIGZpbGw9e2NvbG9yfSB3aWR0aD17c2l6ZSB8fCB3aWR0aH0gaGVpZ2h0PXtzaXplIHx8IGhlaWdodH0gey4uLnJlc3R9ICcsXG4gICAgKX1cbik7XG5pY29uLmRlZmF1bHRQcm9wcyA9IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfTtcbmljb24uZGlzcGxheU5hbWUgPSAnJHtuYW1lfSc7XG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoaWNvbik7XG5cbmA7XG4iXX0=
