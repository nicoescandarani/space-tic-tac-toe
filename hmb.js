const menu = document.querySelector('.menu');
const hmb = document.querySelector('.hmb-lines');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const link = document.querySelectorAll('.li');
const overlay = document.querySelector('.overlay');
const astOne = document.querySelector('.pos-ast');
const astTwo = document.querySelector('.pos-ast-two');
const ship = document.querySelector('.pos-ship');
const asspOne = document.querySelector('.pos-assp');
const asspTwo = document.querySelector('.pos-assp-two');
const helmet = document.querySelector('.pos-helmet');

// ! Helper Functions.

function hmbLines () {
    one.classList.toggle('one-active');
    two.classList.toggle('two-active');
    three.classList.toggle('three-active');
    hmb.classList.toggle('hmb-lines-active');
}

function menuOpen () {
    menu.classList.toggle('menu-active');
    menu.classList.toggle('menu-delay');
    overlay.classList.toggle('overlay-active');
}

function hmbMenu () {
    hmbLines();
    menuOpen();
}

function lineEnter () {
    one.style.width = "100%";
    two.style.width = "50%";
    three.style.width = "70%";
}

function lineOut () {
    one.style.width = "70%";
    two.style.width = "100%";
    three.style.width = "100%";
}

function GoComeBack () {
    astOne.classList.toggle('ast-one-active');
    astTwo.classList.toggle('ast-two-active');
    ship.classList.toggle('ship-active');
    asspOne.classList.toggle('assp-one-active');
    asspTwo.classList.toggle('assp-two-active');
    helmet.classList.toggle('helmet-active');
    asspOne.classList.toggle('alien-delay');
    asspTwo.classList.toggle('alien-delay');
    helmet.classList.toggle('alien-delay');
}

function addClass () {
    astOne.classList.add('ast-delay');
    astTwo.classList.add('ast-delay');
    ship.classList.add('ast-delay');
}

function astClassToggle () {
    astOne.classList.toggle('ast-delay');
    astTwo.classList.toggle('ast-delay');
    ship.classList.toggle('ast-delay');
}

addClass();

// ! Events.

hmb.addEventListener('click', () => {
    hmbMenu();
});

btn.addEventListener('click', () => {
    changeValue();
});

btn.addEventListener("click", () => {
    GoComeBack();
    astClassToggle();
});