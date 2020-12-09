 function noIdeaModeFunction() {
     var element = document.body;
     element.classList.toggle("noIdeaMode")
 }

 var hasSizeChild = false;

 function closeFunction() {
     document.getElementById('close').style.display = 'none';
 }

 document.addEventListener('DOMContentLoaded', function() {

     window.addEventListener('scroll', myFunctionForSticky);


     var navbar = document.getElementById("navbar");

     var sticky = navbar.offsetTop;

     function myFunctionForSticky() {

         if (window.pageYOffset >= sticky) {
             navbar.classList.add("sticky");

         } else {
             navbar.classList.remove("sticky");
         }
     }
 })

function sizeFunction(){
 const all  = document.getElementsByTagName("div")
 

for (var i = 0, max = all.length; i < max; i++) {

    const element = all[i];

    const w = element.offsetWidth;

    const h = element.offsetHeight;

    const newSpan = document.createElement("p");

    newSpan.setAttribute("style", "border: 2px solid orange")

    newSpan.innerHTML =  w + " X "+ h;
    
    all[i].appendChild(newSpan);
    
    
}

const arrLength = all.length;

}

function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.getElementById("result").offsetWidth;
    //var h = document.documentElement.offsetHeight;
    
    
   
    document.getElementById("result").innerHTML = "W = "+ w  ;
}
 
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();




/*

const arrLength = all.length ;


    if (document.getElementsByTagName("div").length == arrLength){

        all[i].removeChild(all[i].newSpan[1]);
       
        
    
    }else {

        console.log("false");
       
    }


if (all[i].getElementsByTagName("div").length == 1){
    hasSizeChild = true; 
}else {
    alert(hasSizeChild);
}




// Calling the function for the first time


// Defining event listener function
function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
    // Display result inside a div element
    document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;
}
 
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();


*/