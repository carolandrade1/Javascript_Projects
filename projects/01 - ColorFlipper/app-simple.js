const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
// Selecionar botão
const btn = document.getElementById("btn");
// Selecionar classe color
const color = document.querySelector(".color");

// Toda vez que clicar no botão, a função irá mudar a cor
btn.addEventListener("click", function(){
    // Gerar número aleatorio entre 0 - 3, color[x]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

// Math.random = gera números aleatorios entre 0 e 1;
// Math.floor = aredonda os números gerados;
// colors.length = limita o resultado < 4;
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}