const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Enter a new name');
    para.textContent = `Player 1: ${name}`;

}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', createParagraph);
 }
 



