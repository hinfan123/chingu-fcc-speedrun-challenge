var tiles = document.getElementsByClassName("tile");
var buttons = document.getElementsByClassName("button");

var state = [0,0,0,0,0,0,0,0,0];
var game = true;

var human = false;
var computer = true;

var humVal = -1;
var comVal = 1;

var humText = 'X', comText = 'O';

var winMatrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function reset(){
  for ( let x=0; x<9; x++){
    tiles[x].innerHTML = ' ';
    state[x] = 0;
  }
  game = true;
}

function setText(textVal){
	humText = textVal.charAt(0);
	comText = textVal.charAt(1);
}

function claim(clicked){
  if(!game) return;
  
  for(let x = 0; x<9; x++){
    if(tiles[x] == clicked && state[x] ==0){
      set(x,human);
      callAI();
    }
  }
}


function set(index, player){
  if(!game){
    return;
  }
  
  if(state[index] == 0){
    if(player == human){
      tiles[index].style.color = 'red';
	  tiles[index].innerHTML = humText;
      state[index] = humVal;
    }
    else{
      tiles[index].style.color = 'green';
      state[index] = comVal;
	  tiles[index].innerHTML = comText;
    }
    
    if(checkWin(state,player)){
      game = false;
       checkGame();
       
    }
   
  }
}

function checkGame(){
  if(!game) alert('You won!');
  else alert('You lost!')
}

function checkWin(board, player){
  var value = player == human ? humVal : comVal;
  for(var x =0; x<8; x++){
    var win = true;
    for(var y =0; y<3; y++){
      if(board[winMatrix[x][y]] != value){
        win = false;
        break;
      }
    }
    if(win) return true;
  }
  return false;
}

function checkFull(board){
  for(let x =0; x<9; x++){
    if(board[x] == 0) return false;
  }
  return true;
}

function callAI(){
  aiTurn(state, 0, computer);
}

function aiTurn(board, depth, player){
  
   var value = player == human ? humVal : comVal;
  
  if(checkWin(board, player)) return -10-depth; //human wins
  
  if(checkFull(board)) return 0; //draw
 
  var max = -Infinity;
  var index =0;
  
  for(let x =0 ; x<9; x++){
    if(board[x] == 0){
      var newBoard = board.slice(); //copy of board to simulate move
      newBoard[x] = value;
      
      var moveVal = -aiTurn(newBoard,depth+1, player);
      
      if(moveVal > max){
        max = moveVal;
        index = x;
      }
    }
  }
  if (depth == 0) set(index,computer);
}

