var primeiroNome = "Reginaldo";
var ultimoNome =  "Assunção";

var nome_usuario = "Nome do usuário: " + primeiroNome + " " + ultimoNome;
console.log(nome_usuario)

var nome_Character = "TrainConductor";
var character = "Character: " + nome_Character;
console.log(character);

document.getElementById("nome_usuario").innerHTML = nome_usuario;
document.getElementById("character").innerHTML = character;