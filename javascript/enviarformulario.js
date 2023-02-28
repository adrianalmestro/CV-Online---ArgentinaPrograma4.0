const $form = document.querySelector ('#form')
const $buttonMailto = document.querySelector ('#trucazo')

$form.addEventListener ('submit', handleSubmit)

function handleSubmit (event){
event.preventDefault()

const form = new FormData (this)
console.log(form.get('name'))
$buttonMailto.setAttribute('href', `mailto:adrian.almestro@outlook.com?subjet= 
. Nombre y Apellido ${form.get('nombreyapellido')}
. E-mail: ${form.get('mail')} 
&body=
Mensaje: ${form.get('mensaje')}
. Numero de celular: ${form.get('celular')}
. Nombre y Apellido: ${form.get('nombreyapellido')}
. E- mail: ${form.get('mail')}`)
$buttonMailto.click()
}