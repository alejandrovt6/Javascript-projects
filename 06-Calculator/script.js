var num1 = "";
var accumulated = 0;
var isSum = false;
var isSub = false;
var isMult = false;
var firstOperation = true;

function addToDisplay(num2) {
    document.getElementById("display").value = num1 + num2;
    num1 = document.getElementById("display").value;
}

function deleteDisplay(value) {
    document.getElementById("display");
    display.value = "";
}

function sum() {
    if (isSub) {
        accumulated = accumulated - parseInt(num1);
        document.getElementById("display").value = accumulated;  
    } else {
        accumulated = accumulated + parseInt(num1);
        document.getElementById("display").value = accumulated;
    }

    num1 = "";
    isSum = true;
    isSub = false;

    firstOperation = false;
}

function sub() {
    if (!firstOperation) {
        if (isSum) {
            accumulated = accumulated + parseInt(num1);
            document.getElementById("display").value = accumulated;
        } else {
            accumulated = accumulated - parseInt(num1);
            document.getElementById("display").value = accumulated;
        }
    } else {
        accumulated = parseInt(num1);
        firstOperation = false;
    }

    num1 = "";
    isSum = false;
    isSub = true;
}

function multiply() {

}

function result() {
    if (isSum) {
        document.getElementById("display").value = accumulated+parseInt(num1);
    } else if (isSub) {
        document.getElementById("display").value = accumulated-parseInt(num1);
    }

    accumulated = parseInt(document.getElementById("display").value);
    num1 = 0;
    
}