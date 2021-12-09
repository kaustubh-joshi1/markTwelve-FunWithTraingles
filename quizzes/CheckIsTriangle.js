var angles = document.querySelectorAll(".angle");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector(".output");

function checkAngles(){
    var sum = 0;
    for(angle of angles){
        if(angle.value > 0 && angle.value < 180){
            sum += Number(angle.value);
        } else {
            showMessage("Value of angle must be greater than 0 deg and less than 180 deg!")
            return;
        }
    }
    
    if(sum === 180){
        showMessage("Yippee!! These angles will make a triangle!")
    } else {
        showMessage("Sorry! These angles do not make a triangle!")
    }
}

function showMessage(message){
    output.innerText = message;
}

checkBtn.addEventListener("click", checkAngles);