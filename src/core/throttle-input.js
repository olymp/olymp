module.exports = function(limit) {
   if (!limit) limit = 1000;
   var _callback = null;
   return function (callback) {
      _callback = callback;
      setTimeout(function () {
         if (_callback === callback) {
            callback();
         }
      }, limit);
   }
}
