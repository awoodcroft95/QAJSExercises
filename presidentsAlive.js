"use strict";
let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/presidents.csv";
let request = new XMLHttpRequest();
let presidentsText;
let deathDateArray = [];
let birthDateArray = [];
let presidentsArray;
let year
request.open("GET", requestURL);
request.responseType = "text";
request.send();
request.onload = function () {
    presidentsText = request.responseText;
    presidentsArray = presidentsText.split("\n");
    presidentsArray.shift();
    for (let i = 0; i < presidentsArray.length; i++) {
        presidentsArray[i] = presidentsArray[i].split(",");
    }
    for (let j = 0; j < presidentsArray.length; j++) {
        deathDateArray.push(parseInt(presidentsArray[j][3].substr(presidentsArray[j][3].length - 4)));
        birthDateArray.push(parseInt(presidentsArray[j][1].substr(presidentsArray[j][1].length - 4)));
    }
    let yearArray = [];


    for (let k = 1732; k <= 2017; k++) {
        let count = 0;
        for (let l = 0; l < deathDateArray.length; l++) {
            if (k >= birthDateArray[l] && isNaN(deathDateArray[l])) {
                count++;
            } else if (k >= birthDateArray[l] && k <= deathDateArray[l]) {
                count++;
            }
        }
        //add object to array
        yearArray.push({ [k]: count })
    }
    let first;
    let second;
    let storedValue = 0;
    for (let m = 0; m < yearArray.length - 1; m++) {
        first = Object.values(yearArray[m])[0];
        if (first > storedValue) {
            storedValue = first;
        }
    }
    year = ""
    for (let n = 0; n < yearArray.length - 1; n++) {
        if (Object.values(yearArray[n])[0] === storedValue) {
            year += Object.keys(yearArray[n])[0] + ", ";
        }
    }
}
function getPresidents(){
    let divOut = document.getElementById("output");
    let para;
    //check if there is previous answer on page
    if (para = document.getElementById("outputText")){
        divOut.removeChild(para);
    }
    para = document.createElement("p");
    para.setAttribute("id", "outputText");
    let input = document.getElementById("userInput").value;
    let output = "";
    for (let l = 0; l < deathDateArray.length; l++) {
        if (input >= birthDateArray[l] && isNaN(deathDateArray[l])) {
            output += presidentsArray[l][0] + "<br>";
        } else if (input >= birthDateArray[l] && input <= deathDateArray[l]) {
            output += presidentsArray[l][0] + "<br>";
        }
    }
    para.innerHTML = output;
    divOut.appendChild(para)
}

function printYears(){
    let divOut = document.getElementById("years");
    let para;
    //check if there is previous answer on page
    if (para = document.getElementById("yearsText")){
        divOut.removeChild(para);
    }
    para = document.createElement("p");
    para.setAttribute("id", "yearsText");
    para.innerHTML = year;
    divOut.appendChild(para)
}