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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ljb25zL19nZW5lcmF0ZS5lczYiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwicGF0aCIsInVwcGVyRmlyc3QiLCJjYW1lbENhc2UiLCJhcnIiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaW5kZXgiLCJmb3JFYWNoIiwicmVhZGRpciIsInJlYWRGcm9tIiwiZXJyIiwiZmlsZXMiLCJmaWxlTmFtZSIsImZpbGUiLCJzcGxpdCIsIm5hbWUiLCJjb250ZW50IiwicmVhZEZpbGVTeW5jIiwiZW5jb2RpbmciLCJyZXBsYWNlIiwidHJpbSIsIndyaXRlRmlsZVN5bmMiLCJnZW5lcmF0ZSIsImpvaW4iXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUSxNQUFSLENBQWI7O2VBQ2tDQSxRQUFRLFFBQVIsQztJQUExQkUsVSxZQUFBQSxVO0lBQVlDLFMsWUFBQUEsUzs7QUFFcEIsSUFBTUMsTUFBTSxDQUFDSCxLQUFLSSxPQUFMLENBQWFDLFNBQWIsRUFBd0IsS0FBeEIsQ0FBRCxDQUFaOztBQUVBLElBQUlDLFFBQVEsRUFBWjtBQUNBSCxJQUFJSSxPQUFKLENBQVksb0JBQVk7QUFDdEJULEtBQUdVLE9BQUgsQ0FBV0MsUUFBWCxFQUFxQixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDbkNBLFVBQU1KLE9BQU4sQ0FBYyxnQkFBUTtBQUNwQixVQUFNSyxtQkFBaUJDLEtBQUtDLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQXZCO0FBQ0EsVUFBTUMsWUFBVWQsV0FBV0MsVUFBVVUsUUFBVixDQUFYLENBQWhCO0FBQ0EsVUFBTUksVUFBVWxCLEdBQ2JtQixZQURhLENBQ0FqQixLQUFLSSxPQUFMLENBQWFLLFFBQWIsRUFBdUJJLElBQXZCLENBREEsRUFDOEI7QUFDMUNLLGtCQUFVO0FBRGdDLE9BRDlCLEVBSWJDLE9BSmEsQ0FJTCx3Q0FKSyxFQUlxQyxFQUpyQyxFQUtiQSxPQUxhLENBS0wsZUFMSyxFQUtZLEVBTFosRUFNYkEsT0FOYSxDQU1MLGVBTkssRUFNWSxFQU5aLEVBT2JBLE9BUGEsQ0FPTCxlQVBLLEVBT1ksRUFQWixFQVFiQSxPQVJhLENBUUwsZ0JBUkssRUFRYSxFQVJiLEVBU2JDLElBVGEsRUFBaEI7QUFVQXRCLFNBQUd1QixhQUFILENBQ0VyQixLQUFLSSxPQUFMLENBQWFDLFNBQWIsRUFBd0IsS0FBeEIsRUFBa0NPLFFBQWxDLFVBREYsRUFFRVUsU0FBU04sT0FBVCxFQUFrQkQsSUFBbEIsRUFBd0JLLElBQXhCLEVBRkY7QUFJQWQsMENBQWtDUyxJQUFsQyx3QkFBd0RILFFBQXhEO0FBQ0QsS0FsQkQ7QUFtQkFkLE9BQUd1QixhQUFILENBQWlCckIsS0FBS0ksT0FBTCxDQUFhQyxTQUFiLEVBQXdCLFdBQXhCLENBQWpCLEVBQXVEQyxLQUF2RDtBQUNELEdBckJEO0FBc0JELENBdkJEOztBQXlCQSxJQUFNZ0IsV0FBVyxTQUFYQSxRQUFXLENBQUNOLE9BQUQsRUFBVUQsSUFBVjtBQUFBLGdKQUliQyxRQUNDRixLQURELENBQ08sT0FEUCxFQUVDUyxJQUZELENBR0UsNEVBSEYsQ0FKYSxxRkFXS1IsSUFYTDtBQUFBLENBQWpCIiwiZmlsZSI6InBhY2thZ2VzL2ljb25zL19nZW5lcmF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCB7IHVwcGVyRmlyc3QsIGNhbWVsQ2FzZSB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmNvbnN0IGFyciA9IFtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3ZnJyldO1xuXG5sZXQgaW5kZXggPSAnJztcbmFyci5mb3JFYWNoKHJlYWRGcm9tID0+IHtcbiAgZnMucmVhZGRpcihyZWFkRnJvbSwgKGVyciwgZmlsZXMpID0+IHtcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBgZmEtJHtmaWxlLnNwbGl0KCcuJylbMF19YDtcbiAgICAgIGNvbnN0IG5hbWUgPSBgJHt1cHBlckZpcnN0KGNhbWVsQ2FzZShmaWxlTmFtZSkpfWA7XG4gICAgICBjb25zdCBjb250ZW50ID0gZnNcbiAgICAgICAgLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUocmVhZEZyb20sIGZpbGUpLCB7XG4gICAgICAgICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgICAgICAgfSlcbiAgICAgICAgLnJlcGxhY2UoJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PicsICcnKVxuICAgICAgICAucmVwbGFjZSgnIHdpZHRoPVwiMjA0OFwiJywgJycpXG4gICAgICAgIC5yZXBsYWNlKCcgd2lkdGg9XCIyMzA0XCInLCAnJylcbiAgICAgICAgLnJlcGxhY2UoJyB3aWR0aD1cIjE3OTJcIicsICcnKVxuICAgICAgICAucmVwbGFjZSgnIGhlaWdodD1cIjE3OTJcIicsICcnKVxuICAgICAgICAudHJpbSgpO1xuICAgICAgZnMud3JpdGVGaWxlU3luYyhcbiAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2xpYicsIGAke2ZpbGVOYW1lfS5lczZgKSxcbiAgICAgICAgZ2VuZXJhdGUoY29udGVudCwgbmFtZSkudHJpbSgpLFxuICAgICAgKTtcbiAgICAgIGluZGV4ICs9IGBcXG5leHBvcnQgeyBkZWZhdWx0IGFzICR7bmFtZX0gfSBmcm9tICcuL2xpYi8ke2ZpbGVOYW1lfSc7YDtcbiAgICB9KTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC5lczYnKSwgaW5kZXgpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBnZW5lcmF0ZSA9IChjb250ZW50LCBuYW1lKSA9PiBgXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICcuLi9zdHlsZWQnO1xuY29uc3QgaWNvbiA9ICh7IGNvbG9yLCB3aWR0aCwgaGVpZ2h0LCBzaXplLCAuLi5yZXN0IH0pID0+IChcbiAgJHtjb250ZW50XG4gICAgLnNwbGl0KCc8c3ZnICcpXG4gICAgLmpvaW4oXG4gICAgICAnPHN2ZyBmaWxsPXtjb2xvcn0gd2lkdGg9e3NpemUgfHwgd2lkdGh9IGhlaWdodD17c2l6ZSB8fCBoZWlnaHR9IHsuLi5yZXN0fSAnLFxuICAgICl9XG4pO1xuaWNvbi5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH07XG5pY29uLmRpc3BsYXlOYW1lID0gJyR7bmFtZX0nO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKGljb24pO1xuXG5gO1xuIl19
