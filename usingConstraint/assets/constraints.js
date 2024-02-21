const constraints = {
  empty: ["Este campo é obrigatório"],
  doc: [
    /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/,
    "000.000.000-00 ou 00.000.000/0000-00",
  ],
  name: [
    /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi,
    "Nome Completo",
  ],
  email: [
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "Favor digitar um e-mail válido",
  ],
  phone: [
    /^\(\d{2}\)\d{4,5}\.\d{4}/,
    "(00)0000.0000 ou (00)00000.0000"
  ],
  cel: [
    /^\(\d{2}\)\d{5}\.\d{4}/,
    "(00)00000.0000"
  ],
  cep: [
    /^\d{5}\-\d{3}/,
    "00000-000"
  ],
  cepError: ["Digite um CEP válido"],
  endereco: [
    /^(?!\s*$).+/,
    "Endereço inválido"
  ],
  numero: [
    /^(?!\s*$).+/,
    "S/N ou digite o numero do endereço"
  ],
};

export default constraints
