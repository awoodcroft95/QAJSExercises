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
    garageContents.forEach(function(element) {
        console.log(element.name + " " + element.licencePlate);
    }, this);
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
            index = garageContents.indexOf(element);
            array.splice(index, 1);
        }
    }, this);
}