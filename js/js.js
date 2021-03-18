document.addEventListener("DOMContentLoaded", function(event) {
        
    /*abrir buscador */
    document.getElementById("searchIcon").addEventListener("click", function(){
        if(document.querySelector(".buscador").style.opacity==="1"){
            document.querySelector(".buscador").style.opacity="0";
        } else {
            document.querySelector(".buscador").style.cssText="opacity: 1; position: fixed; z-index: 999;";
        }  
    });

    /*cerrar buscador */
    document.getElementById("cerrarBtnBuscador").addEventListener("click", function(){
        document.querySelector(".buscador").style.opacity="0"
    });


    /* responsive nav bar */
    
    const burgerMenu = document.getElementsByClassName("navbar__burgernav")[0];// el getelementS trae todos los elementos que tengan esa clase, y le indico que es el 1ero del array (0)
    const navBarLinks = document.getElementsByClassName("navbar__menu")[0];

    burgerMenu.addEventListener("click", function(){
        navBarLinks.classList.toggle("active"); //lo que hago acá es que al hacer toggle agrega la clase. active a la clase .navbar-linkss
    });

}); 










