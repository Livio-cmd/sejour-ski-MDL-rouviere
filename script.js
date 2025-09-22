const columns = document.querySelectorAll('.column');
const ham = document.querySelector('#hamburger');
var i = 0;

let preventNav = false;


const nav = document.querySelector('nav');

let previousValue = 0;


/* columns.forEach((item) => {
    for (let i = 0; i < 3; i++) {

        var DOM_img = document.createElement("img");
        DOM_img.src = `https://picsum.photos/${Math.floor(Math.random() * 300) + 300}/${Math.floor(Math.random() * 300) + 300}`;

        item.appendChild(DOM_img);

    }
}); */

function closeNav() {
    ham.checked = false;
}

function listenner() {
    if ( window.pageYOffset < previousValue ){
        // nav.style.transform = "translateY(0)";
        nav.style.opacity = "1";
        nav.style.visibility = "visible";
        previousValue = window.pageYOffset;
    }else{
        // nav.style.transform = "translateY(-100%)";
        nav.style.opacity = "0";
        nav.style.visibility = "hidden";
        previousValue = window.pageYOffset;
    }
}

function disableNav() {
    if(window.innerWidth >= 800){
        window.addEventListener('scroll', listenner);
    }else{
        window.removeEventListener('scroll', listenner);
    }
}

disableNav();

window.addEventListener('resize', () => {
    nav.style.opacity = "1";
    nav.style.visibility = "visible";
    disableNav();
})

