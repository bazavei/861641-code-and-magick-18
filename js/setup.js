'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var coatColor = setup.querySelector('.wizard-coat');
  var hiddenCoatInput = setup.querySelector('input[name="coat-color"]');
  var eyesColor = setup.querySelector('.wizard-eyes');
  var hiddenEyesInput = setup.querySelector('input[name="eyes-color"]');
  var fireballColor = setup.querySelector('.setup-fireball-wrap');
  var hiddenFireballInput = setup.querySelector('input[name="fireball-color"]');
  var wizards = window.data.getWizardsArr;


  var changeCoatColor = function () {
    coatColor.style.fill = window.util.getRandomValue(window.data.COATS_COLOR);
    hiddenCoatInput.value = coatColor.style.fill;
  };

  var changeEyesColor = function () {
    eyesColor.style.fill = window.util.getRandomValue(window.data.EYAES_COLOR);
    hiddenEyesInput.value = eyesColor.style.fill;
  };

  coatColor.addEventListener('click', function () {
    changeCoatColor();
  });

  eyesColor.addEventListener('click', function () {
    changeEyesColor();
  });

  var changeFireballColor = function () {
    fireballColor.style.background = window.util.getRandomValue(window.data.FIREBALL_COLOR);
    hiddenFireballInput.value = fireballColor.style.background;
  };

  fireballColor.addEventListener('click', function () {
    changeFireballColor();
  });


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
  renderWizards(wizards);

  setup.querySelector('.setup-similar').classList.remove('hidden');
})();


