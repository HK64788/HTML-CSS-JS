
let gold = document.getElementById('gold'),
	armyPanel = document.getElementById('army'),
	skipBtn = document.getElementById('skip')



class Elements{
	constructor(){
		this.area = document.getElementById('area')
		this.panel = document.getElementById('panel')
	}
}


class Draw{
	constructor(area){
		this.area = area;
	}

	drawMap(){
		var map = [
		  [0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0],
		]

		var j = 0;
		for(let i = 0;i < map.length;i++){
			let arr = map[i];
			for(let k = 0;k< arr.length;k++){
				this.area.innerHTML += `
					<div class="box" data-y="${i}" data-x="${k}" data-id='${j}'></div>
				`
				j++;
			}
			
		}
	}

	getBoxs(box){
		this.box = document.querySelectorAll(".box")
		let cityPos = Math.floor(Math.random()*this.box.length)
		this.box[cityPos].classList.add('main-city')
		this.box[cityPos].classList.add('city');
		addCity()
		setArmy(this.box[cityPos].dataset.id)
		setArmyCount(this.box[cityPos].dataset.id,10)


		let setEnemy = () =>{
			let enemyCityPos = Math.floor(Math.random()*this.box.length)

			if (this.box[enemyCityPos].className.indexOf('city') < 0) {
				this.box[enemyCityPos].classList.add('mainEnemy')
				this.box[enemyCityPos].classList.add('enemy')
			} else {
				setEnemy()
			}
		}

		setEnemy()
		
	}

}

class Stats{
	constructor(){
		this.gold = 0;
	}

	updateGolds(count){
		this.gold += Number(count)
		updatePanelGolds()
	}

	setGolds(count){
		this.gold = Number(count)
		updatePanelGolds()
	}
}

class Army{
	constructor(){
		this.mainArmy = []
	}

	updateArmy(id){
		this.mainArmy.push({'id':id,'count': 0})
	}

	getCityArmy(id){
		for(let i = 0;i < this.mainArmy.length;i++){
			if (this.mainArmy[i].id == id) {
				return this.mainArmy[i].count
			}
		}
	}

	buyArmy(id){
		var count;
		for(let i = 0;i < this.mainArmy.length;i++){
			if (this.mainArmy[i].id == id) {
				let golds = getGolds()
				if (golds - 1 >= 0) {
					count =  this.mainArmy[i].count
					count++;
					this.mainArmy[i].count = count
					setGolds(Math.floor(golds-1))

				} 

			}
		}

		openArmyPanel(id)

	}

	getArmy(id){
		var count,
			helper = true;
		for(let i = 0;i < this.mainArmy.length;i++){
			if (this.mainArmy[i].id == id) {
				count =  this.mainArmy[i].count
				helper = false
			}
		}

		if (helper) {
			return 5;
		} else {
			return count;
		}


	}

	setArmyCount(id,count){	
		for(let i = 0;i < this.mainArmy.length;i++){
			if (this.mainArmy[i].id == id) {
				this.mainArmy[i].count = count
			}
		}
	}
}

class Move{
	constructor(){
		this.startMove()
		this.moveBox = 'aaa'
	}

	startMove(){
		this.box = document.querySelectorAll(".box")
		this.box.forEach(function(element){
			element.onclick = () =>{
				let str = element.className
				let bool = str.indexOf('city')
				if (bool > 0) {	
					openArmyPanel(element.dataset.id)
					setMoveBox(element)
					checkMove()
				} else {
					armyPanel.innerHTML = ''
					setMoveBox('')

				}

				
			}
		})
	}

	

