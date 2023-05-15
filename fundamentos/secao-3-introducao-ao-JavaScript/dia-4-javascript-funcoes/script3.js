let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const nigthTurn = (obj, key, value) => { obj[key] = value };
nigthTurn(lesson2, 'turno', 'noite');
//console.log(lesson2);

const keysOfObjects = (obj) => { 
    return Object.keys(obj);
};
//console.log(keysOfObjects(lesson3));

const sizeArray = (obj) => { 
   return Object.keys(obj).length;
 };
//console.log(sizeArray(lesson3));

const valuesOfObj = (obj) => {
    return Object.values(obj);
};
//console.log(valuesOfObj(lesson3));

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});
//console.log(allLessons);

const totalStudents = (obj) => {
    let students = 0;
    let keys = Object.keys(obj);
    for (let index in keys) {
        students += obj[keys[index]].numeroEstudantes;
    }
    return students;
};
//console.log(totalStudents(allLessons));

const getValueByNumber = (obj, number) => {
   return Object.values(obj)[number];
};
//console.log(getValueByNumber(lesson1, 1));

const trueFalse = (obj, key, value) => {
    let obj1 = Object.entries(obj);
    let verificacao = false;
    for (let index in obj1) {
        if (obj1[index][0] === key && obj1[index][1] === value) {
            verificacao = true;
        } 
    }
    return verificacao;
};
console.log(trueFalse(lesson1, 'professor', 'Maria Clara'));
