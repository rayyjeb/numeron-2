// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1box = document.getElementById("number1");
let number2box = document.getElementById("number2");
let number1=Math.round(Math.random()*100);
let number2=Math.round(Math.random()*100);

number1box.textContent = number1;
number2box.textContent = number2;
// Iteration 3: Creating variables required to make the game functional

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("mul");
let divide = document.getElementById("divide");
let modulus = document.getElementById("modulus")
let score = 0;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3box=document.getElementById("number3");
let number3;
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
     number1=Math.round(Math.random()*100);
     number2=Math.round(Math.random()*100);
let operator = Math.ceil(Math.random()*5);
switch (operator){
    case 1: number3 = number1 + number2;break;
    case 2: number3 = number1 - number2;break;
    case 3: number3 = number1 * number2;break;
    case 4: number3 = Math.floor(number1 / number2);break;
    case 5: number3 = number1 % number2;break;
}
number1box.textContent = number1;
number2box.textContent= number2;
number3box.textContent = number3;
}
randomise();

// Iteration 6: Making the Operators (button) functional
plus.addEventListener('click', ()=>{
if(number1+number2==number3){
    score++;
    console.log(score);
    localStorage.setItem("score", score);
    randomise();
    clearInterval(interval);
    startInterval();
}else{
    gameOver();
}
})

minus.addEventListener('click', () => {
    if(number1-number2==number3){
        score++;
        randomise();
        localStorage.setItem("score", score);
        console.log(score);
        clearInterval(interval);
        startInterval();
    }else{
        gameOver();
    }
})

multiply.addEventListener('click',() =>{
    if(number1*number2==number3){
        score++;
        randomise();
        localStorage.setItem("score", score);
        console.log(score);
        clearInterval(interval);
        startInterval();
    }else{
        gameOver();
    }
})

divide.addEventListener('click', ()=>{
    if(Math.floor(number1/number2)==number3){
        score++;
        randomise();
        localStorage.setItem("score", score);
        console.log(score);
        clearInterval(interval);
        startInterval();
    }else{
        gameOver();
    }
})

modulus.addEventListener('click', ()=>{
    if (number1%number2==number3){
        score++;
        randomise();
        localStorage.setItem("score", score);
        console.log(score);
        clearInterval(interval);
        startInterval();

    }else{
        gameOver();
    }
})
function gameOver(){
    window.location.href="./gameover.html"
};
// Iteration 7: Making Timer functional
let timer_box= document.getElementById("timer");
let interval;
function startInterval(){
    time=20;
    interval=setInterval(()=>{
        timer_box.textContent=time;
        time--;
        if(time==0){
            location.href="./gameover.html";
            clearInterval(interval);
        }
    },1000)
}
startInterval()
localStorage.setItem("score",score)