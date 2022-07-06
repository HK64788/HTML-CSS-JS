
let player1NAME = prompt("Player1 name")
let player2NAME = prompt("Player2 name")

function getNAMES(){
  player1NAME = prompt("Player1 name")
  player2NAME = prompt("Player2 name")
}

if (player1NAME == "" || player2NAME == "") {
  getNAMES()
}


let player1INFO = document.getElementById("player1INFO")
let player2INFO = document.getElementById("player2INFO")

let player1N = document.getElementById("player1Name")
let player2N = document.getElementById("player2Name")



player1N.innerHTML = player1NAME
player2N.innerHTML = player2NAME


var chess = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
]

var player2PosX=[
  [0],
  [2],
  [4], 
  [6],
  [1],
  [3],
  [5],
  [7],
  [0],
  [2],
  [4],
  [6],
]



var player2PosY=[
  [5],
  [5],
  [5],
  [5],
  [6],
  [6],
  [6],
  [6],
  [7],
  [7],
  [7],
  [7],
]

var player1PosX = [
  [1],
  [3],
  [5],
  [7],
  [0],
  [2],
  [4],
  [6],
  [1],
  [3],
  [5],
  [7],
]

var player1PosY = [
  [0],
  [0],
  [0],
  [0],
  [1],
  [1],
  [1],
  [1],
  [2],
  [2],
  [2],
  [2],
]


let player2Total = 12
let player1Total = 12

let player3 = document.createElement("div")
player3.className = 'player3'

let player4 = document.createElement("div")
player4.className = 'player4'

let player2ELEMENT = document.createElement("div")
player2ELEMENT.className = "player2"

var selected;
var selectedX;
var selectedY;

function draw(){
  let out ="";
  let m = 0;
  for(let i = 0; i<chess.length;i++){
    let arr = chess[i];
    for(let j = 0; j < arr.length;j++){
      if (m%2 == 0) {
        out+=`<div class="block white" data-x="${j}" data-y="${i}"></div>`
      } else {
        out+=`<div class="block black" data-x="${j}" data-y="${i}"></div>`
      }
      m++;
    }
    m++;
  }
  let black =  document.querySelector(".black");

  

   

  document.querySelector('#area').innerHTML = out;
  document.querySelectorAll(".black").forEach(function(element){
    element.onclick = move;
    for (let k = 0; k < player2PosX.length;k++){
      if (player2PosX[k] == element.dataset.x && player2PosY[k] == element.dataset.y){
        element.innerHTML = '<div class="player2"></div>'
      }
      if (player1PosX[k] == element.dataset.x && player1PosY[k] == element.dataset.y){
        element.innerHTML = '<div class="player1"></div>'
      }
    }
    
  });
}

draw()

