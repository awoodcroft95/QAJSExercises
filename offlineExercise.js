"use strict";
function doubleChar(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        let currentChar = input.substring(i, i + 1);
        output += (currentChar + currentChar)
    }
    console.log(output);
}

function getSandwich(sandwichInput) {
    let bread = "bread";
    let possibleFilling;
    let breadLocation1 = -1;
    let breadLocation2 = -1;
    let hasFirstSlice = false;
    let output = "";
    for (let i = 0; i < sandwichInput.length; i++) {
        let breadCheck = sandwichInput.substring(i, i + 5);
        if (breadCheck === bread && !hasFirstSlice) {
            breadLocation1 = i;
            hasFirstSlice = true;
        } else if (breadCheck === bread && hasFirstSlice) {
            breadLocation2 = i;
        }
    }
    if (breadLocation1 !== -1 && breadLocation2 !== -1) {
        possibleFilling = breadLocation1 + 5;
        output = sandwichInput.substring(possibleFilling, breadLocation2);
        console.log(output);
    } else if (breadLocation1 === -1 || breadLocation2 === -1) {
        console.log(output);
    }
}

function evenlySpaced(a, b, c) {
    let orderedArray = [];
    if (a > b && b > c) {
        orderedArray.push(a);
        orderedArray.push(b);
        orderedArray.push(c);
    } else if (a > b && c > b) {
        orderedArray.push(a);
        orderedArray.push(c);
        orderedArray.push(b);
    } else if (b > a && a > c) {
        orderedArray.push(b);
        orderedArray.push(a);
        orderedArray.push(c);
    } else if (b > c && c > a){
        orderedArray.push(b);
        orderedArray.push(c);
        orderedArray.push(a);
    } else if (c > a && a > b){
        orderedArray.push(c);
        orderedArray.push(a);
        orderedArray.push(b);
    } else if (c > b && b > a){
        orderedArray.push(c);
        orderedArray.push(b);
        orderedArray.push(a);
    }

    if (orderedArray[0] - orderedArray[1] === orderedArray[1] - orderedArray[2]){
        return true;
    }else{
        return false;
    }
}

function nTwice(string, int){
    let firstPart = string.substring(0, int);
    let secondPart = string.substring(string.length-int, string.length+1);
    console.log(firstPart+secondPart);
}

function endsLy(string){
    let ly = "ly";
    let lastTwoChars = string.substring(string.length-2, string.length+1);
    if (lastTwoChars === ly){
        return true;
    } else {
        return false;
    }
}

function stringClean(string){
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string.substring(i,i+1) === string.substring(i+1, i+2)){
            newString = newString + string.substring(0, i);
        }
    }
    return newString;
}
//doesn't work
