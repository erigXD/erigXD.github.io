var menu = document.getElementById('menu')
var menubox = document.getElementById('menubox')
var menulink1 = document.getElementById('menuLink1')
var menulink2 = document.getElementById('menuLink2')
var menulink3 = document.getElementById('menuLink3')
var menulink4 = document.getElementById('menuLink4')
var menulink5 = document.getElementById('menuLink5')
var menu1 = document.getElementById('menu1')

menu.onclick = function rolldown() {
    menubox.style.animationName = 'menubox';
    menubox.style.opacity = 1;
    menu.style.animationName = '';
    menu1.style.animationName = 'menu';
    menu.style.pointerEvents = 'none'
    menu1.style.pointerEvents = 'all'
    setTimeout(() => { menubox.style.opacity = 1; }, 700);
    menulink1.style.pointerEvents = 'all';
    menulink2.style.pointerEvents = 'all';
    menulink3.style.pointerEvents = 'all';
    menulink4.style.pointerEvents = 'all';
    menulink5.style.pointerEvents = 'all';
    menu.style.opacity = 0;
    menu1.style.opacity = 1;
}

menu1.onclick = function rollup() {
    menubox.style.animationName = 'menuboxend';
    menu1.style.animationName = '';
    menu.style.animationName = 'menuend';
    menu.style.pointerEvents = 'all'
    menu1.style.pointerEvents = 'none'
    setTimeout(() => { menubox.style.opacity = 0; }, 700);
    menulink1.style.pointerEvents = 'none';
    menulink2.style.pointerEvents = 'none';
    menulink3.style.pointerEvents = 'none';
    menulink4.style.pointerEvents = 'none';
    menulink5.style.pointerEvents = 'none';
    menu1.style.opacity = 0;
    menu.style.opacity = 1;
}