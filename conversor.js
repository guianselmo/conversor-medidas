const medidaInicial = prompt("Digite sua medida em metros (m)");
const converter = prompt(
  "Digite para qual unidade de medida você quer converter:\n\n - milimetro (mm)\n - centímetro (cm)\n - decímetro (dm)\n - decâmetro (dam)\n - hectômetro (hm)\n - quilômetro (km)\n"
);

switch (converter) {
  case "mm":
    alert("Resultado: " + medidaInicial + "m = " + medidaInicial * 1000 + "mm");
  case "cm":
    alert("Resultado: " + medidaInicial + "m = " + medidaInicial * 100 + "cm");
  case "dm":
    alert("Resultado: " + medidaInicial + "m = " + medidaInicial * 10 + "dm");
  case "dam":
    alert("Resultado: " + medidaInicial + "m = " + medidaInicial / 10 + "dam");
  case "hm":
    alert("Resultado: " + medidaInicial + "m = " + medidaInicial / 100 + "hm");
  case "km":
    alert("Resultado: " + medidaInicial + "m = " + medidaInicial / 1000 + "km");
  default:
    alert("Opção Inválida");
}
