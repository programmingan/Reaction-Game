const btn = document.getElementById("btn");
const timedisplay = document.getElementById("timedisplay");
const highscoredisplay = document.getElementById("highscore")
document.querySelector(".highscore").style.visibility = "hidden";

btn.addEventListener('mousedown', startTest);

let greenTime = 0;
let time = 0;
let greenID;

let highscore = 10000000000000000000000000000000000000000;

function startTest(){
    greenTime = 0;
document.body.style.backgroundColor = "red";
btn.innerHTML = "Wait for green";

btn.removeEventListener('mousedown', startTest);
btn.addEventListener('mousedown', endTest);

timedisplay.style.visibility = "hidden";

greenID = setTimeout(turnGreen, Math.random()*3000 + 3000);
}

function endTest(){
    timedisplay.style.visibility = "visible";
    document.querySelector(".highscore").style.visibility = "visible";
    if(greenTime == 0){
        timedisplay.innerHTML = "You clicked too soon!";
        clearTimeout(greenID);
    }
    else{
        time = Date.now() - greenTime;
        timedisplay.innerHTML = time.toString() + " milliseconds";
        if(time < highscore){
            highscore = time;
        }
        highscoredisplay.innerHTML = "highscore: " + highscore.toString() + "ms";

    }
    btn.innerHTML = "Restart test";
    btn.removeEventListener('mousedown', endTest);
    btn.addEventListener('mousedown', startTest);
    document.body.style.backgroundColor = "gray";
    
}


function turnGreen(){
    greenTime = Date.now();
    document.body.style.backgroundColor = "green";
    btn.innerHTML = "Click now!";
}