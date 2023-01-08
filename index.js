var btnMobile = document.getElementById ("btn-mobile");

function toggleMenu () {  //toggle

    if (event.type === "touchstart") event.preventDefault();

    var nav = document.getElementById("nav-mobile");
         nav.classList.toggle("active");

    var active = nav.classList.contains ("active");
            event.currentTarget.setAttribute("aria-expanded", active);

    if (active) {

        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    }

    else {

        event.currentTarget.setAttribute("aria-label", "Abrir Menu");

    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);  //responde mais rápido no mobile