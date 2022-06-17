const criarTarefa = document.getElementById('criar-tarefa');
const ol = document.querySelector('ol');
const texto = document.getElementById('texto-tarefa');

function criaLi() {
  const newLi = document.createElement('li');
  ol.appendChild(newLi);
  newLi.innerText = texto.value;
  texto.value = '';
}

criarTarefa.addEventListener('click', criaLi);
