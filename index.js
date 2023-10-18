/* ---------- Menu para Celular------------*/

const btnMobile = document.getElementById("mobile__btn");
const nav = document.getElementById("mobile__menu");
const menuItems = document.querySelectorAll('.mobile__item--link');

function toggleMenu() {
    nav.classList.toggle("active");

    const active = nav.classList.contains("active");
    btnMobile.setAttribute("aria-expanded", active);

    if (active) {
        btnMobile.setAttribute("aria-label", "Fechar Menu");
    } else {
        btnMobile.setAttribute("aria-label", "Abrir Menu");
    }
}

/* ---------- Menu Fecha quando dar Scrool "Rolagem para Baixo"-----------*/
function closeMenuOnScroll() {
    closeMenu();
}
document.addEventListener('scroll', closeMenuOnScroll);


/* ---------- Menu Fecha quando clicado em alguma das opções-----------*/

function closeMenu() {
    nav.classList.remove("active");
    btnMobile.setAttribute("aria-expanded", false);
    btnMobile.setAttribute("aria-label", "Abrir Menu");
}

btnMobile.addEventListener('click', toggleMenu);

menuItems.forEach(function (element) {
    element.addEventListener('click', closeMenu);
});



/* ---------- Efeito de Scrool ------------*/

const debounce = function(func, wait, immediate) {

    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            
            if (!immediate) func.apply(context, args);
        }
        
        const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);              
            if (callNow) func.apply(context, args);
    }
}


const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeSection () {
    const windowTop = window.pageYOffset + ((window.innerHeight *3) / 4); 
      target.forEach (function (elemento) {
        
        if ((windowTop) > elemento.offsetTop) {
            elemento.classList.add(animationClass);
        }
        else {
            elemento.classList.remove(animationClass);
        }
    })
}

animeSection();
if(target.length) {
    window.addEventListener("scroll" , debounce(function() {
        animeSection();
    }, 100))
}


/* ---------- Efeito de Scrool FIXE BTN ------------*/
window.addEventListener("scroll", function() {

    const scrollTop = window.pageYOffset;
    const redes = this.document.querySelector(".headerBtn__redes")
    const button = document.querySelector(".headerBtn");
    const menu = document.querySelector(".menu")

    if (scrollTop > button.offsetTop) {

        button.style.position = "fixed";
        button.style.top = "0";
        button.style.right = "0"; 
        button.style.background = "#0c232c";
        button.style.padding = "1rem 0";
        redes.style.opacity = "1";
        menu.style.position = "fixed";

        menu.style.background = "#0c232c";

    } else{
        button.style.position = "relativer";
        button.style.top = "auto";
        button.style.background = "none";
        button.style.padding = "none"
        redes.style.opacity = "0";
        menu.style.background = "#0c232c";
        menu.style.position = "relative";

    }
});


