// ADDRESS AUTOCOMPLIETE
const getErrorField = (target) => target.nextElementSibling.nextElementSibling;

function autoComplete() {
  const cep = document.querySelector("input[name=cep]");
  const errorField = getErrorField(cep);
  const endereco = document.querySelector("input[name=endereco]");
  const bairro = document.querySelector("input[name=bairro]");
  const cidade = document.querySelector("input[name=cidade]");
  const estado = document.querySelector("input[name=estado]");

  cep.addEventListener("blur", (e) => {
    const value = cep.value.replace(/[^0-9]+/, "");
    const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.logradouro === undefined) {
          showError(cep, constraints.cepError[0], errorField);
        } else {
          endereco.value = json.logradouro;
          bairro.value = json.bairro;
          cidade.value = json.localidade;
          estado.value = json.uf;
        }
      });
  });
};

export default autoComplete;
