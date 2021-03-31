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
        navBarLinks.classList.toggle("active"); //lo que hago acá es que al hacer toggle agrega la clase. active a la clase .navbar-linkss https://developer.mozilla.org/es/docs/Web/API/Element/classList 
    });


    /*Leer más en "Sobre Nosotras - Nuestra historia*/
    const leerMasBtn = document.querySelector(".leermas-btn");
    const txtParrafo = document.querySelector(".txt-p");

    if (leerMasBtn != null){
        leerMasBtn.addEventListener("click", function(){
            txtParrafo.classList.toggle("mostrar-mas");
    
            if(leerMasBtn.innerText.toUpperCase()  === "Leer más...".toUpperCase()){//El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada. Esto es una buena práctica para que cada vez que se haga el if la comparación la haga con el string en mayúsculas independientemente de cómo esté escrito el texto original
                leerMasBtn.innerText = "Leer menos...";
            } else {
                leerMasBtn.innerText = "Leer más..."
            }
        });
    }
    

    /*View Mode en la tienda*/
    const gridBtn = document.querySelector(".grid-btn");
    const listBtn = document.querySelector(".list-btn");
    const itemCard = document.querySelector(".item-tienda");

    
    if(listBtn != null){
        listBtn.addEventListener("click", function(){
            document.getElementById("listaTienda").classList.add("list-view");
        });
    }
    
    if(gridBtn != null){
        gridBtn.addEventListener("click", function(){
            document.getElementById("listaTienda").classList.remove("list-view");
        });
    }

    /*Botón top*/

    var topBtn = document.getElementById("topBtn");

    window.onscroll = function(){

        if(window.pageYOffset > 100){
            topBtn.style.display="flex";        
        } 

        if(window.pageYOffset < 100){
            topBtn.style.display="none";  
        }
    };

    topBtn.addEventListener("click", function(){

        window.scrollTo(0, 0, "smooth")        
    });

}); 










