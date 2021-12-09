var baseValue = document.querySelector(".base-input")
var heightValue = document.querySelector(".height-input")
var hypBtn = document.querySelector("#hyp-btn")
var output = document.querySelector(".hyp-output")

function calculateHypotenuse(base, height){
    const getHyp = Math.sqrt( (base*base) + (height*height) );
    return getHyp; 
}

function getValues(){
    const base = baseValue.value;
    const height = heightValue.value;
    if( base && height){
        if(base > 0 && height > 0){
            const hyp = calculateHypotenuse(base, height);
            showMessage(`The hypotenuse of the triangle is ${hyp.toFixed(2)} cm`);
        } else {
            showMessage("Please enter positive numbers!")
        }
    } else {
        showMessage("Please input base and height both!");
    }
}

function showMessage(message){
    output.innerText = message;
}

hypBtn.addEventListener("click", getValues)