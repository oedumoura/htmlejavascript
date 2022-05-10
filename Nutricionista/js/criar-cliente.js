let button = document.querySelector("#adicionar-paciente");

button.addEventListener("click",function(){
  event.preventDefault();

  let dataDocument = document.querySelector("form");

  let cliente = extrairCliente(dataDocument);

  if (verificaCliente(cliente) === true){

    let clienteTr = document.createElement("tr");
    clienteTr.classList.add("paciente");

    clienteTr.appendChild(criarClienteTd(cliente.nome,"info-nome"));
    clienteTr.appendChild(criarClienteTd(cliente.peso,"info-peso"));
    clienteTr.appendChild(criarClienteTd(cliente.altura,"info-altura"));
    clienteTr.appendChild(criarClienteTd(cliente.gordura,"info-gordura"));
    clienteTr.appendChild(criarClienteTd(cliente.imc,"info-imc"));

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(clienteTr);

    let clientes = document.querySelectorAll("#tabela-pacientes, .paciente");
    atualizaTabela(clientes);


    dataDocument.reset();

  }
});
