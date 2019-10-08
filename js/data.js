'use strict';

(function () {
  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'];

  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COATS_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYAES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var COUNT = 4;

  var getWizardsArr = function (count) {
    var data = [];
    for (var i = 0; i < count; i++) {
      data.push(
          {
            name: window.util.getRandomValue(NAMES) + ' ' + window.util.getRandomValue(SURNAMES),
            coatColor: window.util.getRandomValue(COATS_COLOR),
            eyesColor: window.util.getRandomValue(EYAES_COLOR)
          }
      );
    }
    return data;
  };

  window.data = {
    getWizardsArr: getWizardsArr(COUNT),
    COATS_COLOR: COATS_COLOR,
    EYAES_COLOR: EYAES_COLOR,
    FIREBALL_COLOR: FIREBALL_COLOR
  };
})();
