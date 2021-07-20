function validadorData(data) {
  let verificador = Date.parse(data);

  if (isNaN(verificador)) {
    return false;
  }

  return true;
}

export default validadorData;
