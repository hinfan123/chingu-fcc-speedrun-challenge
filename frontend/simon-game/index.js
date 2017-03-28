const cell = document.getElementsByClassName(`cell`); //all cells
const audio = document.getElementsByTagName(`audio`); //all audios
const start = document.getElementById('start'); 
const c_disp = document.getElementById('count-disp'); 
const gameCount = document.getElementById('count');
c_disp.style.display = 'none';

var cpattern= [];
var userPattern = [];

var count = 1;
gameCount.innerHTML = count;

start.addEventListener('click',gameOn);

function gameOn(){
        //computer plays
        c_disp.style.display = 'block';
        for(count = 1; count <=20; count++){
         genMove(); // add a random index to cpattern variable
         cpattern.every(function(val){
             blink(cell[val]);
             audio[val].play();
         });
        }
}

//generate computer move
function genMove(){
    let index = Math.floor(Math.random() * 4);
    cpattern.push(index);
}

        
//blink color
function blink(ele){
    ele.classList.add('blinkdiv');
    setTimeout(function() {
    ele.classList.remove('blinkdiv');
  }, 300);
}