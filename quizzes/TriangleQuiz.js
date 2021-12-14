let quizform = document.querySelector(".quiz-form")
let btn = document.querySelector("#submit-btn")
var retryBtn = document.querySelector("#retry-btn")

let output = document.querySelector(".message")
let correctAnswers = ["Equilateral", "a + b + c", "Right", "No", "45°"];


function calculateScore() {
    let index = 0;
    let score = 0;
    let check = 0;
    const formResults = new FormData(quizform);

    for (let value of formResults.values()) {
        
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
        check = check + 1;
    }
    if (check === 5) {
        showMessage( "Your score in Quiz is => " + score);
    } else {
        showMessage('Please enter all Values');
    }
}

function showMessage(message){
    output.innerText = message;
    btn.style.display = "none";
    retryBtn.style.display = "block"
}

retryBtn.style.display = "none";
btn.addEventListener('click', calculateScore)

