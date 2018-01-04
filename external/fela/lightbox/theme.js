'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// ==============================
// THEME
// ==============================

var theme = {};

// container
theme.container = {
  background: 'rgba(0, 0, 0, 0.8)',
  gutter: {
    horizontal: 10,
    vertical: 10
  },
  zIndex: 2001
};

// header
theme.header = {
  height: 40
};
theme.close = {
  fill: 'white'
};

// footer
theme.footer = {
  color: 'white',
  count: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: '0.85em'
  },
  height: 40,
  gutter: {
    horizontal: 0,
    vertical: 5
  }
};

// thumbnails
theme.thumbnail = {
  activeBorderColor: 'white',
  size: 50,
  gutter: 2
};

// arrow
theme.arrow = {
  background: 'none',
  fill: 'white',
  height: 120
};

exports.default = theme;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvdGhlbWUuZXM2Il0sIm5hbWVzIjpbInRoZW1lIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZCIsImd1dHRlciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsInpJbmRleCIsImhlYWRlciIsImhlaWdodCIsImNsb3NlIiwiZmlsbCIsImZvb3RlciIsImNvbG9yIiwiY291bnQiLCJmb250U2l6ZSIsInRodW1ibmFpbCIsImFjdGl2ZUJvcmRlckNvbG9yIiwic2l6ZSIsImFycm93Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEVBQWQ7O0FBRUE7QUFDQUEsTUFBTUMsU0FBTixHQUFrQjtBQUNoQkMsY0FBWSxvQkFESTtBQUVoQkMsVUFBUTtBQUNOQyxnQkFBWSxFQUROO0FBRU5DLGNBQVU7QUFGSixHQUZRO0FBTWhCQyxVQUFRO0FBTlEsQ0FBbEI7O0FBU0E7QUFDQU4sTUFBTU8sTUFBTixHQUFlO0FBQ2JDLFVBQVE7QUFESyxDQUFmO0FBR0FSLE1BQU1TLEtBQU4sR0FBYztBQUNaQyxRQUFNO0FBRE0sQ0FBZDs7QUFJQTtBQUNBVixNQUFNVyxNQUFOLEdBQWU7QUFDYkMsU0FBTyxPQURNO0FBRWJDLFNBQU87QUFDTEQsV0FBTywyQkFERjtBQUVMRSxjQUFVO0FBRkwsR0FGTTtBQU1iTixVQUFRLEVBTks7QUFPYkwsVUFBUTtBQUNOQyxnQkFBWSxDQUROO0FBRU5DLGNBQVU7QUFGSjtBQVBLLENBQWY7O0FBYUE7QUFDQUwsTUFBTWUsU0FBTixHQUFrQjtBQUNoQkMscUJBQW1CLE9BREg7QUFFaEJDLFFBQU0sRUFGVTtBQUdoQmQsVUFBUTtBQUhRLENBQWxCOztBQU1BO0FBQ0FILE1BQU1rQixLQUFOLEdBQWM7QUFDWmhCLGNBQVksTUFEQTtBQUVaUSxRQUFNLE9BRk07QUFHWkYsVUFBUTtBQUhJLENBQWQ7O2tCQU1lUixLIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRIRU1FXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgdGhlbWUgPSB7fTtcblxuLy8gY29udGFpbmVyXG50aGVtZS5jb250YWluZXIgPSB7XG4gIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuOCknLFxuICBndXR0ZXI6IHtcbiAgICBob3Jpem9udGFsOiAxMCxcbiAgICB2ZXJ0aWNhbDogMTAsXG4gIH0sXG4gIHpJbmRleDogMjAwMSxcbn07XG5cbi8vIGhlYWRlclxudGhlbWUuaGVhZGVyID0ge1xuICBoZWlnaHQ6IDQwLFxufTtcbnRoZW1lLmNsb3NlID0ge1xuICBmaWxsOiAnd2hpdGUnLFxufTtcblxuLy8gZm9vdGVyXG50aGVtZS5mb290ZXIgPSB7XG4gIGNvbG9yOiAnd2hpdGUnLFxuICBjb3VudDoge1xuICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KScsXG4gICAgZm9udFNpemU6ICcwLjg1ZW0nLFxuICB9LFxuICBoZWlnaHQ6IDQwLFxuICBndXR0ZXI6IHtcbiAgICBob3Jpem9udGFsOiAwLFxuICAgIHZlcnRpY2FsOiA1LFxuICB9LFxufTtcblxuLy8gdGh1bWJuYWlsc1xudGhlbWUudGh1bWJuYWlsID0ge1xuICBhY3RpdmVCb3JkZXJDb2xvcjogJ3doaXRlJyxcbiAgc2l6ZTogNTAsXG4gIGd1dHRlcjogMixcbn07XG5cbi8vIGFycm93XG50aGVtZS5hcnJvdyA9IHtcbiAgYmFja2dyb3VuZDogJ25vbmUnLFxuICBmaWxsOiAnd2hpdGUnLFxuICBoZWlnaHQ6IDEyMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl19