	checkMove(){
		var x = Number(this.moveBox.dataset.x),
			y = Number(this.moveBox.dataset.y),
			legalMoves = [
				[
					[x-1,y],
					[x+1,y],
				],
				[
					[x,y-1],
					[x,y+1],
				]
			],
			moveHelper;



		for(let i = 0;i < legalMoves.length;i++){
			for(let j = 0;j < legalMoves[i].length;j++){
				let thisElement = legalMoves[i][j];
				
				moveHelper = document.querySelector(`.box[data-x="${thisElement[0]}"][data-y="${thisElement[1]}"]`)	
				if (moveHelper != null) {
					let str = moveHelper.className,
						bool = str.indexOf('city')

					if (bool < 0) {
						moveHelper.classList.add('moveHelper')		
					}
				}
			}
		}


		this.box = document.querySelectorAll(".box")

		

		this.moveBox.classList.add('selected')


		this.box.forEach(function(element){
		
			element.onclick = () =>{
				
				let moveX = element.dataset.x,
					moveY = element.dataset.y

				for(let i = 0;i < legalMoves.length;i++){
					for(let j = 0;j < legalMoves[i].length;j++){
						let thisElement = legalMoves[i][j];
						if (thisElement[0] == moveX && thisElement[1] == moveY) {
							let boxMoveElement = document.querySelector(`.box[data-x='${moveX}'][data-y='${moveY}']`),
								str = boxMoveElement.className,
								bool = str.indexOf('city')
							if (bool < 0) {	
								let enemyArmy = getArmy(boxMoveElement.dataset.id),
									myCity = getMoveBox(),
									myArmy = getArmy(myCity.dataset.id)


								if (myArmy - enemyArmy > 0) {
									setArmyCount(myCity.dataset.id,myArmy - enemyArmy)
									if (boxMoveElement.className.indexOf('enemy') > 0) {
										boxMoveElement.classList.remove('enemy')
										if (boxMoveElement.className.indexOf('mainEnemy') > 0) {
											boxMoveElement.classList.remove('mainEnemy')
										}
									}

									boxMoveElement.classList.add('city')
									addCity()
									setArmy(boxMoveElement.dataset.id)
									enemyMove()

								} else {
									alert('Армия слишком маленкая')
									removeSelectedCity()
									armyPanel.innerHTML = ''
									setMoveBox('')
									for(let i = 0;i < legalMoves.length;i++){
										for(let j = 0;j < legalMoves[i].length;j++){
											let thisElement = legalMoves[i][j];
											
											moveHelper = document.querySelector(`.box[data-x="${thisElement[0]}"][data-y="${thisElement[1]}"]`)	
											if (moveHelper != null) {
												moveHelper.classList.remove('moveHelper')		
											}
										}
									}
									startMove()


									return
								}
							} else {
								console.log('this is your city')
							}
							
						}			
					}
				}

				removeSelectedCity()
				armyPanel.innerHTML = ''
				setMoveBox('')
				for(let i = 0;i < legalMoves.length;i++){
					for(let j = 0;j < legalMoves[i].length;j++){
						let thisElement = legalMoves[i][j];
						
						moveHelper = document.querySelector(`.box[data-x="${thisElement[0]}"][data-y="${thisElement[1]}"]`)	
						if (moveHelper != null) {
							moveHelper.classList.remove('moveHelper')		
						}
					}
				}

				startMove()
				checkWin()
			}
		})


		
	}

	enemyMove(){
		var enemyBoxs = document.querySelectorAll('.enemy'),
			randomBox = Math.floor(Math.random() * enemyBoxs.length),
			x = enemyBoxs[randomBox].dataset.x,
			y = enemyBoxs[randomBox].dataset.y

		var	legalMoves = [
				[x-1,y],
				[x+1,y],
				[x,y-1],
				[x,y+1],		
			],
			movesCount = 0
			

		
			console.log('srabotal')

			let startEnemyMove = () =>{
				let randomMove = Math.floor(Math.random()*legalMoves.length),
					randomMoveElement = document.querySelector(`.box[data-x="${legalMoves[randomMove][0]}"][data-y="${legalMoves[randomMove][1]}"]`)
				if (randomMoveElement != null){
					randomMoveElement.classList.add('enemy')
					if (randomMoveElement.className.indexOf('city') > 0) {
						randomMoveElement.classList.remove('city')
						if (randomMoveElement.className.indexOf('main-city') > 0) {
							randomMoveElement.classList.remove('main-city')
						}
					}
				} else {
					if (movesCount <= 10) {
						startEnemyMove()
						movesCount++;
					}else {
						this.enemyMove()
						return 1;
					}
				}
			}
			
			startEnemyMove()


		startMove()
		checkWin()
	}

}

var stats = new Stats(),
	army = new Army()




function start(){
	return elements = new Elements;	
}

function setGolds(count){
	stats.setGolds(count)
}

function addCity(){
	return stats.updateGolds(10)
}

function calcGolds(){
	let myCityes = document.querySelectorAll('.city');

	stats.updateGolds(Math.floor(myCityes.length*5))
}

function openArmyPanel(id){
	armyPanel.innerHTML = `<p class="army">Army: ${army.getCityArmy(id)}</p>`
	armyPanel.innerHTML += `<button id='buyArmy' data-id='${id}'>But army (+1)</button>`

	btn = document.getElementById('buyArmy')

	btn.onclick = () => {
		army.buyArmy(btn.dataset.id)
	}
}

function setArmy(id){

	army.updateArmy(id)
}


function getArmy(id){
	return army.getArmy(id)
}


function setArmyCount(id,count){
	army.setArmyCount(id,count)
}
start()
console.log()
draw = new Draw(elements.area);
draw.drawMap()
draw.getBoxs(elements.box)
move = new Move()

function updatePanelGolds(){
	gold.innerHTML = `<p class="gold">Gold: ${stats.gold}</p>`	
}

updatePanelGolds()

function getGolds(){
	return stats.gold
}

function setMoveBox(element){
	move.moveBox = element
}

function getMoveBox(){
	return move.moveBox
}

function checkMove(){
	move.checkMove()
}

function startMove(){
	move.startMove()
}

function removeSelectedCity(){
	move.moveBox.classList.remove('selected')
}

function enemyMove(){
	move.enemyMove()
}

function checkWin(){
	let blue = document.querySelectorAll('.city'),
		red = document.querySelectorAll('.enemy')

	if (blue.length <= 0) {
		alert('red team wins')
    	setInterval(() => location.reload(), 1500)
	} else if (red.length <= 0){
		alert('blue team wins')
    	setInterval(() => location.reload(), 1500)
	}


}

skipBtn.addEventListener('click',function(){
	enemyMove()
	calcGolds()
})

