var baseValue = document.querySelector(".base-input");
var heightValue = document.querySelector(".height-input");
var areaBtn = document.querySelector("#area-btn");
var output = document.querySelector(".area-output");

function calculateArea(base, height){
    const area = 0.5 * base * height;
    return area;
}

function getValues(){
    const base = baseValue.value;
    const height = heightValue.value;
    
    if( base && height){
        if(base > 0 && height > 0){
            const area = calculateArea(base, height);
            showMessage(`Area of the triangle is: ${area.toFixed(2)} cm²`);
        } else {
            showMessage("Please enter positive numbers")
        }
    } else {
        showMessage("Please input base and height both")
    }

}

function showMessage(message){
    output.innerText = message;
}

areaBtn.addEventListener("click", getValues);