'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');
  var coatColor = setup.querySelector('.wizard-coat');
  var hiddenCoatInput = setup.querySelector('input[name="coat-color"]');
  var eyesColor = setup.querySelector('.wizard-eyes');
  var hiddenEyesInput = setup.querySelector('input[name="eyes-color"]');
  var fireballColor = setup.querySelector('.setup-fireball-wrap');
  var hiddenFireballInput = setup.querySelector('input[name="fireball-color"]');
  // var wizards = window.data.getWizardsArr;


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

  // var renderWizards = function (array) {
  //   var fragment = document.createDocumentFragment();
  //   for (var j = 0; j < array.length; j++) {
  //     fragment.appendChild(renderWizard(array[j]));
  //   }
  //   similarListElement.appendChild(fragment);
  // };
  // renderWizards(wizards);

  // setup.querySelector('.setup-similar').classList.remove('hidden');

  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var onSave = function () {
    setup.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSave, onError);
    evt.preventDefault();
  });

  window.backend.load(onLoad, onError);
})();


