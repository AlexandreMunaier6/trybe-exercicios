let clientesTrybeBank = ['Ada', 'John', 'Gus', 'Eu'];

function adicionaCliente(cliente){
    if(typeof cliente === 'string'){
        clientesTrybeBank.push(cliente);
        return 'Cliente ' + cliente + ' adicionado';
    } else {
        return 'O valor passado deve ser de string';
    }
}
//console.log(adicionaCliente(true));
//console.log(adicionaCliente('Joaquim'));
//console.log(clientesTrybeBank);
function encontraCliente(cliente){
    if(typeof cliente === 'string'){
      let clienteEncontrado = false;
        for(let index = 0; index < clientesTrybeBank.length; index += 1){
            if(cliente === clientesTrybeBank[index]){
                clienteEncontrado = true;
                return 'Cliente está na base de dados'
            } else {
                return 'Cliente não encontrado na base de dados'
            }
        }
    } else {
        return 'Erro ao procurar cliente'
    }


}

function removeCliente(cliente) {
  if (typeof cliente === 'string') {

    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (encontraCliente) {
        clientesTrybeBank.splice(index, 1);
        return 'Cliente excluída(o) com sucesso.';
      }
    }
}
}

console.log(adicionaCliente('tESTE'));
console.log(encontraCliente('Eu'));
console.log(removeCliente('Gus'));
console.log(clientesTrybeBank);