function move(){

  selected = this.innerHTML

  selectedX = Number(this.dataset.x)
  selectedY = Number(this.dataset.y)
  document.querySelectorAll(".black").forEach(function(element){
    element.classList.remove('active');
    element.classList.remove('yellow'); 
  });
  

  
  
  let x = this.dataset.x;
  let y = this.dataset.y;



  let moveRight = document.querySelector(`.black[data-x="${+x + 1}"][data-y="${+y - 1 }"]`)
  let moveRight2 = document.querySelector(`.black[data-x="${+x + 2}"][data-y="${+y - 2 }"]`)

  let moveLeft = document.querySelector(`.black[data-x="${+x - 1}"][data-y="${+y - 1 }"]`)
  let moveLeft2 = document.querySelector(`.black[data-x="${+x - 2}"][data-y="${+y - 2 }"]`)



  let moveRightP1 = document.querySelector(`.black[data-x="${+x - 1}"][data-y="${+y + 1 }"]`)
  let moveRight2P1 = document.querySelector(`.black[data-x="${+x - 2}"][data-y="${+y + 2 }"]`)

  let moveLeftP1 = document.querySelector(`.black[data-x="${+x + 1}"][data-y="${+y + 1 }"]`)
  let moveLeft2P1 = document.querySelector(`.black[data-x="${+x + 2}"][data-y="${+y + 2 }"]`)

 
  this.classList.add('yellow');


  

  
  
  // if (selected == '<div class="player2"></div>') {
  //   if (+x+1 < 8 && +y-1 >= 0) {
  //     document.querySelector(`.black[data-x="${+x + 1}"][data-y="${+y - 1 }"]`).classList.add('active');
  //   }
  //   if (+x-1 >= 0 && +y-1 >= 0) {
  //     document.querySelector(`.black[data-x="${+x - 1}"][data-y="${+y - 1 }"]`).classList.add('active');
  //   } 

  //   let moveToRight = () => {
  //     if (moveRight.innerHTML != '') {
  //       console.log("test")
  //       moveRight.classList.remove('active')
  //       if (moveRight.innerHTML == '<div class="player1"></div>') {
  //         if (moveRight2.innerHTML == "") {
  //           document.querySelector(`.black[data-x="${+x + 2}"][data-y="${+y - 2 }"]`).classList.add('active');
  //         } else {
  //           moveRight2.classList.remove('active')
  //         }
  //       }
  //     }
  //   }
    

  //   let moveToLeft = () => {
  //     if (moveLeft.innerHTML == '') {
  //       moveLeft.classList.remove('active')
  //       if (moveLeft.innerHTML == '<div class="player1"></div>') {
  //         if (moveLeft2.innerHTML == "") {
  //           document.querySelector(`.black[data-x="${+x - 2}"][data-y="${+y - 2 }"]`).classList.add('active');
  //         } else {
  //           moveLeft2.classList.remove('active')
  //         }
  //       }
  //     }
  //   }

    

    


  // } else if (selected == '<div class="player1"></div>'){
  //   if (+x+1 < 8 && +y+1 < 8) {
  //     document.querySelector(`.black[data-x="${+x + 1}"][data-y="${+y + 1 }"]`).classList.add('active');
  //   }
  //   if (+x-1 >= 0 && +y+1 < 8) {
  //     document.querySelector(`.black[data-x="${+x - 1}"][data-y="${+y + 1 }"]`).classList.add('active');
  //   } 


  //   let moveToRight2 = () => {
  //     if (moveRightP1.innerHTML != '') {
  //       moveRightP1.classList.remove('active')
  //       if (moveRightP1.innerHTML == '<div class="player2"></div>') {
  //         if (moveRight2P1.innerHTML == "") {
  //           document.querySelector(`.black[data-x="${+x - 2}"][data-y="${+y + 2 }"]`).classList.add('active');
  //         } else {
  //           moveRight2P1.classList.remove('active')
  //         }
  //       }
  //     }
  //   }
    

  //   let moveToLeft2 = () => {
  //     if (moveLeftP1.innerHTML != '') {
  //     moveLeftP1.classList.remove('active')
  //     if (moveLeftP1.innerHTML == '<div class="player2"></div>') {
  //       if (moveLeft2P1.innerHTML == "") {
  //         document.querySelector(`.black[data-x="${+x + 2}"][data-y="${+y + 2 }"]`).classList.add('active');
  //       } else {
  //         moveLeft2P1.classList.remove('active')
  //       }
  //     }
  //   }
  //   }

    
  // }

  
  document.querySelectorAll(".black").forEach(function(element){
    element.onclick = checkMove
  });

  if (selected != "") {
    this.innerHTML = ""
  }
}



