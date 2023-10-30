// Iteration 8: Making scoreboard functional
let playagainbtn= document.getElementById("play-again-button");
playagainbtn.addEventListener('click', function(){
    window.location.href="index.html";
})
let value= localStorage.getItem("score");
let scorebox= document.getElementById("score-box");
scorebox.textContent="SCORE: " + value;