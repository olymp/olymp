import _set from 'lodash/set';
import _get from 'lodash/get';


var getAllBlocks = function getAllBlocks(nodes, mapper, parent) {
  var arr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  return nodes.reduce(function (state, node) {
    arr.push(node);
    mapper(node, parent);
    if (node.nodes) {
      arr = getAllBlocks(node.nodes, mapper, node, arr);
    }
    return arr;
  }, arr);
};

export default (function (value) {
  var withKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!_get(value, 'document.nodes')) {
    return [];
  }
  var toc = { children: [] };
  var chapterPath = [-1, -1, -1, -1, -1, -1];

  getAllBlocks(value.document.nodes, function (node, parent) {
    var level = node.type === 'heading-one' ? 0 : node.type === 'heading-two' ? 1 : node.type === 'heading-three' ? 2 : node.type === 'heading-four' ? 3 : node.type === 'heading-five' ? 4 : node.type === 'heading-six' ? 5 : null;
    if (level !== null) {
      chapterPath[level] = chapterPath[level] + 1;
      var path = chapterPath.slice(0, level + 1).map(function (x) {
        return x < 0 ? 0 : x;
      });
      var pathStr = path.reduce(function (result, x, i) {
        var newResult = [result, 'children'].filter(function (x) {
          return x;
        }).join('.');
        if (_get(toc, newResult)) {
          return newResult + '[' + (x > 0 ? x : 0) + ']';
        }
        return result;
      });

      var n = {
        children: [],
        text: node.text,
        id: node.data.get('id')
      };
      if (withKeys) {
        n.key = node.key;
      }
      _set(toc, pathStr, n);
    }
  });
  return toc.children;
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ && rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  ;
}

