const criarTarefa = document.getElementById('criar-tarefa');
const ol = document.querySelector('ol');
const texto = document.getElementById('texto-tarefa');
const btnLimpaLista = document.getElementById('apaga-tudo');
const btnLimpaCompletos = document.getElementById('remover-finalizados');
const btnSalvaLista = document.getElementById('salvar-tarefas');
const brtRemoveSelecionado = document.getElementById('remover-selecionado');
const btnUp = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');

// Requisito 12
function saveLocalStorage() {
  localStorage.setItem('lista', ol.innerHTML);
}

btnSalvaLista.addEventListener('click', saveLocalStorage);

function loadLocalStorage() {
  const load = localStorage.getItem('lista');
  if (load) {
    ol.innerHTML = load;
  }
}

window.onload = loadLocalStorage;

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

// Requisito 13
// MOVER ITEM P/ CIMA E P/ BAIXO
function up() {
  const getLi = document.getElementsByTagName('li');
  for (let i = 0; i < getLi.length; i += 1) {
    if (getLi[i].classList.contains('gray')
    && getLi[i] !== getLi[0]) {
      const item = getLi[i];
      const previous = getLi[i - 1];
      const newItem = item;
      ol.removeChild(item);
      ol.insertBefore(newItem, previous);
    }
  }
}

btnUp.addEventListener('click', up);

function down() {
  const getLi = document.getElementsByTagName('li');
  for (let i = getLi.length - 1; i >= 0; i -= 1) {
    if (getLi[i].classList.contains('gray')
    && getLi[i] !== getLi[getLi.length - 1]) {
      const next = getLi[i + 2];
      const item = getLi[i];
      const newItem = item;
      ol.removeChild(item);
      ol.insertBefore(newItem, next);
    }
  }
}

btnDown.addEventListener('click', down);

// Requisito 14
function removeGray() {
  const elementGray = document.querySelector('.gray');
  if (elementGray) {
    elementGray.remove();
  }
}

brtRemoveSelecionado.addEventListener('click', removeGray);
