var area = document.createElement("div");
area.id = 'area'
var boxes = document.getElementsByClassName("box");
var	boxesLength = document.getElementById("input");
var panel = document.getElementById("panel");
var player = document.getElementById("selectPlayer")

let sPlayer = "0";

var zero = 0;

var timer = 1000

function createArea(){

	document.querySelector('.content').append(area)

	if (boxesLength.value <= 2) {
		for (var i = 1; i <= 4;i++){
			area.innerHTML+='<div class="box"></div>'
			area.classList.remove('area2')
			area.classList.remove('area3')
			area.classList.add('area1');
		}
	} else if (boxesLength.value == 3 ){
		for (var i = 1; i <= 9;i++){
			area.innerHTML+='<div class="box"></div>'
			area.classList.remove('area1')
			area.classList.remove('area3')
			area.classList.add('area2');
		}
	} else if(boxesLength.value >= 4){
		for (var i = 1; i <= 16;i++){
			area.innerHTML+='<div class="box"></div>'
			area.classList.remove('area1')
			area.classList.remove('area3')
			area.classList.remove('area2');
			area.classList.add('area4');
		}
	}

	panel.style.display = 'none'
	console.log(player.value)

	if (player.value == "0" || player.value == "o" || player.value == "O") {
		sPlayer2 = "0"
		sPlayer = "X"
		zero = 1;
		checkZeroMove();
	} else {
		sPlayer = "0"
		sPlayer2 = "X"
	}
}



var eContent;

area.onclick = function (e){



	
	console.log(zero)
	eContent = e.target.innerHTML;
		
	if (eContent === "X" ) {
		e.target.innerHTML = "X";
		zero--;
	} else if (eContent === "0") {
		e.target.innerHTML = "0";
		zero--;
	} else {
		if (zero % 2 === 0) {
			e.target.innerHTML = sPlayer2;
		} else {
			if (boxesLength.value >= 3 ) {
				check()
			} else if (boxesLength.value <= 2) {
				check2()
			}

		}
	}
	zero++;

	
	
	

	if (zero % 2 != 0) {
		checkZeroMove()
	}

	if (boxesLength.value == 3 ) {
		setTimeout(check,750)
	} else if (boxesLength.value <= 2) {
		setTimeout(check2,750)
	} else if (boxesLength.value >= 4){
		setTimeout(check3,750)
	}

}






var	zro = 0;

function check(){
	
	
	
	var winPos = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
	]

	for (var i = 0; i < winPos.length;i++){
		if (boxes[winPos[i][0]].innerHTML === "X" && boxes[winPos[i][1]].innerHTML === "X" && boxes[winPos[i][2]].innerHTML === "X" ) 
		{
			alert("X-wins!");
			newGame()
			
			return;
		}
		else if (boxes[winPos[i][0]].innerHTML === "0" && boxes[winPos[i][1]].innerHTML === "0" && boxes[winPos[i][2]].innerHTML === "0" ) 
		{
			alert("0-wins!");
			newGame()
		
			return;
		} 
	}

	
	
	if (zro >= 9) {
		if (boxes.innerHTML !== "") {
			alert("NOTHING!")
			newGame()
		}
	}
	zro++;
	console.log(zro)

}


function check2(){
	var winPos2 = [
		[0,1],
		[2,3],
		[0,2],
		[1,3],
		[0,3],
		[1,2],
	]

	for (var i = 0; i < winPos2.length;i++){
		if (boxes[winPos2[i][0]].innerHTML === "X" && boxes[winPos2[i][1]].innerHTML === "X" ) 
		{
			alert("X-wins");
			newGame()
		}
		if (boxes[winPos2[i][0]].innerHTML === "0" && boxes[winPos2[i][1]].innerHTML === "0" ) 
		{
			alert("0-wins");
			newGame()
		}
	}
	
}

function checkZeroMove(){
	
	let masiv = []
	document.querySelectorAll('.box').forEach(function(element){
		if (element.innerHTML == '') {
			masiv.push(element)
		}

	});	

	let oMove = Math.floor(Math.random() * masiv.length)


	setInterval(() => masiv[oMove].innerHTML = sPlayer, 500)
	eContent = player
	zero--;
	zro++;

}

function check3(){
	
	
	
	var winPos3 = [
		[0,1,2,3],
		[4,5,6,7],
		[8,9,10,11],
		[12,13,14,15],
		[0,4,8,12],
		[1,5,9,13],
		[2,6,10,14],
		[3,7,11,15],
		[3,6,9,12],
		[0,5,10,15],
	]

	for (var i = 0; i < winPos3.length;i++){
		if (boxes[winPos3[i][0]].innerHTML === "X" && boxes[winPos3[i][1]].innerHTML === "X" && boxes[winPos3[i][2]].innerHTML === "X" && boxes[winPos3[i][3]].innerHTML === "X") 
		{
			alert("X-wins!");
			newGame()
			
			return;
		}
		else if (boxes[winPos3[i][0]].innerHTML === "0" && boxes[winPos3[i][1]].innerHTML === "0" && boxes[winPos3[i][2]].innerHTML === "0" && boxes[winPos3[i][3]].innerHTML === "0") 
		{
			alert("0-wins!");
			newGame()
		
			return;
		} 
	}

	
	
	if (zro >= 15) {
		if (boxes.innerHTML !== "") {
			alert("NOTHING!")
			newGame()
		}
	}
	zro++;

}





function newGame(){
	setInterval(()=>location.reload(),1500)
}





