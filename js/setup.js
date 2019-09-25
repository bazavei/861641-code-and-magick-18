'use strict';

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

var COUNT = 4;

var getRandomValue = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var getWizardsArr = function (count) {
  var data = [];
  for (var i = 0; i < count; i++) {
    data.push(
        {
          name: getRandomValue(NAMES) + ' ' + getRandomValue(SURNAMES),
          coatColor: getRandomValue(COATS_COLOR),
          eyesColor: getRandomValue(EYAES_COLOR)
        }
    );
  }
  return data;
};


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (array) {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < array.length; j++) {
    fragment.appendChild(renderWizard(array[j]));
  }
  similarListElement.appendChild(fragment);
};

var wizards = getWizardsArr(COUNT);
renderWizards(wizards);
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
