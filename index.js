const elem2 = document.querySelector('.elem2');
const elem4 = document.querySelector('.elem4');
const faTimes = document.querySelector('.fa-times');
const faBars = document.querySelector('.fa-bars');
const mobMenu = document.querySelector('.mob-menu');
const content = document.querySelector('.content');

//down up arrows
const down2 = document.querySelector('.down2');
const up2 = document.querySelector('.up2');
const down22 = document.querySelector('.down2-2');
const up22 = document.querySelector('.up2-2');
const down24 = document.querySelector('.down2-4');
const up24 = document.querySelector('.up2-4');
const down4 = document.querySelector('.down4');
const up4 = document.querySelector('.up4');

//li from lists
const subMenu21 = document.querySelector('.sub-menu-2-1');
const subMenu22 = document.querySelector('.sub-menu-2-2');
const subSubMenu221 = document.querySelector('.sub-sub-menu-2-2-1');
const subSubMenu222 = document.querySelector('.sub-sub-menu-2-2-2');
const subSubMenu223 = document.querySelector('.sub-sub-menu-2-2-3');
const subMenu23 = document.querySelector('.sub-menu-2-3');
const subMenu24 = document.querySelector('.sub-menu-2-4');
const subSubMenu241 = document.querySelector('.sub-sub-menu-2-4-1');
const subSubMenu242 = document.querySelector('.sub-sub-menu-2-4-2');
const subSubMenu243 = document.querySelector('.sub-sub-menu-2-4-3');
const subSubMenu244 = document.querySelector('.sub-sub-menu-2-4-4');
const subSubMenu245 = document.querySelector('.sub-sub-menu-2-4-5');
const subSubMenu246 = document.querySelector('.sub-sub-menu-2-4-6');
const subSubMenu247 = document.querySelector('.sub-sub-menu-2-4-7');
const subMenu25 = document.querySelector('.sub-menu-2-5');
const subMenu26 = document.querySelector('.sub-menu-2-6');
const subMenu41 = document.querySelector('.sub-menu-4-1');
const subMenu42 = document.querySelector('.sub-menu-4-2');

const subFromElem2 = [subMenu21, subMenu22, subMenu23, subMenu24, subMenu25, subMenu26];
const subFromElem22 = [subSubMenu221, subSubMenu222, subSubMenu223];
const subFromElem24 = [subSubMenu241, subSubMenu242, subSubMenu243, subSubMenu244, subSubMenu245, subSubMenu246, subSubMenu247];
const subFromElem4 = [subMenu41, subMenu42];

elem2.addEventListener('mouseenter', curtainOn);
elem2.addEventListener('mouseleave', curtainOff);
elem4.addEventListener('mouseenter', curtainOn);
elem4.addEventListener('mouseleave', curtainOff);

function curtainOn() {
    content.style.backgroundColor = 'grey';
}
function curtainOff() {
    content.style.backgroundColor = 'white';
}

faBars.onclick = function () {
    faBars.style.display = 'none';
    faTimes.style.display = 'flex';
    mobMenu.style.display = 'block';
    content.style.backgroundColor = 'grey';
};

faTimes.onclick = closeMobMenu;
function closeMobMenu() {
    faBars.style.display = 'flex';
    faTimes.style.display = 'none';
    mobMenu.style.display = 'none';
    content.style.backgroundColor = 'white';
    closeElem2();
    closeElem22();
    closeElem24();
    closeElem4();
};
window.addEventListener('resize', function () {
    if (window.innerWidth > 1040) {
        closeMobMenu();
    }
});

down2.onclick = openElem2;
function openElem2() {
    subFromElem2.map(elem => {
        elem.style.display = 'block';
    });
    down2.style.display = 'none';
    up2.style.display = 'block';
    closeElem4();
    up2.scrollIntoView();
}
down22.onclick = openElem22;
function openElem22() {
    subFromElem22.map(elem => {
        elem.style.display = 'block';
    });
    down22.style.display = 'none';
    up22.style.display = 'block';
    closeElem24();
    up22.scrollIntoView();
}
down24.onclick = openElem24;
function openElem24() {
    subFromElem24.map(elem => {
        elem.style.display = 'block';
    });
    down24.style.display = 'none';
    up24.style.display = 'block';
    closeElem22();
    up24.scrollIntoView();
}
down4.onclick = openElem4;
function openElem4() {
    subFromElem4.map(elem => {
        elem.style.display = 'block';
    });
    down4.style.display = 'none';
    up4.style.display = 'block';
    closeElem2();
    up4.scrollIntoView();
}


up2.onclick = closeElem2;
function closeElem2() {
    subFromElem2.map(elem => {
        elem.style.display = 'none';
    });
    up2.style.display = 'none';
    down2.style.display = 'block';
    faTimes.scrollIntoView();
}
up22.onclick = closeElem22;
function closeElem22() {
    subFromElem22.map(elem => {
        elem.style.display = 'none';
    });
    up22.style.display = 'none';
    down22.style.display = 'block';
    up2.scrollIntoView();
}
up24.onclick = closeElem24;
function closeElem24() {
    subFromElem24.map(elem => {
        elem.style.display = 'none';
    });
    up24.style.display = 'none';
    down24.style.display = 'block';
    up2.scrollIntoView();
}
up4.onclick = closeElem4;
function closeElem4() {
    subFromElem4.map(elem => {
        elem.style.display = 'none';
    });
    up4.style.display = 'none';
    down4.style.display = 'block';
    faTimes.scrollIntoView();
}


