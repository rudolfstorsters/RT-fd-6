
function noIdeaModeFunction() {
    var element = document.body;
    element.classList.toggle("noIdea-mode");
  }

  function countFunction() {
    var count = document.getElementById("myList").childElementCount;
    document.getElementById("demo").innerHTML = count;
    if (count == 5) {
      document.getElementById("addButton").style.display = "none"
    } else {
      document.getElementById("addButton").style.display = "block"
    }
  }

  function addFunction() {
    var newNode = document.createElement("li");
    var textnode = document.createTextNode("Water");
    newNode.appendChild(textnode);
    document.getElementById("myList").appendChild(newNode);
  }

  function removeFunction() {
    var list = document.getElementById("myList");
    if (list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
  }



