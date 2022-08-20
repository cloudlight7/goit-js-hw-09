const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyBgr = document.querySelector('body');

let changeColor;

btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', oBtnStop);

function onBtnStart() {
    changeColor = setInterval(() => { bodyBgr.style.backgroundColor = getRandomHexColor() }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
}

function oBtnStop() {
    clearInterval(changeColor);
    btnStart.disabled = false;
    btnStop.disabled = true;
}
