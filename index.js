var btnMobile = document.getElementById ("btn-mobile");

function toggleMenu () {  //toggle

    var nav = document.getElementById("nav-mobile");
    
         nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);