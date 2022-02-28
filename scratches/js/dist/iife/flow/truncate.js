(function () {
  'use strict';

  function truncate(str, maxLen) {
    var cont = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '…';
    return str.length > maxLen ? str.slice(0, maxLen) + cont : str;
  }

  truncate('hello', 3);

}());
