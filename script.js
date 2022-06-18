const criarTarefa = document.getElementById('criar-tarefa');
const ol = document.querySelector('ol');
const texto = document.getElementById('texto-tarefa');
const btnLimpaLista = document.getElementById('apaga-tudo');

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
  const elementCompleted = document.querySelector('.completed');
  if (!elementCompleted) {
    event.target.classList.add('completed');
  } else {
    elementCompleted.classList.remove('completed');
  }
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

// Requisito 10 https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
function clearList() {
  const getLi = document.getElementsByTagName('li');
  for (let index = getLi.length - 1; index >= 0; index -= 1) {
    getLi[index].remove();
  }
}

btnLimpaLista.addEventListener('click', clearList);
