'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var START_NAME_X = 110;
var START_NAME_Y = 260;
var START_BAR_X = 110;
var START_BAR_Y = 90;
var START_TIME_X = 110;
var START_TIME_Y = 80;
var BARS_GAP = 90;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (array) {
  var maxElement = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + 10, CLOUD_Y + 30);
  ctx.fillText('Список результатов:', CLOUD_X + 10, CLOUD_Y + 50);

  var maxTime = getMaxElement(times);

  var getRandomSaturate = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  for (var i = 0; i < times.length; i++) {
    var NEW_START = BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], START_NAME_X, START_NAME_Y);
    START_NAME_X += BARS_GAP;
    ctx.fillText(Math.round(times[i]), START_TIME_X, START_TIME_Y + NEW_START);
    START_TIME_X += BARS_GAP;
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 100%, ' + getRandomSaturate(0, 100) + '%)';
    }
    ctx.fillRect(START_BAR_X, START_BAR_Y + NEW_START, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    START_BAR_X += BARS_GAP;
  }
};
