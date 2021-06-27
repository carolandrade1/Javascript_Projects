// set initial count
let count = 0

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Selecte all buttons and for each, look over those buttons
// than for each button, add an event listener, as clicking
// I'm using the event object (e) and getting the current target
// and class list.
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        // acessar a classe dos botões
        const styles = e.currentTarget.classList;
        // see what's happening: 
        // console.log(styles)


        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0) {
            value.style.color = "red";
        }
        if(count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    })
});