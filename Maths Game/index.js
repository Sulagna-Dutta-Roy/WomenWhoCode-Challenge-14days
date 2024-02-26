var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;

// if we are click start/reset
document.getElementById("startreset").onclick = function() {
    //if we are playing
    if(playing == true) {
        location.reload();
    }else
        //if we are not playing //set score to 0
        { 
            //change mode to playing
            playing=true;
            
            //set score to 0
            score=0;
            document.getElementById("scorevalue").innerHTML=score;
            
            //show countdown box
            show("timeremaining");
            timeremaining=60;

document.getElementById("timeremainingvalue").innerHTML=timeremaining;
            
            //hide game over box
            hide("gameOver");
            
            //change button to reset

            document.getElementById("startreset").innerHTML = "Reset Game";
        
            //start countdown
            startCountdown();
            
            //generate a new question Q&A
            
            generateQA();
    }
}


for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick=function() {
    //check we are playing
    if(playing==true) {
        if(this.innerHTML == correctAnswer){
            score++;
            
document.getElementById("scorevalue").innerHTML = score;
            
            //hide wrong box and show correct box
            
            hide("wrong");
            show("correct");
            setTimeout(function() {
                hide("correct");
            },1000);
            //generate new Q & A
            generateQA();
            //generate new Q & A
    }
        else {
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function() {
                hide("wrong");
        }, 1000);
       }
    }
}
}
//functions



//start counter
function startCountdown(){
    action = setInterval(function() {
        timeremaining -= 1;
        

document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        if(timeremaining == 0) {
            stoptCountdown();
            show("gameover");
        document.getElementById("gameover").innerHTML="<p>Game Over</p><p>Your Score is"+score+"</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;

document.getElementById("startreset").innerHTML="Start Game";
        }
    }, 1000);
}

//stop counter
function stopCountdown () {
    clearInterval(action);
}

//hide an element
function hide(Id) {
    document.getElementById(Id).style.display="none";
}
function show(Id) {
    document.getElementById(Id).style.display="block";
}
function generateQA() {
    var x=1 + Math.round(10*Math.random());
    var y=1 + Math.round(10*Math.random());
    correctAnswer=x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    var correctPosition=1+Math.round(3*Math.random());
    

document.getElementById("box"+correctPosition).innerHTML=correctAnswer;   
    
    
   var answers=[correctAnswer]; 
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
               wrongAnswer=(1+Math.round(10*Math.random()))*(1+Math.round(10*Math.random()));
            }
            while(answers.indexOf(wrongAnswer)>-1)

               document.getElementById("box"+i).innerHTML=wrongAnswer;
               answers.push(wrongAnswer);
        }
    }    
}