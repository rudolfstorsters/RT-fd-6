

function callWindow(){
    var skaitlis = parseInt(prompt("Ievadi skaitli", ""));
    console.log(skaitlis);
    // return false;
    validateInput(skaitlis);
    return ''
}


function validateInput(input){
    var text = "";
    if(input > 3){
        alert("eksamens ir nokartots. Jusu vertejums ir" + writeResult(input));
       
        //writeResult(text);
    }else if(input < 4){
        alert("eksamens nav nokartots. Jusu vertejums ir  "+ writeResult(input));
    }
    
    else if(isNaN(input)){
        alert("Ievadiet skaitli!");
        callWindow();
    }else{
        writeResult(text);
    }
}

// Displaying result
function writeResult(number){
    var text = "";

    switch(number){
        case 1:
            text = "Viens";
        break;
        case 2:
            text = "Divi";
        break;
        case 3:
            text = "Trīs";
        break;
        case 4:
            text = "Četri";
        break;
        case 5:
            text = "Pieci";
        break;
        case 6:
            text = "sesi";
        break;
        case 7:
            text = "septini";
        break;
        case 8:
            text = "astoni";
        break;
        case 9:
            text = "devini ";
        break;
        case 10:
            text = "desmit";
        break;
        default:
            text = "Neatbilst vērtība";
    }
    document.write(text);
    return text;
}


callWindow()


