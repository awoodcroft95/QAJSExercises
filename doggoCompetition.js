function place() {
    let num = document.getElementById("inputBox1").value;
    let outputStr = output(num)

    let divList = document.getElementById("output");
    let list;
    if (list = document.getElementById("list")) {
        divList.removeChild(list);
    }
    list = document.createElement("p");
    list.setAttribute("id", "list");
    list.innerHTML = outputStr;

    divList.appendChild(list);
}

function output(_num) {
    let outputStr = "";
    for (let i = 1; i <= 100; i++) {
        if (i == _num) {
            continue;
        }
        
        if (i === 11 || i === 12 || i === 13) {
            outputStr += i + "th, ";
        }
        else if (i % 10 === 1) {
            outputStr += i + "st, ";
        }
        else if (i % 10 === 2) {
            outputStr += i + "nd, ";
        }
        else if (i % 10 === 3) {
            outputStr += i + "rd, ";
        }
        else {
            outputStr += i + "th, ";
        }
    }
    return outputStr;
}