"use strict";
let garageContents = [];

function carMaker(name, licencePlate, wheelNumber, numberOfFaults){
    let it = {};
    it.name = name;
    it.licencePlate = licencePlate;
    it.wheelNumber = wheelNumber;
    it.numberOfFaults = numberOfFaults;
    return it;
}

function addCarToGarage(name, licencePlate, wheelNumber, numberOfFaults, garage){
    let car = carMaker(name, licencePlate, wheelNumber, numberOfFaults);
    garage.push(car);
}

function changeLicencePlateText(element, list){
    let elem = document.getElementById(list);
    let carInfo = elem.options[elem.selectedIndex].value;
    let carInfoArray = spiltString(carInfo);
    document.getElementById(element).innerHTML = carInfoArray[1];
}

function spiltString(inputString){
    return inputString.split("-");
}

function outputContents(){
    let outputStr = ""
    garageContents.forEach(function(element) {
        outputStr += element.name + " " + element.licencePlate + "<br>";
    }, this);
    outputToPage(outputStr);
}

function checkInCar(){
    let input = document.getElementById("carSelectIn").value;
    let inputArray = spiltString(input);
    addCarToGarage(inputArray[0], inputArray[1], inputArray[2], inputArray[3], garageContents);

    //remove the added car from the drop down list.
}

function checkOutCar(){
    let input = document.getElementById("carSelectOut").value;
    let inputArray = spiltString(input);
    garageContents.forEach(function(element) {
        if (element.licencePlate === inputArray[1]){
            let index = garageContents.indexOf(element);
            garageContents.splice(index, 1);
        }
    }, this);
}

function outputToPage(outputStr){
    let divOut = document.getElementById("output");
    let para;
    if (para = document.getElementById("outputText")){
        divOut.removeChild(para);
    }
    para = document.createElement("p");
    para.setAttribute("id", "outputText");
    para.innerHTML = outputStr;
    divOut.appendChild(para);
}