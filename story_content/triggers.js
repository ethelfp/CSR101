function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HcyTAclM7s":
        Script1();
        break;
      case "6KXoNknr1rE":
        Script2();
        break;
      case "5uArgZjfjMS":
        Script3();
        break;
      case "5nCcd0bgCcc":
        Script4();
        break;
      case "5ybBKiODAuf":
        Script5();
        break;
      case "5mMGk9exrfG":
        Script6();
        break;
      case "6fFeoVi1wsm":
        Script7();
        break;
      case "6HVuXSmTeP0":
        Script8();
        break;
      case "6dkNIfv1peS":
        Script9();
        break;
      case "5iCBsw8I0lW":
        Script10();
        break;
      case "6ZvIyMfG0Oz":
        Script11();
        break;
      case "5sHrJHtWjAR":
        Script12();
        break;
      case "6kSGDG5kxCZ":
        Script13();
        break;
      case "5tEJlsfL9aF":
        Script14();
        break;
      case "6BRWL4GlsxA":
        Script15();
        break;
      case "5UvFXEMT88L":
        Script16();
        break;
      case "6JEbHmEcYQl":
        Script17();
        break;
      case "6ZcitfcwCQn":
        Script18();
        break;
      case "6f33oDw3H6L":
        Script19();
        break;
      case "6cC8QpH8nXM":
        Script20();
        break;
      case "6COFyQsrewH":
        Script21();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6L1zkt5GqHb');
const duration = 1000;
const easing = 'ease-out';
const id = '60lqjGgu5xn';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('66y32z0ExMo');
const duration = 2000;
const easing = 'ease-out';
const id = '6frHGoNOAjc';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('66y32z0ExMo');
const duration = 2000;
const easing = 'ease-out';
const id = '6frHGoNOAjc_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5hjAFdQlTIF');
const duration = 750;
const easing = 'ease-out';
const id = '69CEJUxfQN2';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('66RxkDG2yeY');
const duration = 1000;
const easing = 'ease-out';
const id = '5cX16k45uMj';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5jrXL2dYQBz');
const duration = 750;
const easing = 'ease-out';
const id = '6ZKA78kw0H7';
const teeterAmount = 10;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5tPMgEY2hEj');
const duration = 750;
const easing = 'ease-out';
const id = '6Iwm4R1pNVV';
const shakeAmount = 2;
const delay = 1000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6YzsdByINxR');
const duration = 750;
const easing = 'ease-out';
const id = '67k7hLbkMsS';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('5hjPbaYFkYZ');
const duration = 750;
const easing = 'ease-out';
const id = '66dXNT1TOnf';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('5d6B7UcWP6Y');
const duration = 1000;
const easing = 'ease-out';
const id = '63osoqKGbp3';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 2500;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5oWXufKkgdz');
const duration = 1000;
const easing = 'ease-out';
const id = '5p25ABNwX4j';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('5mpF9dc5ayW');
const duration = 1000;
const easing = 'ease-out';
const id = '6I3NQ2AuApV';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('6EVcmflc7N0');
const duration = 750;
const easing = 'ease-out';
const id = '5em98mHlWEI';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 2000;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  player.once(() => {
const target = object('675Zm0rJy7K');
const duration = 750;
const easing = 'ease-out';
const id = '5em98mHlWEI';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6lc0xkWHfXV');
const duration = 1000;
const easing = 'ease-out';
const id = '6DQlVix9u5Y';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  player.once(() => {
const target = object('6io0gVRITUx');
const duration = 750;
const easing = 'ease-out';
const id = '5em98mHlWEI';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('6Bh8ebyzov5');
const duration = 2000;
const easing = 'ease-out';
const id = '5rH9rle5Tpk';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('5YuX6SEzGDA');
const duration = 750;
const easing = 'ease-out';
const id = '5em98mHlWEI';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 3000;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  player.once(() => {
const target = object('5qgAeABjPOw');
const duration = 750;
const easing = 'ease-out';
const id = '5em98mHlWEI';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 7500;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script20 = function()
{
  player.once(() => {
const target = object('5qgAeABjPOw');
const duration = 750;
const easing = 'ease-out';
const id = '5em98mHlWEI';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  player.once(() => {
const target = object('6C76MqVkLPK');
const duration = 1250;
const easing = 'ease-out';
const id = '68SNagwspJ3';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
