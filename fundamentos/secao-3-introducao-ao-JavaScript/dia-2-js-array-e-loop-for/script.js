let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names){
    //console.log(name);
}


let dado1 = Math.ceil(Math.random() * 6);
//console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  //console.log('resultado dado 2:', dado2);
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let number of numbers){
    //console.log(number);
}

for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
//console.log(sum);

let media = sum / (numbers.length);
//console.log(media);
if(media > 20){
    //console.log('O valor é maior que 20');
} else {
    //console.log('O valor é menor que 20');
}
let maiorValor = 0;
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > maiorValor){
        maiorValor = numbers[index];
    }
}
//console.log(maiorValor);
let valoresImpares = 0;
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        valoresImpares += 1;
    }
}
if(valoresImpares === 0){
    //console.log('Nenhum valor impar encontrado');
} else {
    //console.log(valoresImpares);
}
let menorValor = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}
//console.log(menorValor);
let myArray = [];
for(let index = 1; index <= 25; index += 1){
    myArray.push(index);
}
//console.log(myArray);
let divisor = [];
for(let index = 0; index < myArray.length; index += 1){
    divisor.push(myArray[index] / 2);
}
//console.log(divisor);
let fatorial = 10;
for(let index = 10; index > 0; index -= 1){
    fatorial *= index;
}
//console.log(fatorial);

let word = 'tryber';
let wordReverse = '';
wordReverse = word.split('').reverse('').join('');
//console.log(word);
//console.log(wordReverse);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];
for(let index = 0; index < array.length; index += 1){
    if(array[index].length > biggestWord.length){
        biggestWord = array[index]
        console.log(biggestWord + ' é a maior palavra do array');
    }
}

for(let index = 0; index < array.length; index += 1){
    if(array[index].length < smallestWord.length){
        smallestWord = array[index];
        console.log(smallestWord + ' é a menor palavra do array');
    }
}

let biggestPrimeNumber = 0;

for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
    break; 
  }
}

console.log(biggestPrimeNumber);

