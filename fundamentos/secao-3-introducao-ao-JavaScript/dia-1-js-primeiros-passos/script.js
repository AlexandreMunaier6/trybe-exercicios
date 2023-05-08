let num1 = 9;
let num2 = 6;
let num3 = 5;
if(num1 > num2 && num1 > num3){
    console.log('O número 1 é o maior numero');
} else if(num1 == num2 && num1 == num3){
    console.log('Os tres números são iguais');
} else if(num2 > num1 && num2 > num3){
    console.log('Numero 2 é o maior número');
} else {
    console.log('O número 3 é o maior número');
}

let valor = 0;
if(valor > 0){
    console.log('Positive');
} else if (valor < 0){
    console.log('Negative');
} else {
    console.log('Zero');
}

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;
let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;
let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;
if(allAnglesArePositives){
  if (sumOfAngles == 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}


let peca = "Peão";
let movimentos;

switch (peca.toLowerCase()) {
  case "peão":
    movimentos = "O peão pode andar uma ou duas casas para frente no seu primeiro movimento e uma casa para frente nos demais movimentos. Também pode capturar outras peças na diagonal.";
    break;
  case "torre":
    movimentos = "A torre pode se mover na vertical ou horizontal, quantas casas quiser, desde que não haja nenhuma peça bloqueando o caminho.";
    break;
  case "cavalo":
    movimentos = "O cavalo se move em um padrão de 'L', pulando duas casas em uma direção e uma casa em outra direção perpendicular.";
    break;
  case "bispo":
    movimentos = "O bispo se move na diagonal, quantas casas quiser, desde que não haja nenhuma peça bloqueando o caminho.";
    break;
  case "rainha":
    movimentos = "A rainha pode se mover na diagonal, na vertical ou na horizontal, quantas casas quiser, desde que não haja nenhuma peça bloqueando o caminho.";
    break;
  case "rei":
    movimentos = "O rei pode se mover para qualquer casa adjacente a ele (diagonal, vertical ou horizontal).";
    break;
  default:
    movimentos = "Peça inválida. Por favor, insira uma peça de xadrez válida.";
}

console.log(movimentos);

let notaEmPorcentagem = 100;
if(notaEmPorcentagem >= 90){
    notaEmPorcentagem = 'A';
} else if(notaEmPorcentagem >= 80 && notaEmPorcentagem < 90){
    notaEmPorcentagem = 'B';
} else if(notaEmPorcentagem >= 70 && notaEmPorcentagem < 80){
    notaEmPorcentagem = 'C';
} else {
    notaEmPorcentagem = 'F';
}
console.log(notaEmPorcentagem);

let numero1 = 1;
let numero2 = 5;
let numero3 = 2;
if(numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0){
    console.log(true);
} else {
    console.log(false);
}

let nume1 = 2;
let nume2 = 2;
let nume3 = 7;
if(nume1 % 2 !== 0 || nume2 % 2 !== 0 || nume3 % 2 !== 0){
    console.log(true);
} else {
    console.log(false);
}


let custoProduto = 50;
let valorDeVenda = 120;
let valorImposto = custoProduto * 0.2;
let lucroComImposto;

if(valorDeVenda > custoProduto + valorImposto){
    lucroComImposto  = (valorDeVenda - custoProduto) - valorImposto;
    console.log('Lucro de ' + lucroComImposto);
} else {
    lucroComImposto = 'Preço do produto errado';
    console.log(lucroComImposto);
}

let salarioBruto = 3500.10;
let salarioLiquido;
if(salarioBruto < 1556.94){
    salarioLiquido = salarioBruto - (salarioBruto * 0.08); 
} else if(salarioBruto >= 1556.94 && salarioBruto < 2594.92){
    salarioLiquido = salarioBruto - (salarioBruto * 0.09);
} else if(salarioBruto >= 2594.92 && salarioBruto < 5189.82){
    salarioLiquido = salarioBruto - (salarioBruto * 0.11);
} else {
    salarioLiquido = salarioBruto - 570.88;
}
console.log(salarioLiquido);



 