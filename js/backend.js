'use strict';

(function () {
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';

  var createXHR = function (data, method, url, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;
    xhr.open(method, url);
    xhr.send(data);
  };

  var load = function (onLoad, onError) {
    createXHR(null, 'GET', URL_LOAD, onLoad, onError);
  };

  var save = function (data, onLoad, onError) {
    createXHR(data, 'POST', URL_SAVE, onLoad, onError);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
