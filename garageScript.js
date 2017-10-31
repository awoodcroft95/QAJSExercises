"use strict";

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
    let licencePlate = elem.options[elem.selectedIndex].value;
    document.getElementById(element).innerHTML = licencePlate;
}