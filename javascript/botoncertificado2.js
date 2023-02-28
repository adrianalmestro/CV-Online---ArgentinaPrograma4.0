let ocultarCertificado2btn = document.getElementById ('ocultarCertificado2btn');
let ocultarCertificado2 = document.getElementById ('ocultarCertificado2');

ocultarCertificado2btn.addEventListener ('click', toggleText);

function toggleText(){
    ocultarCertificado2.classList.toggle('mostrar_certificado_2');

if (ocultarCertificado2.classList.contains('mostrar_certificado_2')){
    ocultarCertificado2btn.innerHTML ='Certificado';
}else{
    ocultarCertificado2btn.innerHTML ='Ocultar certificado';
}
 }
