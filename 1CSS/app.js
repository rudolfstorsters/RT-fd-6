

function countFunction() {
    var count = document.getElementById("myList").childElementCount;
    document.getElementById("demo").innerHTML = count;
    if (count == 9) {

        var count = document.createElement("P");
        count.innerHTML = "list is full";
        document.getElementById("demo").appendChild(count);
        document.getElementById("addButton").style.display = "none"
    } else {
        document.getElementById("addButton").style.display = "block"
    }
}

function addFunction() {
    var newNode = document.createElement("li");
    var textnode = document.createTextNode("New Child");
    newNode.appendChild(textnode);
    document.getElementById("myList").appendChild(newNode);
}

function removeFunction() {
    var list = document.getElementById("myList");
    if (list.hasChildNodes()) {
        list.removeChild(list.childNodes[0]);
    }
}