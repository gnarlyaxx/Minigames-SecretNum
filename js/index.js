    // angka acak
let secretNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;


function checkGuess(){
    // mengambil dari html
    let inputUser = parseInt(document.getElementById("guess").value);
    let message = document.getElementById("message");

    attempts++;     // menghitung berapa kali user mencoba

    if (isNaN (inputUser) || inputUser < 1 || inputUser > 100) {

        message.value = `please enter a number between 1 - 100!`;
        message.style.color = `red`;
        return;
    }

    if (inputUser === secretNum) {
        message.value = `Congratulations! you guessed correctly in ${attempts} tries.`;
        message.style.color = `green`;
    }
    else if (inputUser > secretNum) {
        message.value = `too big! try again.`;
        message.style.color = `red`;
    }
    else {
        message.value = `too small! try again.`;
        message.style.color = `red`;
    }
}