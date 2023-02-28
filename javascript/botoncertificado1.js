let ocultarCertificado1btn = document.getElementById ('ocultarCertificado1btn');
let ocultarCertificado1 = document.getElementById ('ocultarCertificado1');

ocultarCertificado1btn.addEventListener ('click', toggleText);

function toggleText(){
    ocultarCertificado1.classList.toggle('mostrar_certificado_1');

if (ocultarCertificado1.classList.contains('mostrar_certificado_1')){
    ocultarCertificado1btn.innerHTML ='Certificado';
}else{
    ocultarCertificado1btn.innerHTML ='Ocultar certificado';
}
 }
