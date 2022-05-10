function verificaCliente(cliente){
  let errorSpan = document.querySelectorAll(".message-erro");

  if (nomeValido(cliente.nome) === false){
      errorSpan[0].textContent = "Nome inválido";
  }
  if (pesoValido(cliente.peso) === false){
      errorSpan[1].textContent = "Peso inválido";
  }
  if (alturaValido(cliente.altura) === false){
      errorSpan[2].textContent = "Altura inválida";
  }
  if (nomeValido(cliente.gordura) === false){
      errorSpan[3].textContent = "% Gordura inválida";
  }
  if ((nomeValido(cliente.nome) === false)||
        (pesoValido(cliente.peso) === false)||
        (alturaValido(cliente.altura) === false)||
        (gorduraValido(cliente.gordura) === false)){
    return false;
  }
  return true
}


function nomeValido(nome){
  if(nome.length <= 0){
    return false
  }
  getSpan(0).innerHTML = "";
  return true;
}

function pesoValido(peso){
  if (Number(peso)<=0){
    return false;
  }
  getSpan(1).innerHTML = "";
  return true;
}

function alturaValido(altura){
  if (Number(altura)<=0){
    return false;
  }
  getSpan(2).innerHTML = "";
  return true;
}

function gorduraValido(gordura){
  if (Number(gordura) === 0){
    return false;
  }
  getSpan(3).innerHTML = "";
  return true;
}