function checkMove(){

  let moveX = Number(this.dataset.x) 
  let moveY = Number(this.dataset.y) 

  let e1 = document.querySelector(`.black[data-x="${moveX + 1 }"][data-y="${moveY + 1}"]`)
  let e2 = document.querySelector(`.black[data-x="${moveX - 1 }"][data-y="${moveY + 1}"]`)

  let e4 = document.querySelector(`.black[data-x="${selectedX - 2 }"][data-y="${selectedY - 2}"]`)
  let e5 = document.querySelector(`.black[data-x="${selectedX + 2 }"][data-y="${selectedY - 2}"]`)


  let e8 = document.querySelector(`.black[data-x="${selectedX - 3 }"][data-y="${selectedY - 3}"]`)
  let e9 = document.querySelector(`.black[data-x="${selectedX + 3 }"][data-y="${selectedY - 3}"]`)

  let e10 = document.querySelector(`.black[data-x="${selectedX - 4 }"][data-y="${selectedY - 4}"]`)
  let e11 = document.querySelector(`.black[data-x="${selectedX + 4 }"][data-y="${selectedY - 4}"]`)

  let e12 = document.querySelector(`.black[data-x="${selectedX - 5 }"][data-y="${selectedY - 5}"]`)
  let e13 = document.querySelector(`.black[data-x="${selectedX + 5 }"][data-y="${selectedY - 5}"]`)

  let e14 = document.querySelector(`.black[data-x="${selectedX - 6 }"][data-y="${selectedY - 6}"]`)
  let e15 = document.querySelector(`.black[data-x="${selectedX + 6 }"][data-y="${selectedY - 6}"]`)

  let e16 = document.querySelector(`.black[data-x="${selectedX - 7 }"][data-y="${selectedY - 7}"]`)
  let e17 = document.querySelector(`.black[data-x="${selectedX + 7 }"][data-y="${selectedY - 7}"]`)


  let e1P1 = document.querySelector(`.black[data-x="${moveX + 1 }"][data-y="${moveY - 1}"]`)
  let e2P1 = document.querySelector(`.black[data-x="${moveX - 1 }"][data-y="${moveY - 1}"]`)

  let e4P1 = document.querySelector(`.black[data-x="${selectedX - 2 }"][data-y="${selectedY + 2}"]`)
  let e5P1 = document.querySelector(`.black[data-x="${selectedX + 2 }"][data-y="${selectedY + 2}"]`)

  let e8P1 = document.querySelector(`.black[data-x="${selectedX - 3 }"][data-y="${selectedY + 3}"]`)
  let e9P1 = document.querySelector(`.black[data-x="${selectedX + 3 }"][data-y="${selectedY + 3}"]`)

  let e10P1 = document.querySelector(`.black[data-x="${selectedX - 4 }"][data-y="${selectedY + 4}"]`)
  let e11P1 = document.querySelector(`.black[data-x="${selectedX + 4 }"][data-y="${selectedY + 4}"]`)

  let e12P1 = document.querySelector(`.black[data-x="${selectedX - 5 }"][data-y="${selectedY + 5}"]`)
  let e13P1 = document.querySelector(`.black[data-x="${selectedX + 5 }"][data-y="${selectedY + 5}"]`)

  let e14P1 = document.querySelector(`.black[data-x="${selectedX - 6 }"][data-y="${selectedY + 6}"]`)
  let e15P1 = document.querySelector(`.black[data-x="${selectedX + 6 }"][data-y="${selectedY + 6}"]`)

  let e16P1 = document.querySelector(`.black[data-x="${selectedX - 7 }"][data-y="${selectedY + 7}"]`)
  let e17P1 = document.querySelector(`.black[data-x="${selectedX + 7 }"][data-y="${selectedY + 7}"]`)

  let b1P1 = document.querySelector(`.black[data-x="${selectedX - 1 }"][data-y="${selectedY + 1}"]`)
  let b2P1 = document.querySelector(`.black[data-x="${selectedX + 1 }"][data-y="${selectedY + 1}"]`)

  let b1 = document.querySelector(`.black[data-x="${selectedX - 1 }"][data-y="${selectedY - 1}"]`)
  let b2 = document.querySelector(`.black[data-x="${selectedX + 1 }"][data-y="${selectedY - 1}"]`)




  let $move = document.querySelector(`.black[data-x="${moveX}"][data-y="${moveY}"]`)

  if (b2 == null) {
    b2 = ""
  }
  if (b2P1 == null) {
    b2P1 = ""
  }


  



  console.log(e1)
  console.log(b2)

  if (selected == '<div class="player2"></div>') {
    if (selected != "") {
      if ((moveY + 1 == selectedY) && (moveX + 1 == selectedX || moveX - 1 == selectedX)) {
        if (this.innerHTML == "") {
          this.innerHTML = selected
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else if ((moveY + 2 == selectedY) && (moveX + 2 == selectedX || moveX - 2 == selectedX)) {
        if (this.innerHTML == "") {
          if (b2.innerHTML == '<div class="player1"></div>' || b1.innerHTML == '<div class="player1"></div>' || b2.innerHTML == '<div class="player4"></div>' || b1.innerHTML == '<div class="player4"></div>' ) {
            this.innerHTML = selected
            if ($move == e4) {
              e1.innerHTML = ''
              player1Total--
            } else if ($move == e5){
              e2.innerHTML = ''
              player1Total--
            }
          } else {
            document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
          }
          
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
        
      } else if ((moveY - 1 == selectedY) && (moveX + 1 == selectedX || moveX - 1 == selectedX)) {
        if (this.innerHTML == "") {
          this.innerHTML = selected
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else if ((moveY - 2 == selectedY) && (moveX + 2 == selectedX || moveX - 2 == selectedX)) {

        if (this.innerHTML == "") {
          if (b2P1.innerHTML == '<div class="player1"></div>' || b1P1.innerHTML == '<div class="player1"></div>' || b2P1.innerHTML == '<div class="player4"></div>' || b1P1.innerHTML == '<div class="player4"></div>') {
            this.innerHTML = selected
            if ($move == e4P1) {
              e1P1.innerHTML = ''
              player1Total--
            } else if ($move == e5P1){
              e2P1.innerHTML = ''
              player1Total--
            } 
          } else {
            document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
          }
          
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }


        
      } else {
        document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
      }
    }
  } else if (selected == '<div class="player1"></div>') {
    if (selected != "") {
      if ((moveY - 1 == selectedY) && (moveX + 1 == selectedX || moveX - 1 == selectedX)) {
        if (this.innerHTML == "") {
          this.innerHTML = selected
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else if ((moveY - 2 == selectedY) && (moveX + 2 == selectedX || moveX - 2 == selectedX)){
        if (this.innerHTML == "") {
          if (b2P1.innerHTML == '<div class="player2"></div>' || b1P1.innerHTML == '<div class="player2"></div>' || b2P1.innerHTML == '<div class="player3"></div>' || b1P1.innerHTML == '<div class="player3"></div>') {
            this.innerHTML = selected
            if ($move == e4P1) {
              e1P1.innerHTML = ''
              player2Total--
            } else if ($move == e5P1){
              e2P1.innerHTML = ''
              player2Total--
            } 
          } else {
            document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
          }
          
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else if ((moveY + 1 == selectedY) && (moveX + 1 == selectedX || moveX - 1 == selectedX)) {
        if (this.innerHTML == "") {
          this.innerHTML = selected
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else if ((moveY + 2 == selectedY) && (moveX + 2 == selectedX || moveX - 2 == selectedX)) {
        if (this.innerHTML == "") {
          if (b2.innerHTML == '<div class="player2"></div>' || b1.innerHTML == '<div class="player2"></div>' || b2.innerHTML == '<div class="player3"></div>' || b1.innerHTML == '<div class="player3"></div>' ) {
            this.innerHTML = selected
            if ($move == e4) {
              e1.innerHTML = ''
              player2Total--
            } else if ($move == e5){
              e2.innerHTML = ''
              player2Total--
            }
          } else {
            document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
          }
          
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else{
        document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
      }
    } 
  } else if (selected == '<div class="player3"></div>') {
    if (selected != "") {
      if ((moveY + 1 == selectedY) && (moveX + 1 == selectedX || moveX - 1 == selectedX)) {
        if (this.innerHTML == "") {
          this.innerHTML = selected
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else if ((moveY + 2 == selectedY) && (moveX + 2 == selectedX || moveX - 2 == selectedX)) {
        this.innerHTML = selected
        if ($move == e4) {
          if (e1.innerHTML != '') {
            player1Total--
          } 
          e1.innerHTML = ''
        } else if ($move == e5){
          if (e2.innerHTML != '') {
            player1Total--
          } 
          e2.innerHTML = ''
        }
      } else if ((moveY - 1 == selectedY) && (moveX + 1 == selectedX || moveX - 1 == selectedX)) {
        if (this.innerHTML == "") {
          this.innerHTML = selected
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else if ((moveY - 2 == selectedY) && (moveX + 2 == selectedX || moveX - 2 == selectedX)) {
        this.innerHTML = selected
        if ($move == e4P1) {
          if (e1P1.innerHTML != '') {
            player1Total--
          } 
          e1P1.innerHTML = ''
        } else if ($move == e5P1){
          if (e2P1.innerHTML != '') {
            player1Total--
          } 
          e2P1.innerHTML = ''
        }
      } else if ((moveY + 3 == selectedY) && (moveX + 3 == selectedX || moveX - 3 == selectedX)) {
        this.innerHTML = selected
        if ($move == e8) {
          if (e4.innerHTML != '') {
            player1Total--
          } 
          if (b1.innerHTML != '') {
            player1Total--
          } 
          e4.innerHTML = ''
          b1.innerHTML = ''
        } else if ($move == e9){
          if (e5.innerHTML != '') {
            player1Total--
          } 
          if (b2.innerHTML != '') {
            player1Total--
          } 
          e5.innerHTML = ''
          b2.innerHTML = ''
        }
      } else if ((moveY + 4 == selectedY) && (moveX + 4 == selectedX || moveX - 4 == selectedX)){
        this.innerHTML = selected
        if ($move == e10) {
          if (e8.innerHTML != '') {
            player1Total--
          } 
          if (e4.innerHTML != '') {
            player1Total--
          } 
          e8.innerHTML = ''
          e4.innerHTML = ''
          b1.innerHTML = ''
        } else if ($move == e11){
          if (e9.innerHTML != '') {
            player1Total--
          } 
          if (e5.innerHTML != '') {
            player1Total--
          }
          e9.innerHTML = ''
          e5.innerHTML = ''
          b2.innerHTML = ''
        }
      } else if ((moveY + 5 == selectedY) && (moveX + 5 == selectedX || moveX - 5 == selectedX)){
        this.innerHTML = selected
        if ($move == e12){
          if (e10.innerHTML != '') {
            player1Total--
          } 
          if (e8.innerHTML != '') {
            player1Total--
          } 
          if (e4.innerHTML != '') {
            player1Total--
          } 
          e10.innerHTML = ''
          e8.innerHTML = ''
          e4.innerHTML = ''
          b1.innerHTML = ''
        } else if ($move == e13){
          if (e10.innerHTML != '') {
            player1Total--
          } 
          if (e9.innerHTML != '') {
            player1Total--
          } 
          if (e5.innerHTML != '') {
            player1Total--
          }
          e11.innerHTML = ''
          e9.innerHTML = ''
          e5.innerHTML = ''
          b2.innerHTML = ''
        }
      } else if ((moveY + 6 == selectedY) && (moveX + 6 == selectedX || moveX - 6 == selectedX)){
        this.innerHTML = selected
        if ($move == e14){
          if (e12.innerHTML != '') {
            player1Total--
          } 
          if (e10.innerHTML != '') {
            player1Total--
          } 
          if (e8.innerHTML != '') {
            player1Total--
          } 
          if (e4.innerHTML != '') {
            player1Total--
          } 
          e12.innerHTML = ''
          e10.innerHTML = ''
          e8.innerHTML = ''
          e4.innerHTML = ''
          b1.innerHTML = ''
        } else if ($move == e15){
          if (e13.innerHTML != '') {
            player1Total--
          } 
           if (e10.innerHTML != '') {
            player1Total--
          } 
          if (e9.innerHTML != '') {
            player1Total--
          } 
          if (e5.innerHTML != '') {
            player1Total--
          }
          e13.innerHTML = ''
          e11.innerHTML = ''
          e9.innerHTML = ''
          e5.innerHTML = ''
          b2.innerHTML = ''
        }
      } else if ((moveY + 7 == selectedY) && (moveX + 7 == selectedX || moveX - 7 == selectedX)){
        this.innerHTML = selected
        if ($move == e16){
          if (e14.innerHTML != '') {
            player1Total--
          } 
          if (e12.innerHTML != '') {
            player1Total--
          } 
          if (e10.innerHTML != '') {
            player1Total--
          } 
          if (e8.innerHTML != '') {
            player1Total--
          } 
          if (e4.innerHTML != '') {
            player1Total--
          } 
          e14.innerHTML = ''
          e12.innerHTML = ''
          e10.innerHTML = ''
          e8.innerHTML = ''
          e4.innerHTML = ''
          b1.innerHTML = ''
        } else if ($move == e17){
          if (e15.innerHTML != '') {
            player1Total--
          }
          if (e13.innerHTML != '') {
            player1Total--
          } 
           if (e10.innerHTML != '') {
            player1Total--
          } 
          if (e9.innerHTML != '') {
            player1Total--
          } 
          if (e5.innerHTML != '') {
            player1Total--
          } 
          e15.innerHTML = ''
          e13.innerHTML = ''
          e11.innerHTML = ''
          e9.innerHTML = ''
          e5.innerHTML = ''
          b2.innerHTML = ''
        }
      } else if ((moveY - 3 == selectedY) && (moveX + 3 == selectedX || moveX - 3 == selectedX)){
        this.innerHTML = selected
        if ($move == e8P1) {
          if (e4P1.innerHTML != '') {
            player1Total--
          } 
          if (b1P1.innerHTML != '') {
            player1Total--
          }   
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e9P1){
          if (e5P1.innerHTML != '') {
            player1Total--
          } 
          if (b2P1.innerHTML != '') {
            player1Total--
          }   
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else if ((moveY - 4 == selectedY) && (moveX + 4 == selectedX || moveX - 4 == selectedX)){
        this.innerHTML = selected
        if ($move == e10P1) {
          if (e8P1.innerHTML != '') {
            player1Total--
          } 
          if (e4P1.innerHTML != '') {
            player1Total--
          } 
          e8P1.innerHTML = ''
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e11P1){
          if (e9P1.innerHTML != '') {
            player1Total--
          } 
          if (e5P1.innerHTML != '') {
            player1Total--
          } 
          e9P1.innerHTML = ''
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else if ((moveY - 5 == selectedY) && (moveX + 5 == selectedX || moveX - 5 == selectedX)){
        this.innerHTML = selected
        if ($move == e12P1){
          if (e10P1.innerHTML != '') {
            player1Total--
          } 
          if (e8P1.innerHTML != '') {
            player1Total--
          } 
          if (e4P1.innerHTML != '') {
            player1Total--
          } 
          e10P1.innerHTML = ''
          e8P1.innerHTML = ''
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e13P1){
          if (e11P1.innerHTML != '') {
            player1Total--
          } 
          if (e9P1.innerHTML != '') {
            player1Total--
          } 
          if (e5P1.innerHTML != '') {
            player1Total--
          } 
          e11P1.innerHTML = ''
          e9P1.innerHTML = ''
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else if ((moveY - 6 == selectedY) && (moveX + 6 == selectedX || moveX - 6 == selectedX)){
        this.innerHTML = selected
        if ($move == e14P1){
          if (e12P1.innerHTML != '') {
            player1Total--
          } 
          if (e10P1.innerHTML != '') {
            player1Total--
          } 
          if (e8P1.innerHTML != '') {
            player1Total--
          } 
          if (e4P1.innerHTML != '') {
            player1Total--
          } 
          e12P1.innerHTML = ''
          e10P1.innerHTML = ''
          e8P1.innerHTML = ''
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e15P1){
          if (e13P1.innerHTML != '') {
            player1Total--
          }
          if (e11P1.innerHTML != '') {
            player1Total--
          } 
          if (e9P1.innerHTML != '') {
            player1Total--
          } 
          if (e5P1.innerHTML != '') {
            player1Total--
          }  
          e13P1.innerHTML = ''
          e11P1.innerHTML = ''
          e9P1.innerHTML = ''
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else if ((moveY - 7 == selectedY) && (moveX + 7 == selectedX || moveX - 7 == selectedX)){
        this.innerHTML = selected
        if ($move == e16P1){
          if (e14P1.innerHTML != '') {
            player1Total--
          } 
          if (e12P1.innerHTML != '') {
            player1Total--
          } 
          if (e10P1.innerHTML != '') {
            player1Total--
          } 
          if (e8P1.innerHTML != '') {
            player1Total--
          } 
          if (e4P1.innerHTML != '') {
            player1Total--
          } 
          e14P1.innerHTML = ''
          e12P1.innerHTML = ''
          e10P1.innerHTML = ''
          e8P1.innerHTML = ''
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e17P1){
          if (e15P1.innerHTML != '') {
            player1Total--
          }
          if (e13P1.innerHTML != '') {
            player1Total--
          }
          if (e11P1.innerHTML != '') {
            player1Total--
          } 
          if (e9P1.innerHTML != '') {
            player1Total--
          } 
          if (e5P1.innerHTML != '') {
            player1Total--
          }  
          e15P1.innerHTML = ''
          e13P1.innerHTML = ''
          e11P1.innerHTML = ''
          e9P1.innerHTML = ''
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else {
        document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
      }
    }
  } else if (selected == '<div class="player4"></div>') {
    if (selected != "") {
      if ((moveY - 1 == selectedY) && (moveX + 1 == selectedX || moveX - 1 == selectedX)) {
        if (this.innerHTML == "") {
          this.innerHTML = selected
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else if ((moveY - 2 == selectedY) && (moveX + 2 == selectedX || moveX - 2 == selectedX)){
        this.innerHTML = selected
        if ($move == e4P1) {
          if (e1P1.innerHTML != '') {
            player2Total--
          } 
          e1P1.innerHTML = ''
        } else if ($move == e5P1){
          if (e2P1.innerHTML != '') {
            player2Total--
          } 
          e2P1.innerHTML = ''
        }
      } else if ((moveY + 1 == selectedY) && (moveX + 1 == selectedX || moveX - 1 == selectedX)) {
        if (this.innerHTML == "") {
          this.innerHTML = selected
        } else {
          document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
        }
      } else if ((moveY + 2 == selectedY) && (moveX + 2 == selectedX || moveX - 2 == selectedX)) {
        this.innerHTML = selected
        if ($move == e4) {
          if (e1.innerHTML != '') {
            player2Total--
          } 
          e1.innerHTML = ''
        } else if ($move == e5){
          if (e2.innerHTML != '') {
            player2Total--
          } 
          e2.innerHTML = ''
        }
      } else if ((moveY - 3 == selectedY) && (moveX + 3 == selectedX || moveX - 3 == selectedX)){
        this.innerHTML = selected
        if ($move == e8P1) {
          if (e4P1.innerHTML != '') {
            player2Total--
          } 
          if (b1P1.innerHTML != '') {
            player2Total--
          } 
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e9P1){
          if (e5P1.innerHTML != '') {
            player2Total--
          } 
          if (b2P1.innerHTML != '') {
            player2Total--
          } 
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else if ((moveY - 4 == selectedY) && (moveX + 4 == selectedX || moveX - 4 == selectedX)){
        this.innerHTML = selected
        if ($move == e10P1) {
          if (e8P1.innerHTML != '') {
            player2Total--
          } 
          if (e4P1.innerHTML != '') {
            player2Total--
          } 
          e8P1.innerHTML = ''
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e11P1){
          if (e9P1.innerHTML != '') {
            player2Total--
          } 
          if (e5P1.innerHTML != '') {
            player2Total--
          }
          e9P1.innerHTML = ''
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else if ((moveY - 5 == selectedY) && (moveX + 5 == selectedX || moveX - 5 == selectedX)){
        this.innerHTML = selected
        if ($move == e12P1){
          if (e10P1.innerHTML != '') {
            player2Total--
          } 
          if (e8P1.innerHTML != '') {
            player2Total--
          } 
          if (e4P1.innerHTML != '') {
            player2Total--
          } 
          e10P1.innerHTML = ''
          e8P1.innerHTML = ''
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e13P1){
          if (e11P1.innerHTML != '') {
            player2Total--
          } 
          if (e9P1.innerHTML != '') {
            player2Total--
          } 
          if (e5P1.innerHTML != '') {
            player2Total--
          }
          e11P1.innerHTML = ''
          e9P1.innerHTML = ''
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else if ((moveY - 6 == selectedY) && (moveX + 6 == selectedX || moveX - 6 == selectedX)){
        this.innerHTML = selected
        if ($move == e14P1){
          if (e12P1.innerHTML != '') {
            player2Total--
          } 
           if (e10P1.innerHTML != '') {
            player2Total--
          } 
          if (e8P1.innerHTML != '') {
            player2Total--
          } 
          if (e4P1.innerHTML != '') {
            player2Total--
          }
          e12P1.innerHTML = ''
          e10P1.innerHTML = ''
          e8P1.innerHTML = ''
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e15P1){
          if (e13P1.innerHTML != '') {
            player2Total--
          } 
          if (e11P1.innerHTML != '') {
            player2Total--
          } 
          if (e9P1.innerHTML != '') {
            player2Total--
          } 
          if (e5P1.innerHTML != '') {
            player2Total--
          }
          e13P1.innerHTML = ''
          e11P1.innerHTML = ''
          e9P1.innerHTML = ''
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else if ((moveY - 7 == selectedY) && (moveX + 7 == selectedX || moveX - 7 == selectedX)){
        this.innerHTML = selected
        if ($move == e16P1){
          if (e14P1.innerHTML != '') {
            player2Total--
          } 
          if (e12P1.innerHTML != '') {
            player2Total--
          } 
           if (e10P1.innerHTML != '') {
            player2Total--
          } 
          if (e8P1.innerHTML != '') {
            player2Total--
          } 
          if (e4P1.innerHTML != '') {
            player2Total--
          }
          e14P1.innerHTML = ''
          e12P1.innerHTML = ''
          e10P1.innerHTML = ''
          e8P1.innerHTML = ''
          e4P1.innerHTML = ''
          b1P1.innerHTML = ''
        } else if ($move == e17P1){
          if (e15P1.innerHTML != '') {
            player2Total--
          } 
          if (e13P1.innerHTML != '') {
            player2Total--
          } 
          if (e11P1.innerHTML != '') {
            player2Total--
          } 
          if (e9P1.innerHTML != '') {
            player2Total--
          } 
          if (e5P1.innerHTML != '') {
            player2Total--
          }
          e15P1.innerHTML = ''
          e13P1.innerHTML = ''
          e11P1.innerHTML = ''
          e9P1.innerHTML = ''
          e5P1.innerHTML = ''
          b2P1.innerHTML = ''
        }
      } else if ((moveY + 3 == selectedY) && (moveX + 3 == selectedX || moveX - 3 == selectedX)) {
        this.innerHTML = selected
        if ($move == e8) {
          if (e4.innerHTML != '') {
            player2Total--
          } 
          e4.innerHTML = ''
        } else if ($move == e9){
          if (e5.innerHTML != '') {
            player2Total--
          } 
          e5.innerHTML = ''
        }
      } else if ((moveY + 4 == selectedY) && (moveX + 4 == selectedX || moveX - 4 == selectedX)){
        this.innerHTML = selected
        if ($move == e10) {
          if (e8.innerHTML != '') {
            player2Total--
          } 
          if (e4.innerHTML != '') {
            player2Total--
          } 
          e8.innerHTML = ''
          e4.innerHTML = ''
          b1.innerHTML = ''
        } else if ($move == e11){
          if (e9.innerHTML != '') {
            player2Total--
          } 
          if (e5.innerHTML != '') {
            player2Total--
          } 
          e9.innerHTML = ''
          e5.innerHTML = ''
          b2.innerHTML = ''
        }
      } else if ((moveY + 5 == selectedY) && (moveX + 5 == selectedX || moveX - 5 == selectedX)){
        this.innerHTML = selected
        if ($move == e12){
          if (e10.innerHTML != '') {
            player2Total--
          } 
          if (e8.innerHTML != '') {
            player2Total--
          } 
          if (e4.innerHTML != '') {
            player2Total--
          } 
          e10.innerHTML = ''
          e8.innerHTML = ''
          e4.innerHTML = ''
          b1.innerHTML = ''
        } else if ($move == e13){
          if (e11.innerHTML != '') {
            player2Total--
          } 
          if (e9.innerHTML != '') {
            player2Total--
          } 
          if (e5.innerHTML != '') {
            player2Total--
          } 
          e11.innerHTML = ''
          e9.innerHTML = ''
          e5.innerHTML = ''
          b2.innerHTML = ''
        }
      } else if ((moveY + 6 == selectedY) && (moveX + 6 == selectedX || moveX - 6 == selectedX)){
        this.innerHTML = selected
        if ($move == e14){
          if (e12.innerHTML != '') {
            player2Total--
          } 
          if (e10.innerHTML != '') {
            player2Total--
          } 
          if (e8.innerHTML != '') {
            player2Total--
          } 
          if (e4.innerHTML != '') {
            player2Total--
          } 
          e12.innerHTML = ''
          e10.innerHTML = ''
          e8.innerHTML = ''
          e4.innerHTML = ''
          b1.innerHTML = ''
        } else if ($move == e15){
          if (e13.innerHTML != '') {
            player2Total--
          } 
          if (e11.innerHTML != '') {
            player2Total--
          } 
          if (e9.innerHTML != '') {
            player2Total--
          } 
          if (e5.innerHTML != '') {
            player2Total--
          }
          e13.innerHTML = ''
          e11.innerHTML = ''
          e9.innerHTML = ''
          e5.innerHTML = ''
          b2.innerHTML = ''
        }
      } else if ((moveY + 7 == selectedY) && (moveX + 7 == selectedX || moveX - 7 == selectedX)){
        this.innerHTML = selected
        if ($move == e16){
          if (e14.innerHTML != '') {
            player2Total--
          } 
          if (e12.innerHTML != '') {
            player2Total--
          } 
          if (e10.innerHTML != '') {
            player2Total--
          } 
          if (e8.innerHTML != '') {
            player2Total--
          } 
          if (e4.innerHTML != '') {
            player2Total--
          } 
          e14.innerHTML = ''
          e12.innerHTML = ''
          e10.innerHTML = ''
          e8.innerHTML = ''
          e4.innerHTML = ''
          b1.innerHTML = ''
        } else if ($move == e17){
          if (e15.innerHTML != '') {
            player2Total--
          } 
          if (e13.innerHTML != '') {
            player2Total--
          } 
          if (e11.innerHTML != '') {
            player2Total--
          } 
          if (e9.innerHTML != '') {
            player2Total--
          } 
          if (e5.innerHTML != '') {
            player2Total--
          }
          e15.innerHTML = ''
          e13.innerHTML = ''
          e11.innerHTML = ''
          e9.innerHTML = ''
          e5.innerHTML = ''
          b2.innerHTML = ''
        }
      } else{
        document.querySelector(`.black[data-x="${selectedX}"][data-y="${selectedY}"]`).innerHTML = selected
      }
    }
  }



  if (selected == '<div class="player2"></div>') {
    if (this.dataset.y <= 0) {
      console.log(this.innerHTML)
      if ($move.innerHTML == selected) {
        this.firstChild.remove()
        this.appendChild(player3)
      }
    }
    
    
  } else if (selected == '<div class="player1"></div>') {
    if (this.dataset.y >= 7) {
      if ($move.innerHTML == selected) {
        this.firstChild.remove()
        this.appendChild(player4)
      }   
    } 
  }





  player1INFO.innerHTML = player1Total
  player2INFO.innerHTML = player2Total

  console.log('player1: '+player1Total)
  console.log('player2: '+player2Total)

  if (player1Total <= 0) {
    alert(player2NAME + " ---- You WIN!")
    setInterval(() => location.reload(), 1500)
  }

  if (player2Total <= 0) {
    alert(player1NAME + " ---- You WIN!")
    setInterval(() => location.reload(), 1500)
  }

  if (player1Total == 1 && player2Total == 1) {
    alert("NOTHING")
    setInterval(() => location.reload(), 1500)
  }
  
  document.querySelectorAll(".black").forEach(function(element){
    element.classList.remove('active');
    element.classList.remove('yellow'); 

    element.onclick = move
  });

  

  selected = "" 




}








