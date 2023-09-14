// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];

// const celsiusToFahrenheit = (temp) => {
//     let temperaturesFahrenheit = [];
//     for (let i = 0; i < temperaturesCelsius.length; i += 1) {
//         const calc = (temperaturesCelsius[i] * 9 / 5) + 32;
//         temperaturesFahrenheit.push(calc);
//     }
//     return temperaturesFahrenheit;
// };

// refatorando

// const celsiusToFahrenheit = (temps) => {
//     return temps.map(temp => {
//         return (temp * 9 / 5) + 32;
//     })
// };

// refatorando ainda mais

const celsiusToFahrenheit = (temps) => temps.map(temp => (temp * 9 / 5) + 32);

//console.log(celsiusToFahrenheit(temperaturesCelsius));

const numbers = [4, 9, -1, 16, -5, 25];

// const raizQuadrada = (arr) => {
//     let result = [];
//     for (let index = 0; index < arr.length; index += 1) {
//         if (numbers[index] > 0) result.push(arr[index] ** 2);
//         else result.push(NaN);
//     }
//     return result;
// };


// refatorando

const raizQuadrada = (arrNumbers) => arrNumbers.map(number =>  number > 0 ? number ** 2 : NaN);

//console.log(raizQuadrada(numbers));

 const obj = {
    books: [
      {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
          name: 'George R. R. Martin',
          birthYear: 1948,
        },
        releaseYear: 1991,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
          name: 'J. R. R. Tolkien',
          birthYear: 1892,
        },
        releaseYear: 1954,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
          name: 'Isaac Asimov',
          birthYear: 1920,
        },
        releaseYear: 1951,
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
          name: 'Frank Herbert',
          birthYear: 1920,
        },
        releaseYear: 1965,
      },
      {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
          name: 'Stephen King',
          birthYear: 1947,
        },
        releaseYear: 1986,
      },
    ]
 };
 
const formatedBookNames = (arrsObjs) => arrsObjs.map(arrObj => {
        return {name: arrObj.name, genre: arrObj.genre, author: arrObj.author.name}
    });

//console.log(formatedBookNames(obj.books));

const nameAndAge = (arrObjs) => arrObjs.map(arr => {
        return {author: arr.author.name, age: arr.releaseYear}
    })

console.log(nameAndAge(obj.books));
