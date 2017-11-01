"use strict";
function checkFactorial() {
    //set up variables
    let num = document.getElementById("textBox1").value;
    let origNum = num;
    let isFactorial = false;
    let counter = 1;
    //check if factorial
    while (num >= 1) {
        if (num === 1) {
            isFactorial = true;
            break;
            //break out of loop if number reaches 1
        }
        counter++;
        //divide by the current counter
        num /= counter;
    }
    outputResult(isFactorial, counter, origNum);
}

function outputResult(_isFactorial, _factValue, _origNum) {
    //create variables
    let divOut = document.getElementById("output");
    let para;
    //check if there is previous answer on page
    if (para = document.getElementById("outputText")){
        divOut.removeChild(para);
    }
    para = document.createElement("p");
    para.setAttribute("id", "outputText");
    //output answer
    if (_isFactorial) {
        para.innerHTML = _origNum + " = " + _factValue + "!";
    }
    else {
        para.innerHTML = _origNum + "  NONE";
    }
    divOut.appendChild(para);
}