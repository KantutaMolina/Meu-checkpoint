/*- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/

function pipoca(tempo) {
  if (tempo >= 10 * 2 && tempo < 10 * 3) {
    console.log("a comida queimou");
  } else if (tempo < 10) {
    console.log("tempo insuficiente");
  } else if (tempo >= 10 * 3) {
    console.log("KABUMM");
  } else console.log("Prato pronto, bom apetite!");
}

function macarrao(tempo) {
  if (tempo >= 8 * 2 && tempo < 8 * 3) {
    console.log("a comida queimou");
  } else if (tempo < 8) {
    console.log("tempo insuficiente");
  } else if (tempo >= 8 * 3) {
    console.log("KABUMM");
  } else console.log("Prato pronto, bom apetite!");
}

function carne(tempo) {
  if (tempo >= 15 * 2 && tempo < 15 * 3) {
    console.log("a comida queimou");
  } else if (tempo < 15) {
    console.log("tempo insuficiente");
  } else if (tempo >= 15 * 3) {
    console.log("KABUMM");
  } else console.log("Prato pronto, bom apetite!");
}

function feijao(tempo) {
  if (tempo >= 12 * 2 && tempo < 12 * 3) {
    console.log("a comida queimou");
  } else if (tempo < 12) {
    console.log("tempo insuficiente");
  } else if (tempo >= 12 * 3) {
    console.log("KABUMM");
  } else console.log("Prato pronto, bom apetite!");
}

function brigadeiro(tempo) {
  if (tempo >= 8 * 2 && tempo < 8 * 3) {
    console.log("a comida queimou");
  } else if (tempo < 8) {
    console.log("tempo insuficiente");
  } else if (tempo >= 8 * 3) {
    console.log("KABUMM");
  } else console.log("Prato pronto, bom apetite!");
}

var alimento = "pizza";
//Switch Case
switch(alimento){
  case "pipoca":
      console.log("você escolheu pipoca")
    pipoca(40);
    break;
  case "macarrao":
    console.log("você escolheu macarrão")
    macarrao(20);
    break;
  case "carne":
    console.log("você escolheu carne")
    carne(50);
    break;
  case "feijao":
    console.log("você escolheu feijão")
    feijao(12);
    break;
  case "brigadeiro":
    console.log("você escolheu brigadeiro")
    brigadeiro(33);
    break;

    default:
        console.log("Prato inexistente")
}