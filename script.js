let menuVisible = false;
// oculta o muestra el menu hamburguesa
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu cada vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
