const form = document.getElementsByTagName("form")[0];
const inputs = form.querySelectorAll('input:not([type="submit"])');

const isRequired = (elem) => elem.hasAttribute('required');
const isEmpty = (elem) => elem.validity.valueMissing;


//inputs.forEach(e => console.log(isRequired(e)));

const constraints = {
  empty: [
    "Este campo é obrigatório"
  ],
  doc: [
    /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/,
    "000.000.000-00 ou 00.000.000/0000-00"
  ],
  name: [
    /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
    'Nome Completo'
  ],
  email: [
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'Favor digitar um e-mail válido'
  ],
  phone: [
    /^\(\d{2}\)\d{4,5}\.\d{4}/,
    '(00)0000.0000 ou (00)00000.0000'
  ],
  cel: [
    /^\(\d{2}\)\d{5}\.\d{4}/,
    '(00)00000.0000'
  ],
  cep: [
    /^\d{5}\-\d{3}/,
    '00000-000'
  ],
  cepError: [
    'Digite um CEP válido'
  ],
  endereco: [
    /^(?!\s*$).+/,
    'Endereço inválido'
  ],
  numero: [
    /^(?!\s*$).+/,
    'S/N ou digite o numero do endereço'
  ]
}
const getErrorField = (target) => target.nextElementSibling.nextElementSibling;
function showError(target, errorMsg, field){
  target.classList.add('invalid');
  field.textContent = errorMsg;
 }

 function cleanField (target, errorField) {
    errorField.textContent = "";
    target.classList.remove('invalid'); 
}

function verifyField(e) {
  const target = e.target;
  const field = target.getAttribute('name');
  const errorField = getErrorField(target);
  
  if(isRequired(target)){
    const regEx = new RegExp(constraints[field][0]);
    const errorMsg = constraints[field][1];
    if(regEx.test(target.value)) {
      target.setCustomValidity("");
      target.classList.remove('invalid'); 
    } else {
      target.setCustomValidity(errorMsg);
      showError(target, errorMsg, errorField);
    }
  }
  
  // is an empty field?
  if (isRequired(target) && isEmpty(target)) showError(target,constraints.empty[0], errorField);
  

  if (!isRequired(target) && target.value == "") cleanField(target, errorField);
}

inputs.forEach(e => e.addEventListener("focusout", verifyField));
inputs.forEach(e => e.addEventListener("input",verifyField));

// ADDRESS AUTOCOMPLIETE

(function(){

	const cep = document.querySelector("input[name=cep]");
  const errorField = getErrorField(cep);
  const endereco = document.querySelector('input[name=endereco]');
  const bairro = document.querySelector('input[name=bairro]');
  const cidade = document.querySelector('input[name=cidade]');
  const estado = document.querySelector('input[name=estado]');

  cep.addEventListener('blur', (e) => {
  		const value = cep.value.replace(/[^0-9]+/, '');
      const url = `https://viacep.com.br/ws/${value}/json/`;
      
      fetch(url)
      .then( response => response.json())
      .then( json => {
          if( json.logradouro === undefined ) {
            showError(cep, constraints.cepError[0], errorField)
          } else {
          	endereco.value = json.logradouro;
            bairro.value = json.bairro;
            cidade.value = json.localidade;
            estado.value = json.uf;
          }
      
      });  
  });
})();