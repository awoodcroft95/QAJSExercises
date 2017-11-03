"use strict";

function getInput(){
    let inputWord = document.getElementById("inputWord").value.toUpperCase();
    let inputWidth = parseInt(document.getElementById("inputWidth").value);
    let inputLength = parseInt(document.getElementById("inputLength").value);

    let wordAsArray = inputWord.split("");
    //let wordAsArrayReverse = _.reverse(wordAsArray);

    let wordLength = wordAsArray.length;

    let formattedWord = _.join(wordAsArray, " ");
    let formattedWordReverse = _.join(_.reverse(wordAsArray), " ");
    wordAsArray = _.reverse(wordAsArray);
    let lineLength = wordLength + wordLength - 1
    let numberOfSpaces = wordLength - 1;
    let numberOfSpacesMiddle = lineLength - 2;
    let lineArray = [];

    for (let i = 0; i < wordLength; i++){
        if (i === 0){
            lineArray[i] = formattedWord;
        } else if (i > 0 && i < wordLength-1){
            lineArray[i] = wordAsArray[i] + " ".repeat(numberOfSpacesMiddle) + wordAsArray[wordLength-(i+1)];
        } else if (i === wordLength-1){
            lineArray[i] = formattedWordReverse;
        }
    }

    let outputStr = _.join(lineArray, "<br>")
    document.getElementById("output").innerHTML = outputStr;
}