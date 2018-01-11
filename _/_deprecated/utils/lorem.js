export default (function () {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var type = arguments[1];

  var lorem = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'];

  if (type === 'characters' || type === 'chars') {
    var outputString = '';
    var tempString = lorem.join('\n\n');

    while (outputString.length < num) {
      outputString += tempString;
    }

    return outputString.substring(0, num);
  } else if (type === 'words') {
    var _list = new Array();
    var wordList = new Array();
    wordList = lorem[0].split(' ');
    var _iParagraphCount = 0;
    var iWordCount = 0;

    while (_list.length < num) {
      if (iWordCount > wordList.length) {
        iWordCount = 0;
        _iParagraphCount += 1;
        if (_iParagraphCount + 1 > lorem.length) {
          _iParagraphCount = 0;
        }
        wordList = lorem[_iParagraphCount].split(' ');
        wordList[0] = '\n\n' + wordList[0];
      }
      _list.push(wordList[iWordCount]);
      iWordCount++;
    }

    return _list.join(' '); // changed
  }

  // paragraphs
  var list = new Array();
  var iParagraphCount = 0;

  while (list.length < num) {
    if (iParagraphCount + 1 > lorem.length) {
      iParagraphCount = 0;
    }
    list.push(lorem[iParagraphCount]);
    iParagraphCount += 1;
  }
  return list.join('\n\n'); // changed
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2xvcmVtLmVzNiJdLCJuYW1lcyI6WyJudW0iLCJ0eXBlIiwibG9yZW0iLCJvdXRwdXRTdHJpbmciLCJ0ZW1wU3RyaW5nIiwiam9pbiIsImxlbmd0aCIsInN1YnN0cmluZyIsImxpc3QiLCJBcnJheSIsIndvcmRMaXN0Iiwic3BsaXQiLCJpUGFyYWdyYXBoQ291bnQiLCJpV29yZENvdW50IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWUsWUFBbUI7QUFBQSxNQUFsQkEsR0FBa0IsdUVBQVosQ0FBWTtBQUFBLE1BQVRDLElBQVM7O0FBQ2hDLE1BQU1DLFFBQVEsQ0FDWixpaUJBRFksQ0FBZDs7QUFJQSxNQUFJRCxTQUFTLFlBQVQsSUFBeUJBLFNBQVMsT0FBdEMsRUFBK0M7QUFDN0MsUUFBSUUsZUFBZSxFQUFuQjtBQUNBLFFBQU1DLGFBQWFGLE1BQU1HLElBQU4sQ0FBVyxNQUFYLENBQW5COztBQUVBLFdBQU9GLGFBQWFHLE1BQWIsR0FBc0JOLEdBQTdCLEVBQWtDO0FBQ2hDRyxzQkFBZ0JDLFVBQWhCO0FBQ0Q7O0FBRUQsV0FBT0QsYUFBYUksU0FBYixDQUF1QixDQUF2QixFQUEwQlAsR0FBMUIsQ0FBUDtBQUNELEdBVEQsTUFTTyxJQUFJQyxTQUFTLE9BQWIsRUFBc0I7QUFDM0IsUUFBTU8sUUFBTyxJQUFJQyxLQUFKLEVBQWI7QUFDQSxRQUFJQyxXQUFXLElBQUlELEtBQUosRUFBZjtBQUNBQyxlQUFXUixNQUFNLENBQU4sRUFBU1MsS0FBVCxDQUFlLEdBQWYsQ0FBWDtBQUNBLFFBQUlDLG1CQUFrQixDQUF0QjtBQUNBLFFBQUlDLGFBQWEsQ0FBakI7O0FBRUEsV0FBT0wsTUFBS0YsTUFBTCxHQUFjTixHQUFyQixFQUEwQjtBQUN4QixVQUFJYSxhQUFhSCxTQUFTSixNQUExQixFQUFrQztBQUNoQ08scUJBQWEsQ0FBYjtBQUNBRCw0QkFBbUIsQ0FBbkI7QUFDQSxZQUFJQSxtQkFBa0IsQ0FBbEIsR0FBc0JWLE1BQU1JLE1BQWhDLEVBQXdDO0FBQ3RDTSw2QkFBa0IsQ0FBbEI7QUFDRDtBQUNERixtQkFBV1IsTUFBTVUsZ0JBQU4sRUFBdUJELEtBQXZCLENBQTZCLEdBQTdCLENBQVg7QUFDQUQsaUJBQVMsQ0FBVCxhQUFxQkEsU0FBUyxDQUFULENBQXJCO0FBQ0Q7QUFDREYsWUFBS00sSUFBTCxDQUFVSixTQUFTRyxVQUFULENBQVY7QUFDQUE7QUFDRDs7QUFFRCxXQUFPTCxNQUFLSCxJQUFMLENBQVUsR0FBVixDQUFQLENBckIyQixDQXFCSjtBQUN4Qjs7QUFFRDtBQUNBLE1BQU1HLE9BQU8sSUFBSUMsS0FBSixFQUFiO0FBQ0EsTUFBSUcsa0JBQWtCLENBQXRCOztBQUVBLFNBQU9KLEtBQUtGLE1BQUwsR0FBY04sR0FBckIsRUFBMEI7QUFDeEIsUUFBSVksa0JBQWtCLENBQWxCLEdBQXNCVixNQUFNSSxNQUFoQyxFQUF3QztBQUN0Q00sd0JBQWtCLENBQWxCO0FBQ0Q7QUFDREosU0FBS00sSUFBTCxDQUFVWixNQUFNVSxlQUFOLENBQVY7QUFDQUEsdUJBQW1CLENBQW5CO0FBQ0Q7QUFDRCxTQUFPSixLQUFLSCxJQUFMLENBQVUsTUFBVixDQUFQLENBakRnQyxDQWlETjtBQUMzQixDQWxERCIsImZpbGUiOiJwYWNrYWdlcy91dGlscy9sb3JlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChudW0gPSAxLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGxvcmVtID0gW1xuICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRpYW0gbm9udW1teSBuaWJoIGV1aXNtb2QgdGluY2lkdW50IHV0IGxhb3JlZXQgZG9sb3JlIG1hZ25hIGFsaXF1YW0gZXJhdCB2b2x1dHBhdC4gVXQgd2lzaSBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaSB0YXRpb24gdWxsYW1jb3JwZXIgc3VzY2lwaXQgbG9ib3J0aXMgbmlzbCB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGVtIHZlbCBldW0gaXJpdXJlIGRvbG9yIGluIGhlbmRyZXJpdCBpbiB2dWxwdXRhdGUgdmVsaXQgZXNzZSBtb2xlc3RpZSBjb25zZXF1YXQsIHZlbCBpbGx1bSBkb2xvcmUgZXUgZmV1Z2lhdCBudWxsYSBmYWNpbGlzaXMgYXQgdmVybyBlcm9zIGV0IGFjY3Vtc2FuIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltIHF1aSBibGFuZGl0IHByYWVzZW50IGx1cHRhdHVtIHp6cmlsIGRlbGVuaXQgYXVndWUgZHVpcyBkb2xvcmUgdGUgZmV1Z2FpdCBudWxsYSBmYWNpbGlzaS4nLFxuICBdO1xuXG4gIGlmICh0eXBlID09PSAnY2hhcmFjdGVycycgfHwgdHlwZSA9PT0gJ2NoYXJzJykge1xuICAgIGxldCBvdXRwdXRTdHJpbmcgPSAnJztcbiAgICBjb25zdCB0ZW1wU3RyaW5nID0gbG9yZW0uam9pbignXFxuXFxuJyk7XG5cbiAgICB3aGlsZSAob3V0cHV0U3RyaW5nLmxlbmd0aCA8IG51bSkge1xuICAgICAgb3V0cHV0U3RyaW5nICs9IHRlbXBTdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dFN0cmluZy5zdWJzdHJpbmcoMCwgbnVtKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnd29yZHMnKSB7XG4gICAgY29uc3QgbGlzdCA9IG5ldyBBcnJheSgpO1xuICAgIGxldCB3b3JkTGlzdCA9IG5ldyBBcnJheSgpO1xuICAgIHdvcmRMaXN0ID0gbG9yZW1bMF0uc3BsaXQoJyAnKTtcbiAgICBsZXQgaVBhcmFncmFwaENvdW50ID0gMDtcbiAgICBsZXQgaVdvcmRDb3VudCA9IDA7XG5cbiAgICB3aGlsZSAobGlzdC5sZW5ndGggPCBudW0pIHtcbiAgICAgIGlmIChpV29yZENvdW50ID4gd29yZExpc3QubGVuZ3RoKSB7XG4gICAgICAgIGlXb3JkQ291bnQgPSAwO1xuICAgICAgICBpUGFyYWdyYXBoQ291bnQgKz0gMTtcbiAgICAgICAgaWYgKGlQYXJhZ3JhcGhDb3VudCArIDEgPiBsb3JlbS5sZW5ndGgpIHtcbiAgICAgICAgICBpUGFyYWdyYXBoQ291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHdvcmRMaXN0ID0gbG9yZW1baVBhcmFncmFwaENvdW50XS5zcGxpdCgnICcpO1xuICAgICAgICB3b3JkTGlzdFswXSA9IGBcXG5cXG4ke3dvcmRMaXN0WzBdfWA7XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2god29yZExpc3RbaVdvcmRDb3VudF0pO1xuICAgICAgaVdvcmRDb3VudCsrO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0LmpvaW4oJyAnKTsgLy8gY2hhbmdlZFxuICB9XG5cbiAgLy8gcGFyYWdyYXBoc1xuICBjb25zdCBsaXN0ID0gbmV3IEFycmF5KCk7XG4gIGxldCBpUGFyYWdyYXBoQ291bnQgPSAwO1xuXG4gIHdoaWxlIChsaXN0Lmxlbmd0aCA8IG51bSkge1xuICAgIGlmIChpUGFyYWdyYXBoQ291bnQgKyAxID4gbG9yZW0ubGVuZ3RoKSB7XG4gICAgICBpUGFyYWdyYXBoQ291bnQgPSAwO1xuICAgIH1cbiAgICBsaXN0LnB1c2gobG9yZW1baVBhcmFncmFwaENvdW50XSk7XG4gICAgaVBhcmFncmFwaENvdW50ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGxpc3Quam9pbignXFxuXFxuJyk7IC8vIGNoYW5nZWRcbn07XG4iXX0=
