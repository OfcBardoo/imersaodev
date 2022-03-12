function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);
  //console.log(valorDolar);

  var valorReal = valorDolar * 5;
  //console.log(valorReal);

  var elmentoFinal = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$ " + valorReal;
  elmentoFinal.innerHTML = valorConvertido;
}
