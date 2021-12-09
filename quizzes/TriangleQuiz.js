var quizForm = document.querySelector(".quiz-form");
var checkBtn = document.querySelector("#submit-btn");
var retryBtn = document.querySelector("#retry-btn")
var output = document.querySelector(".message");
var quizAnswers = ["Equilateral", "a + b + c", "Right", "No", "45°"];

function compareAnswers(quizResults){
    let score = 0, index = 0;
    for (let answer of quizResults ){

        if(quizAnswers.includes(answer)){
            score++;
        }
        index++;
    }

    if(score > 2){
        showMessage(`Your score is: ${score}.`)
    } else {
        showMessage(`Your score is: ${score}.`)
    }
}

function getResult(){
    const quizResults = new FormData(quizForm);
    compareAnswers(quizResults.values())
}

function showMessage(message){
    output.innerText = message;
    checkBtn.style.display = "none";
    retryBtn.style.display = "block"
}

retryBtn.style.display = "none";
checkBtn.addEventListener("click", getResult);