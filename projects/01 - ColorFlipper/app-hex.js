// #f15025
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Selecionar botão
const btn = document.getElementById("btn");
// Selecionar classe color
const color = document.querySelector(".color");

// Toda vez que clicar no botão, a função irá mudar a cor
btn.addEventListener("click", function(){
    // Variavel com #
    let hexColor = "#";
    // Loop, para selecionar os 6 digitos necessarios para gerar uma cor.
    for( let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});
// até então o loop está gerando digitos iguais

// Math.random = gera números aleatorios entre 0 e 1;
// Math.floor = aredonda os números gerados;
// hex.length = limita o resultado < 16;
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// console.log(Math.random() * hex.length);