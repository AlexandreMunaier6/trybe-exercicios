const ligaDesliga = (result) => result ? `Desliga` : `Liga`;
//console.log(ligaDesliga(true));
//console.log(ligaDesliga(false));


const circleArea = (raio) => {
  let pi = 3.14;
  return pi * (raio ** 2);
};
//console.log(circleArea(50));

const biggestWord = (str) => {
  let phrase = str.split(' ');
  let longestWord = phrase[0];
  for (let index of phrase) {
    if (index.length > longestWord.length) {
      longestWord = index;
    } 
  }
  return longestWord;
}; 
console.log(biggestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

