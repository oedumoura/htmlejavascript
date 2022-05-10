function atualizaTabela(clientes){
  for( let i = 1 ; i<clientes.length;i++){
    let peso = clientes[i].querySelector(".info-peso");
    let altura = clientes[i].querySelector(".info-altura");
    let imc = clientes[i].querySelector('.info-imc');
    let answer = "";

    let validaPeso = pesoValido(peso.textContent);
    let validaAltura = alturaValido(altura.textContent);

    if (validaPeso == false){
      answer+="Peso inválido;";
    }
    if (validaAltura == false){
      answer+="Altura inválida;";
    }

    if (validaPeso == false || validaAltura == false){
      imc.textContent = answer;
      clientes[i].classList.add("cliente-invalido");
    }
    else{
      imc.textContent = calculaIMC(peso.textContent,altura.textContent);
      clientes[i].classList.add("cliente-valido");
    }
    answer = "";
  ;}
}

function getSpan(positionSpan){
  let span = document.querySelectorAll("span");
  return span[positionSpan];
}

function extrairCliente(dataDocument){
    let cliente ={
      nome: dataDocument[0].value,
      peso:dataDocument[1].value,
      altura:dataDocument[2].value,
      gordura:dataDocument[3].value,
      imc: calculaIMC(dataDocument[1].value,dataDocument[2].value)
    }
    return cliente;
}

function criarClienteTd(dado,classe){
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function calculaIMC(peso,altura){
  return (peso/((altura)**2)).toFixed(1);
}
