 function noIdeaModeFunction() {
     var element = document.body;
     element.classList.toggle("noIdeaMode")
 }

 function closeFunction() {
     document.getElementById('close').style.display = 'none';
 }



 document.addEventListener('DOMContentLoaded', function() {

     // When the event DOMContentLoaded occurs, it is safe to access the DOM

     // When the user scrolls the page, execute myFunction 
     window.addEventListener('scroll', myFunctionForSticky);


     // Get the navbar
     var navbar = document.getElementById("navbar");
     console.log("debug 1");

     // Get the offset position of the navbar
     var sticky = navbar.offsetTop;
     console.log("debug 2");

     // Add the sticky class to the navbar when you reach its scroll position. 
     // Remove "sticky" when you leave the scroll position

     function myFunctionForSticky() {
         if (window.pageYOffset >= sticky) {
             console.log("window.pageYOffset >= sticky");

         } else {
             console.log("Not window.pageYOffset >= sticky");

         }
         if (window.pageYOffset >= sticky) {
             navbar.classList.add("sticky");

         } else {
             navbar.classList.remove("sticky");

         }
     }


 })