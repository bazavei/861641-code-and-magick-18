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

var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var coatColor = setup.querySelector('.wizard-coat');
var hiddenCoatInput = setup.querySelector('input[name="coat-color"]');
var eyesColor = setup.querySelector('.wizard-eyes');
var hiddenEyesInput = setup.querySelector('input[name="eyes-color"]');
var firballColor = setup.querySelector('.setup-fireball-wrap');
var hiddenFireballInput = setup.querySelector('input[name="fireball-color"]');
var usernameInput = setup.querySelector('input[name="username"]');

var getRandomValue = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

usernameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
  setupClose.removeEventListener('click', closePopup);
});

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var changeCoatColor = function () {
  coatColor.style.fill = getRandomValue(COATS_COLOR);
  hiddenCoatInput.value = coatColor.style.fill;
};

var changeEyesColor = function () {
  eyesColor.style.fill = getRandomValue(EYAES_COLOR);
  hiddenEyesInput.value = eyesColor.style.fill;
};

coatColor.addEventListener('click', function () {
  changeCoatColor();
});

eyesColor.addEventListener('click', function () {
  changeEyesColor();
});

var changeFirballColor = function () {
  firballColor.style.background = getRandomValue(FIREBALL_COLOR);
  hiddenFireballInput.value = firballColor.style.background;
};

firballColor.addEventListener('click', function () {
  changeFirballColor();
});

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
// userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
