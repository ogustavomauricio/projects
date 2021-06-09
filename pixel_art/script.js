const paletaDeCores = document.querySelectorAll('.color');
const botaoResetBoard = document.querySelector('#clear-board');
const section = document.getElementById('tabela');

// CRIA TABELA
function table(size,celula){
	let tabela = document.createElement('table');
	section.appendChild(tabela);
	tabela.setAttribute("id","pixel-board");

	for(let i = 0; i < size; i +=1){
		let linha = document.createElement('tr');
		tabela.appendChild(linha);

		for(let index = 0; index < celula; index += 1){
			let cell = document.createElement('td');
			linha.appendChild(cell);
			cell.setAttribute('class', 'pixel');
			cell.addEventListener('click',pintaBoard);
			cell.style.backgroundColor = 'white';
			
		}				
	}
}
	table(5,5)

const pixels = document.querySelectorAll('.pixel');

// Inicia com a cor Preta Selecionada
function startBlack(){
	document.querySelector('#black').classList.add("selected");
}
startBlack();

//Reset Class selected
function removeSelected(){
	for (let i = 0; i < paletaDeCores.length; i += 1){
		if (paletaDeCores[i].classList.contains('selected')){
			paletaDeCores[i].classList.remove('selected');
		}
	}
}


// Add Class selected na Cor Escolhida
 	for (let i = 0; i < paletaDeCores.length; i += 1){
 		paletaDeCores[i].addEventListener('click', selecionaCor);			
 	}
 	function selecionaCor(event){
 	removeSelected();
 	event.target.classList.add('selected');
 	}	

//Grava o Background da Cor
function gravaCor(){
for (let index = 0; index < paletaDeCores.length; index += 1){
	if (paletaDeCores[index].classList.contains('selected')){
	let element = paletaDeCores[index];
	let background = window.getComputedStyle(element, null).getPropertyValue("background-color");
	return background;
		}
	}
}

function pintaBoard(event){
	event.target.style.backgroundColor = gravaCor();
};
// Com ajuda do Luiz Furtado

// Crie um botão

function resetBoard() {
	const pixels = document.querySelectorAll('.pixel');
	  for (let i = 0; i < pixels.length; i += 1) {
		pixels[i].style.backgroundColor = 'white';		
		console.log(pixels[i]);
	}
  }

botaoResetBoard.addEventListener('click', resetBoard);


const input = document.querySelector('#board-size');

// Definitamanho da tabela pelo usuário.
let buttonGerarNewTable = document.querySelector('#generate-board'); // BOTÃO VQV

function newTable(){
	if(input.value == ""){
		alert('Board Inválido');
	} else if((input.value >= 5) && (input.value<= 50)){
	section.innerHTML = null;	
	table(input.value, input.value)
	}		
};
buttonGerarNewTable.addEventListener('click', newTable);

// Feito Com a ajuda do Gabriel Gaspar.