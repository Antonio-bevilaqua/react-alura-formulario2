const estados = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

async function getLocalizacaoCep(cep, setar, validar) {
  cep = cep.replace(/\D/g, "");
  let url = `http://viacep.com.br/ws/${cep}/json/`;

  const dados = await fetch(url);

  const json = await dados.json();

  setDados(json, setar, validar);
}

function setDados(dadosjson, setar, validar) {
  let dadosSet = {};
  let temDados = false;

  if (
    typeof dadosjson.logradouro !== "undefined" &&
    dadosjson.logradouro !== ""
  ) {
    dadosSet["endereco"] = dadosjson.logradouro;
    temDados = true;
  }
  if (
    typeof dadosjson.localidade !== "undefined" &&
    dadosjson.localidade !== ""
  ) {
    dadosSet["cidade"] = dadosjson.localidade;
    temDados = true;
  }
  if (
    typeof dadosjson.uf !== "undefined" &&
    typeof estados[dadosjson.uf] !== "undefined"
  ) {
    dadosSet["estado"] = estados[dadosjson.uf];
    temDados = true;
  }

  if (temDados) {
    setar(dadosSet);
    validar(dadosSet);
  }
}

export default getLocalizacaoCep;
