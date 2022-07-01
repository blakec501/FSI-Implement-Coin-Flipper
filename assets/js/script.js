// TODO: Declare any global variables we need
let flippedHeads = document.querySelector("#heads")
let tails = document.querySelector("#tails")
let message = document.querySelector("#message")
let flip = document.querySelector("#flip")
let clear = document.querySelector("#clear")
let img = document.querySelector("#penny-image")
//let totalFlips = flippedHeads + tails;
let percentHeads = 0;
let percentTails = 0;


flippedHeads = 1
tails = 1

/*document.addEventListener('DOMContentLoaded', function () {
    console.log('Hi')})
*/
    flip.addEventListener("click", function(){
    console.log("you clicked me");
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        //console.log("heads:"  + flippedHeads++);
        document.getElementById("penny-image").src="./assets/images/penny-heads.jpg";
        document.querySelector(".message").textContent = "You Flipped Heads!";
        document.querySelector("#heads").textContent = flippedHeads++;
    }
    else{
        //console.log("tails:"  + tails++);
        document.getElementById("penny-image").src="./assets/images/penny-tails.jpg";
        document.querySelector(".message").textContent = "You Flipped Tails!";
        document.querySelector("#tails").textContent = tails++;
    }
})

clear.addEventListener('click', function () {
    // Reset the heads and tails values to zero
    flippedHeads = 0
    tails = 0

    // Update the message to the user
    document.getElementById('message').textContent = 'Let\'s Get Rolling!'

    // Update the scoreboard
    
    // Calculate total number of rolls
    let total = flippedHeads + tails

    // Create variables to track percent heads and tails
    let percentHeads = 0
    let percentTails = 0

    // Before trying to divide, make sure total is not zero
    if (total > 0) {
        // Calculate percentage of heads and tails
        percentHeads = Math.round((flippedHeads / total) * 100)
        percentTails = Math.round((tails / total) * 100)
    }

    // Update the values in the scoreboard table
    document.getElementById('heads').textContent = flippedHeads
    document.getElementById('heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tails
    document.getElementById('tails-percent').textContent = percentTails + '%'
})



/*if (total > 0 ){
    percentHeads = Math.round((flippedHeads / totalFlips) * 100);
    percentTails = Math.round((tails / totalFlips) * 100);
}
    


clear.addEventListener("click", function(){
    console.log('you cleared the table or were trying to')
})
*/

//document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
  //  console.log('Hi')})


    // TODO: Add event listener and handler for flip and clear buttons



    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
