let boton__ocultarAptitudes = document.getElementById ('boton__ocultarAptitudes');

let ocultarAptitudes = document.getElementById ('ocultarAptitudes');

boton__ocultarAptitudes.addEventListener ('click', toggleText);

function toggleText (){
    ocultarAptitudes.classList.toggle('mostrar');



if (ocultarAptitudes.classList.contains('mostrar')){

    boton__ocultarAptitudes.innerHTML = 'OCULTAR APTITUDES';

} else {
    boton__ocultarAptitudes.innerHTML = 'MOSTRAR APTITUDES';
}

}