const criarTarefa = document.getElementById('criar-tarefa');
const ol = document.querySelector('ol');
const texto = document.getElementById('texto-tarefa');
const btnLimpaLista = document.getElementById('apaga-tudo');
const btnLimpaCompletos = document.getElementById('remover-finalizados');

// Requisito 7 e 8
function alteraGray(event) {
  const elementGray = document.querySelector('.gray');
  if (!elementGray) {
    event.target.classList.add('gray');
  } else {
    elementGray.classList.remove('gray');
    event.target.classList.add('gray');
  }
}

// Requisito 9
function itemRiscado(event) {
  event.target.classList.toggle('completed');
}

function criaLi() {
  const newLi = document.createElement('li');
  ol.appendChild(newLi);
  newLi.innerText = texto.value;
  texto.value = '';
  newLi.addEventListener('click', alteraGray);
  newLi.addEventListener('dblclick', itemRiscado);
}

criarTarefa.addEventListener('click', criaLi);

// Requisito 10
function clearList() {
  const getLi = document.getElementsByTagName('li');
  for (let index = getLi.length - 1; index >= 0; index -= 1) {
    getLi[index].remove();
  }
}

btnLimpaLista.addEventListener('click', clearList);

// Requisito 11
function removeCompleted() {
  const elementCompleted = document.querySelectorAll('.completed');
  for (let index = elementCompleted.length - 1; index >= 0; index -= 1) {
    if (elementCompleted[index]) {
      elementCompleted[index].remove();
    }
  }
}

btnLimpaCompletos.addEventListener('click', removeCompleted);
