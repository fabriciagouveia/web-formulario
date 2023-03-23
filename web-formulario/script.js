function verificarDDD() {
  // Obtém o valor do input do usuário
  let ddd = document.getElementById("DDD").value;

  // Lista de DDDs válidos no Brasil
  let dddsValidos = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "87", "88"];

  // Verifica se o DDD digitado é válido
  if (dddsValidos.includes(ddd)) {
    document.getElementById("resultado").innerHTML = "DDDD válido!";
  } else {
    document.getElementById("resultado").innerHTML = "DDDD inválido!";
  }
}

function enviar() {
  alert('Enviado!')
}
