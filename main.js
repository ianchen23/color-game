var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

var easy = false;
var colors = [];
var target = "";

init();

function init() {
	for (var i = 0; i < 6; i ++) {
		squares[i].addEventListener("click", function(){
			if (this.style.backgroundColor === target) {
				message.textContent = "Correct!";
				h1.style.backgroundColor = target;
				for (var i = 0; i < colors.length; i ++) {
					squares[i].style.backgroundColor = target;
				}
				resetButton.textContent = "Play Again?";
			} 
			else if (this.style.backgroundColor !== "rgb(35, 35, 35)") {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
	
	resetButton.addEventListener("click", resetColors);
	
	easyButton.addEventListener("click", function(){
		hardButton.classList.remove("selected");
		easyButton.classList.add("selected");
		easy = true;
		resetColors();
	});
	
	hardButton.addEventListener("click", function(){
		easyButton.classList.remove("selected");
		hardButton.classList.add("selected");
		easy = false;
		resetColors();
	});
	
	resetColors();
}


function resetColors() {
	colors = [];
	for (var i = 0; i < 6; i ++) {
		var color = "#232323";
		if (!easy || i < 3) {
			color = "rgb(";
			color += Math.floor(Math.random() * 256);
			color += ", ";
			color += Math.floor(Math.random() * 256);
			color += ", ";
			color += Math.floor(Math.random() * 256);
			color += ")";
			colors[i] = color;
		}
		squares[i].style.backgroundColor = color;
	}
	target = colors[Math.floor(Math.random() * colors.length)];
	colorDisplay.textContent = target;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	message.textContent = "";
}