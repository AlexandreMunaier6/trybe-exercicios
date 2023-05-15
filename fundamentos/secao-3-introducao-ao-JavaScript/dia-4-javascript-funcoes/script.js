let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log('Bem vindo(a), ' + info.personagem); 

info.recorrente = 'Sim';
//console.log(info);

for (let infos in info) {
    //console.log(infos);
};

for (let values in info) {
    //console.log(info[values]);
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

//console.log(info.personagem + ' e ' + info2.personagem);
//console.log(info.origem + ' e ' + info2.origem);
//console.log(info.nota + ' e ' + info2.origem);
if (info.recorrente === info2.recorrente) {
    //console.log('Ambos recorrentes');
} else {
    //console.log('Não são ambos recorrentes');
};

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
);
//console.log(leitor.livrosFavoritos);
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

