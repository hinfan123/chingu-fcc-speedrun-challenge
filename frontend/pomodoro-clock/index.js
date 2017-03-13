var timer = 25;
var brk = 5;

var timerCount = document.getElementById("timer-count");
var timerCountVal = parseInt(timerCount.textContent); 

var brkCount = document.getElementById("break-count");
var brkCountVal = parseInt(brkCount.textContent); 

var tPlus = document.getElementById("timer-plus"); 
var tMinus = document.getElementById("timer-minus"); 

var bPlus = document.getElementById("break-plus"); 
var bMinus = document.getElementById("break-minus"); 

var countDown = document.getElementById("countdown");
countDown.innerHTML = timerCountVal;

var btime = document.getElementById("breakTime");
btime.innerHTML = brkCountVal;

function Tincrease(val){
    timerCountVal = ++timerCountVal;
    if(timerCountVal >= 25){
        timerCount.innerHTML = timerCountVal;
        countDown.innerHTML = timerCountVal;
    }
}

function Tdecrease(val){
    timerCountVal = --timerCountVal;
    if(timerCountVal>=25){
    timerCount.innerHTML = timerCountVal;
    countDown.innerHTML = timerCountVal;
     }
}

function Bincrease(val){
    brkCountVal = ++brkCountVal;
     if(brkCountVal>=5){
    brkCount.innerHTML = brkCountVal;
    btime.innerHTML = brkCountVal;
     }
}

function Bdecrease(val){
    brkCountVal = --brkCountVal;
     if(brkCountVal>=5){
      brkCount.innerHTML = brkCountVal;
      btime.innerHTML = brkCountVal;
     }
}

function Tstart(){
    var starter = setInterval(counter,1000);
    function counter(val){
    var c = parseInt(countDown.textContent);
    c--;
    countDown.textContent = c;
    if(c==0){
      clearInterval(starter);
      Bstart();
    }
}
}

function Bstart(){
    var starter = setInterval(counter,1000);
    function counter(val){
    var c = parseInt(btime.textContent);
    c--;
    btime.textContent = c;
    if(c==0){
      clearInterval(starter);
    }
}
}

function reset(){
    timerCount.innerHTML = 25;
    brkCount.innerHTML = 5; 
    countDown.innerHTML = 25;
    btime.innerHTML = 5;
}
