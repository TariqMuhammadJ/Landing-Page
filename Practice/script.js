if (!sessionStorage.getItem("popup")){
        document.getElementById("popup").style.display = "flex";
        sessionStorage.setItem("popup", "true"); // set the popup to shown in the browser's session storage//
    }

    else {
        document.getElementById("popup").style.display = "none";
}


var animation = lottie.loadAnimation({
    container: document.getElementById("lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/rocket.json" // Your Lottie JSON file //<div id="lottie"></div>//
});


document.getElementById("exit").addEventListener("click", function(){ // if we add the e in the function it refers back to the event target//
    document.getElementById("popup").style.display = "none";
    sessionStorage.setItem("popup", "true");
    

});

//let count = 0; // ✅ Initialize count globally
//let mobileDiv = document.querySelector(".dropdown");
document.querySelector(".nav i").addEventListener("click", function(){
    let mobileMenu = document.querySelector(".mobile");
    let dropdowns = document.querySelectorAll(".dropdown");
    
    mobileMenu.style.display = (mobileMenu.style.display === 'block') ? "none" : "block";
    if (mobileMenu.style.display === 'none'){
        dropdowns.forEach(function (dropdown){
            dropdown.style.display = "none"; // Reset all dropdowns to hidden
            
        });
        
    }

    // this is the simpler way of doing it without the conunter and the reset,
    // The lambda expression basically checks if the style is block, if it is then it sets it to one, otherwise it sets it to block on each click
    
    //let height = mobileMenu.scrollHeight;
        /*if (count === 0){
            mobileMenu.style.display = "block"; 
            //mobileMenu.style.opacity = 1;
            count = 1;
        }
        else{
            //mobileDiv.style.display = "none";
            //mobileMenu.style.display = "none";

            //mobileMenu.style.opacity = 0;  // fade out animation
            //count = 0;
        }
        /* we can simplify this using a lambda expression as well */

});


document.querySelectorAll(".mobile h4").forEach(h4 => {
    h4.addEventListener("click", function(event) {
        let parent = event.target; // The clicked h4 element
        let childElement = parent.querySelector(".dropdown"); // Finds the direct child with class "dropdown"

        if (childElement) {
            // Toggle display
            childElement.style.display = (childElement.style.display === "block") ? "none" : "block";
        }
    });
});


/* This checks for the next adjacent sibling and not the next direct child
document.querySelectorAll(".mobile h4").forEach(h4 => {
    h4.addEventListener("click", function(event) {
        // Get the next sibling div (the dropdown menu)
        let mobileDiv = event.target.nextElementSibling; 

        // Check if the clicked <h4> has a dropdown sibling
        if (mobileDiv && mobileDiv.classList.contains("dropdown")) {
            // Toggle display
            mobileDiv.style.display = (mobileDiv.style.display === "block") ? "none" : "block";
        }
    });
});

*/
/*let secondCount = 0;

document.querySelector(".mobile h4").addEventListener("click", function(){
    if (secondCount === 0 && event.target.c){
        mobileDiv.style.display = "block";
        secondCount = 1;
    }

    else {
        mobileDiv.style.display = "none";
        secondCount = 0;
    }





}); */


/*let style = document.createElement('style');
    style.type = 'text/css';

    // Define keyframes
    /*let keyframes = `
    @keyframes movedown {
        from {
            height: 0;
        }
        to {
            height: ${height}px;
        }
    }
    `;

    // Append keyframes to the style element
    style.appendChild(document.createTextNode(keyframes)); */

    // Append the style element to the head
   // document.head.appendChild(style);


/*document.getElementById("lottie-btn").addEventListener("click", function(){
    document.getElementById("lottie").style.display = "none";

}); */









/* Notes - the forEach() method in java is a way of looping through elements in a stylsheet or other variables */