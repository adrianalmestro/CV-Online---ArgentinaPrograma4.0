let titulo_nombre = document.getElementById ('titulo_nombre');

let ocultar_redes = document.getElementById ('ocultar_redes');

titulo_nombre.addEventListener ('click', toggleText);

function toggleText (){
    ocultar_redes.classList.toggle('mostrar_redesSociales');


    if (ocultar_redes.classList.contains('mostrar_redesSociales')){
        titulo_nombre.innerHTML = '<i id="icon_Aptitudesnombre" class="fa-solid fa-hashtag"></i>ADRIAN ALMESTRO';
        
    }else{
        titulo_nombre.innerHTML = 'ADRIAN ALMESTRO';;
    }


}