export var getVisible = function getVisible(toc) {
  if (typeof window === 'undefined' || !toc.length) {
    return;
  }
  var vis = toc.filter(function (_ref) {
    var key = _ref.key;

    var item = document.querySelector('[data-key="' + key + '"]');
    if (!item) return false;
    return isElementInViewport(item);
  });
  return (vis[Math.floor(vis.length / 2)] || vis[0] || {}).key;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2NyZWF0ZS10b2MuZXM2Il0sIm5hbWVzIjpbImdldEFsbEJsb2NrcyIsIm5vZGVzIiwibWFwcGVyIiwicGFyZW50IiwiYXJyIiwicmVkdWNlIiwic3RhdGUiLCJub2RlIiwicHVzaCIsInZhbHVlIiwid2l0aEtleXMiLCJ0b2MiLCJjaGlsZHJlbiIsImNoYXB0ZXJQYXRoIiwiZG9jdW1lbnQiLCJsZXZlbCIsInR5cGUiLCJwYXRoIiwic2xpY2UiLCJtYXAiLCJ4IiwicGF0aFN0ciIsInJlc3VsdCIsImkiLCJuZXdSZXN1bHQiLCJmaWx0ZXIiLCJqb2luIiwibiIsInRleHQiLCJpZCIsImRhdGEiLCJnZXQiLCJrZXkiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiZWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRWaXNpYmxlIiwibGVuZ3RoIiwidmlzIiwiaXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxNQUFoQjtBQUFBLE1BQXdCQyxHQUF4Qix1RUFBOEIsRUFBOUI7QUFBQSxTQUNuQkgsTUFBTUksTUFBTixDQUFhLFVBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUM1QkgsUUFBSUksSUFBSixDQUFTRCxJQUFUO0FBQ0FMLFdBQU9LLElBQVAsRUFBYUosTUFBYjtBQUNBLFFBQUlJLEtBQUtOLEtBQVQsRUFBZ0I7QUFDZEcsWUFBTUosYUFBYU8sS0FBS04sS0FBbEIsRUFBeUJDLE1BQXpCLEVBQWlDSyxJQUFqQyxFQUF1Q0gsR0FBdkMsQ0FBTjtBQUNEO0FB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TUFBTztBQUMvQixNQUFJLE9BQU9QLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsQ0FBQzdCLElBQUlxQyxNQUExQyxFQUFrRDtBQUNoRDtBQUNEO0FBQ0QsTUFBTUMsTUFBTXRDLElBQUljLE1BQUosQ0FBVyxnQkFBYTtBQUFBLFFBQVZPLEdBQVUsUUFBVkEsR0FBVTs7QUFDbEMsUUFBTWtCLE9BQU9wQyxTQUFTcUMsYUFBVCxpQkFBcUNuQixHQUFyQyxRQUFiO0FBQ0EsUUFBSSxDQUFDa0IsSUFBTCxFQUFXLE9BQU8sS0FBUDtBQUNYLFdBQU9qQixvQkFBb0JpQixJQUFwQixDQUFQO0FBQ0QsR0FKVyxDQUFaO0FBS0EsU0FBTyxDQUFDRCxJQUFJRyxLQUFLQyxLQUFMLENBQVdKLElBQUlELE1BQUosR0FBYSxDQUF4QixDQUFKLEtBQW1DQyxJQUFJLENBQUosQ0FBbkMsSUFBNkMsRUFBOUMsRUFBa0RqQixHQUF6RDtBQUNELENBVk0iLCJmaWxlIjoicGFja2FnZXMvc2xhdGUvY3JlYXRlLXRvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgZ2V0QWxsQmxvY2tzID0gKG5vZGVzLCBtYXBwZXIsIHBhcmVudCwgYXJyID0gW10pID0+XG4gIG5vZGVzLnJlZHVjZSgoc3RhdGUsIG5vZGUpID0+IHtcbiAgICBhcnIucHVzaChub2RlKTtcbiAgICBtYXBwZXIobm9kZSwgcGFyZW50KTtcbiAgICBpZiAobm9kZS5ub2Rlcykge1xuICAgICAgYXJyID0gZ2V0QWxsQmxvY2tzKG5vZGUubm9kZXMsIG1hcHBlciwgbm9kZSwgYXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfSwgYXJyKTtcblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlLCB3aXRoS2V5cyA9IHRydWUpID0+IHtcbiAgaWYgKCFnZXQodmFsdWUsICdkb2N1bWVudC5ub2RlcycpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IHRvYyA9IHsgY2hpbGRyZW46IFtdIH07XG4gIGNvbnN0IGNoYXB0ZXJQYXRoID0gWy0xLCAtMSwgLTEsIC0xLCAtMSwgLTFdO1xuXG4gIGdldEFsbEJsb2Nrcyh2YWx1ZS5kb2N1bWVudC5ub2RlcywgKG5vZGUsIHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IGxldmVsID1cbiAgICAgIG5vZGUudHlwZSA9PT0gJ2hlYWRpbmctb25lJ1xuICAgICAgICA/IDBcbiAgICAgICAgOiBub2RlLnR5cGUgPT09ICdoZWFkaW5nLXR3bydcbiAgICAgICAgICA/IDFcbiAgICAgICAgICA6IG5vZGUudHlwZSA9PT0gJ2hlYWRpbmctdGhyZWUnXG4gICAgICAgICAgICA/IDJcbiAgICAgICAgICAgIDogbm9kZS50eXBlID09PSAnaGVhZGluZy1mb3VyJ1xuICAgICAgICAgICAgICA/IDNcbiAgICAgICAgICAgICAgOiBub2RlLnR5cGUgPT09ICdoZWFkaW5nLWZpdmUnXG4gICAgICAgICAgICAgICAgPyA0XG4gICAgICAgICAgICAgICAgOiBub2RlLnR5cGUgPT09ICdoZWFkaW5nLXNpeCcgPyA1IDogbnVsbDtcbiAgICBpZiAobGV2ZWwgIT09IG51bGwpIHtcbiAgICAgIGNoYXB0ZXJQYXRoW2xldmVsXSA9IGNoYXB0ZXJQYXRoW2xldmVsXSArIDE7XG4gICAgICBjb25zdCBwYXRoID0gY2hhcHRlclBhdGguc2xpY2UoMCwgbGV2ZWwgKyAxKS5tYXAoeCA9PiB4IDwgMCA/IDAgOiB4KTtcbiAgICAgIGNvbnN0IHBhdGhTdHIgPSBwYXRoLnJlZHVjZSgocmVzdWx0LCB4LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Jlc3VsdCA9IFtyZXN1bHQsICdjaGlsZHJlbiddLmZpbHRlcih4ID0+IHgpLmpvaW4oJy4nKTtcbiAgICAgICAgaWYgKGdldCh0b2MsIG5ld1Jlc3VsdCkpIHtcbiAgICAgICAgICByZXR1cm4gYCR7bmV3UmVzdWx0fVske3ggPiAwID8geCA6IDB9XWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuID0ge1xuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHRleHQ6IG5vZGUudGV4dCxcbiAgICAgICAgaWQ6IG5vZGUuZGF0YS5nZXQoJ2lkJyksXG4gICAgICB9O1xuICAgICAgaWYgKHdpdGhLZXlzKSB7XG4gICAgICAgIG4ua2V5ID0gbm9kZS5rZXk7XG4gICAgICB9XG4gICAgICBzZXQodG9jLCBwYXRoU3RyLCBuKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG9jLmNoaWxkcmVuO1xufTtcblxuZnVuY3Rpb24gaXNFbGVtZW50SW5WaWV3cG9ydChlbCkge1xuICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiAoXG4gICAgcmVjdC50b3AgPj0gMCAmJlxuICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgcmVjdC5ib3R0b20gPD1cbiAgICAgICh3aW5kb3cuaW5uZXJIZWlnaHQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgLyogb3IgJCh3aW5kb3cpLmhlaWdodCgpICovICYmXG4gICAgcmVjdC5yaWdodCA8PVxuICAgICAgKHdpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLyogb3IgJCh3aW5kb3cpLndpZHRoKCkgKi9cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFZpc2libGUgPSB0b2MgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRvYy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmlzID0gdG9jLmZpbHRlcigoeyBrZXkgfSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1rZXk9XCIke2tleX1cIl1gKTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gaXNFbGVtZW50SW5WaWV3cG9ydChpdGVtKTtcbiAgfSk7XG4gIHJldHVybiAodmlzW01hdGguZmxvb3IodmlzLmxlbmd0aCAvIDIpXSB8fCB2aXNbMF0gfHwge30pLmtleTtcbn07XG4iXX0=