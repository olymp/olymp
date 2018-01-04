"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = bindFunctions;
/**
	Bind multiple component methods:

	* @param {this} context
	* @param {Array} functions

	constructor() {
		...
		bindFunctions.call(this, ['handleClick', 'handleOther']);
	}
*/

function bindFunctions(functions) {
	var _this = this;

	functions.forEach(function (f) {
		return _this[f] = _this[f].bind(_this);
	});
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvdXRpbHMvYmluZEZ1bmN0aW9ucy5lczYiXSwibmFtZXMiOlsiYmluZEZ1bmN0aW9ucyIsImZ1bmN0aW9ucyIsImZvckVhY2giLCJmIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxhO0FBWnhCOzs7Ozs7Ozs7Ozs7QUFZZSxTQUFTQSxhQUFULENBQXVCQyxTQUF2QixFQUFrQztBQUFBOztBQUMvQ0EsV0FBVUMsT0FBVixDQUFrQjtBQUFBLFNBQU0sTUFBS0MsQ0FBTCxJQUFVLE1BQUtBLENBQUwsRUFBUUMsSUFBUixPQUFoQjtBQUFBLEVBQWxCO0FBQ0QiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9saWdodGJveC91dGlscy9iaW5kRnVuY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5cdEJpbmQgbXVsdGlwbGUgY29tcG9uZW50IG1ldGhvZHM6XG5cblx0KiBAcGFyYW0ge3RoaXN9IGNvbnRleHRcblx0KiBAcGFyYW0ge0FycmF5fSBmdW5jdGlvbnNcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQuLi5cblx0XHRiaW5kRnVuY3Rpb25zLmNhbGwodGhpcywgWydoYW5kbGVDbGljaycsICdoYW5kbGVPdGhlciddKTtcblx0fVxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZEZ1bmN0aW9ucyhmdW5jdGlvbnMpIHtcbiAgZnVuY3Rpb25zLmZvckVhY2goZiA9PiAodGhpc1tmXSA9IHRoaXNbZl0uYmluZCh0aGlzKSkpO1xufVxuIl19
