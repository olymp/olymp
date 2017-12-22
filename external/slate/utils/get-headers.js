var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import shortId from 'shortid';

var map = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6
};

export var getHeaders = function getHeaders(nodes) {
  var headers = [];
  var getHeadersNested = function getHeadersNested(_ref) {
    var kind = _ref.kind,
        type = _ref.type,
        nodes = _ref.nodes;

    if (type && type.indexOf('heading-') === 0) {
      var size = map[type.split('-')[1]];
      var text = getText(nodes);
      var slug = text.toLowerCase().replace(/[\s!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '-');
      headers.push({ id: shortId.generate(), text: text, slug: slug, children: [] });
    }
    (nodes || []).map(getHeadersNested);
  };
  (nodes || []).map(getHeadersNested);

  var newHeaders = [];
  var currentPath = [];
  headers.forEach(function (header) {
    var lastItem = currentPath.length && currentPath[currentPath.length - 1];
    var mod = lastItem && header.size - lastItem.size || 0;
    if (mod > 0) {
      // is deeper into tree
      currentPath = [].concat(_toConsumableArray(currentPath), [header]);
    } else {
      currentPath = [].concat(_toConsumableArray(currentPath.slice(0, currentPath.length - 1 + mod)), [header]);
    }
    var parent = currentPath.length > 1 && currentPath[currentPath.length - 2];
    if (parent && parent !== header) {
      parent.children.push(header);
    } else {
      newHeaders.push(header);
    }
  });
  return newHeaders;
};
export var getText = function getText(children) {
  var res = '';
  if (!children) {
    return '';
  }
  if (Array.isArray(children)) {
    return children.map(function (x) {
      return getText(x);
    }).join();
  }
  if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object') {
    if (children.nodes) {
      res += getText(children.nodes);
    } else if (children.text) {
      res += children.text;
    }
  }
  return res;
};
export var getId = function getId(x) {
  return getText(x).toLowerCase().replace(/[\s!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '-');
};
export default getText;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3V0aWxzL2dldC1oZWFkZXJzLmVzNiJdLCJuYW1lcyI6WyJzaG9ydElkIiwibWFwIiwib25lIiwidHdvIiwidGhyZWUiLCJmb3VyIiwiZml2ZSIsInNpeCIsImdldEhlYWRlcnMiLCJub2RlcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJzTmVzdGVkIiwia2luZCIsInR5cGUiLCJpbmRleE9mIiwic2l6ZSIsInNwbGl0IiwidGV4dCIsImdldFRleHQiLCJzbHVnIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwicHVzaCIsImlkIiwiZ2VuZXJhdGUiLCJjaGlsZHJlbiIsIm5ld0hlYWRlcnMiLCJjdXJyZW50UGF0aCIsImZvckVhY2giLCJoZWFkZXIiLCJsYXN0SXRlbSIsImxlbmd0aCIsIm1vZCIsInNsaWNlIiwicGFyZW50IiwicmVzIiwiQXJyYXkiLCJpc0FycmF5IiwieCIsImpvaW4iLCJnZXRJZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLE9BQVAsTUFBb0IsU0FBcEI7O0FBRUEsSUFBTUMsTUFBTTtBQUNWQyxPQUFLLENBREs7QUFFVkMsT0FBSyxDQUZLO0FBR1ZDLFNBQU8sQ0FIRztBQUlWQyxRQUFNLENBSkk7QUFLVkMsUUFBTSxDQUxJO0FBTVZDLE9BQUs7QUFOSyxDQUFaOztBQVNBLE9BQU8sSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUNuQyxNQUFNQyxVQUFVLEVBQWhCO0FBQ0EsTUFBTUMsbUJBQW1CLFNBQW5CQSxnQkFBbUIsT0FBMkI7QUFBQSxRQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsUUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLFFBQVpKLEtBQVksUUFBWkEsS0FBWTs7QUFDbEQsUUFBSUksUUFBUUEsS0FBS0MsT0FBTCxDQUFhLFVBQWIsTUFBNkIsQ0FBekMsRUFBNEM7QUFDMUMsVUFBTUMsT0FBT2QsSUFBSVksS0FBS0csS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBSixDQUFiO0FBQ0EsVUFBTUMsT0FBT0MsUUFBUVQsS0FBUixDQUFiO0FBQ0EsVUFBTVUsT0FBT0YsS0FDVkcsV0FEVSxHQUVWQyxPQUZVLENBRUYscURBRkUsRUFFcUQsR0FGckQsQ0FBYjtBQUdBWCxjQUFRWSxJQUFSLENBQWEsRUFBRUMsSUFBSXZCLFFBQVF3QixRQUFSLEVBQU4sRUFBMEJQLFVBQTFCLEVBQWdDRSxVQUFoQyxFQUFzQ00sVUFBVSxFQUFoRCxFQUFiO0FBQ0Q7QUFDRCxLQUFDaEIsU0FBUyxFQUFWLEVBQWNSLEdBQWQsQ0FBa0JVLGdCQUFsQjtBQUNELEdBVkQ7QUFXQSxHQUFDRixTQUFTLEVBQVYsRUFBY1IsR0FBZCxDQUFrQlUsZ0JBQWxCOztBQUVBLE1BQU1lLGFBQWEsRUFBbkI7QUFDQSxNQUFJQyxjQUFjLEVBQWxCO0FBQ0FqQixVQUFRa0IsT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQVk7QUFDMUIsUUFBTUMsV0FBV0gsWUFBWUksTUFBWixJQUFzQkosWUFBWUEsWUFBWUksTUFBWixHQUFxQixDQUFqQyxDQUF2QztBQUNBLFFBQU1DLE1BQU9GLFlBQVlELE9BQU9kLElBQVAsR0FBY2UsU0FBU2YsSUFBcEMsSUFBNkMsQ0FBekQ7QUFDQSxRQUFJaUIsTUFBTSxDQUFWLEVBQWE7QUFDWDtBQUNBTCxpREFBa0JBLFdBQWxCLElBQStCRSxNQUEvQjtBQUNELEtBSEQsTUFHTztBQUNMRixpREFBa0JBLFlBQVlNLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJOLFlBQVlJLE1BQVosR0FBcUIsQ0FBckIsR0FBeUJDLEdBQTlDLENBQWxCLElBQXNFSCxNQUF0RTtBQUNEO0FBQ0QsUUFBTUssU0FBU1AsWUFBWUksTUFBWixHQUFxQixDQUFyQixJQUEwQkosWUFBWUEsWUFBWUksTUFBWixHQUFxQixDQUFqQyxDQUF6QztBQUNBLFFBQUlHLFVBQVVBLFdBQVdMLE1BQXpCLEVBQWlDO0FBQy9CSyxhQUFPVCxRQUFQLENBQWdCSCxJQUFoQixDQUFxQk8sTUFBckI7QUFDRCxLQUZELE1BRU87QUFDTEgsaUJBQVdKLElBQVgsQ0FBZ0JPLE1BQWhCO0FBQ0Q7QUFDRixHQWZEO0FBZ0JBLFNBQU9ILFVBQVA7QUFDRCxDQWxDTTtBQW1DUCxPQUFPLElBQU1SLFVBQVUsU0FBVkEsT0FBVSxDQUFDTyxRQUFELEVBQWM7QUFDbkMsTUFBSVUsTUFBTSxFQUFWO0FBQ0EsTUFBSSxDQUFDVixRQUFMLEVBQWU7QUFDYixXQUFPLEVBQVA7QUFDRDtBQUNELE1BQUlXLE1BQU1DLE9BQU4sQ0FBY1osUUFBZCxDQUFKLEVBQTZCO0FBQzNCLFdBQU9BLFNBQVN4QixHQUFULENBQWE7QUFBQSxhQUFLaUIsUUFBUW9CLENBQVIsQ0FBTDtBQUFBLEtBQWIsRUFBOEJDLElBQTlCLEVBQVA7QUFDRDtBQUNELE1BQUksUUFBT2QsUUFBUCx5Q0FBT0EsUUFBUCxPQUFvQixRQUF4QixFQUFrQztBQUNoQyxRQUFJQSxTQUFTaEIsS0FBYixFQUFvQjtBQUNsQjBCLGFBQU9qQixRQUFRTyxTQUFTaEIsS0FBakIsQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJZ0IsU0FBU1IsSUFBYixFQUFtQjtBQUN4QmtCLGFBQU9WLFNBQVNSLElBQWhCO0FBQ0Q7QUFDRjtBQUNELFNBQU9rQixHQUFQO0FBQ0QsQ0FoQk07QUFpQlAsT0FBTyxJQUFNSyxRQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUNuQnRCLFFBQVFvQixDQUFSLEVBQ0dsQixXQURILEdBRUdDLE9BRkgsQ0FFVyxxREFGWCxFQUVrRSxHQUZsRSxDQURtQjtBQUFBLENBQWQ7QUFJUCxlQUFlSCxPQUFmIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL3V0aWxzL2dldC1oZWFkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XG5cbmNvbnN0IG1hcCA9IHtcbiAgb25lOiAxLFxuICB0d286IDIsXG4gIHRocmVlOiAzLFxuICBmb3VyOiA0LFxuICBmaXZlOiA1LFxuICBzaXg6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVycyA9IChub2RlcykgPT4ge1xuICBjb25zdCBoZWFkZXJzID0gW107XG4gIGNvbnN0IGdldEhlYWRlcnNOZXN0ZWQgPSAoeyBraW5kLCB0eXBlLCBub2RlcyB9KSA9PiB7XG4gICAgaWYgKHR5cGUgJiYgdHlwZS5pbmRleE9mKCdoZWFkaW5nLScpID09PSAwKSB7XG4gICAgICBjb25zdCBzaXplID0gbWFwW3R5cGUuc3BsaXQoJy0nKVsxXV07XG4gICAgICBjb25zdCB0ZXh0ID0gZ2V0VGV4dChub2Rlcyk7XG4gICAgICBjb25zdCBzbHVnID0gdGV4dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW1xccyFcXFwiIyQlJidcXChcXClcXCpcXCssXFwuXFwvOjs8PT5cXD9cXEBcXFtcXFxcXFxdXFxeYFxce1xcfFxcfX5dL2csICctJyk7XG4gICAgICBoZWFkZXJzLnB1c2goeyBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLCB0ZXh0LCBzbHVnLCBjaGlsZHJlbjogW10gfSk7XG4gICAgfVxuICAgIChub2RlcyB8fCBbXSkubWFwKGdldEhlYWRlcnNOZXN0ZWQpO1xuICB9O1xuICAobm9kZXMgfHwgW10pLm1hcChnZXRIZWFkZXJzTmVzdGVkKTtcblxuICBjb25zdCBuZXdIZWFkZXJzID0gW107XG4gIGxldCBjdXJyZW50UGF0aCA9IFtdO1xuICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xuICAgIGNvbnN0IGxhc3RJdGVtID0gY3VycmVudFBhdGgubGVuZ3RoICYmIGN1cnJlbnRQYXRoW2N1cnJlbnRQYXRoLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG1vZCA9IChsYXN0SXRlbSAmJiBoZWFkZXIuc2l6ZSAtIGxhc3RJdGVtLnNpemUpIHx8IDA7XG4gICAgaWYgKG1vZCA+IDApIHtcbiAgICAgIC8vIGlzIGRlZXBlciBpbnRvIHRyZWVcbiAgICAgIGN1cnJlbnRQYXRoID0gWy4uLmN1cnJlbnRQYXRoLCBoZWFkZXJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGF0aCA9IFsuLi5jdXJyZW50UGF0aC5zbGljZSgwLCBjdXJyZW50UGF0aC5sZW5ndGggLSAxICsgbW9kKSwgaGVhZGVyXTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudFBhdGgubGVuZ3RoID4gMSAmJiBjdXJyZW50UGF0aFtjdXJyZW50UGF0aC5sZW5ndGggLSAyXTtcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudCAhPT0gaGVhZGVyKSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChoZWFkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdIZWFkZXJzLnB1c2goaGVhZGVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3SGVhZGVycztcbn07XG5leHBvcnQgY29uc3QgZ2V0VGV4dCA9IChjaGlsZHJlbikgPT4ge1xuICBsZXQgcmVzID0gJyc7XG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuLm1hcCh4ID0+IGdldFRleHQoeCkpLmpvaW4oKTtcbiAgfVxuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChjaGlsZHJlbi5ub2Rlcykge1xuICAgICAgcmVzICs9IGdldFRleHQoY2hpbGRyZW4ubm9kZXMpO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW4udGV4dCkge1xuICAgICAgcmVzICs9IGNoaWxkcmVuLnRleHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuZXhwb3J0IGNvbnN0IGdldElkID0geCA9PlxuICBnZXRUZXh0KHgpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvW1xccyFcXFwiIyQlJidcXChcXClcXCpcXCssXFwuXFwvOjs8PT5cXD9cXEBcXFtcXFxcXFxdXFxeYFxce1xcfFxcfX5dL2csICctJyk7XG5leHBvcnQgZGVmYXVsdCBnZXRUZXh0O1xuIl19
