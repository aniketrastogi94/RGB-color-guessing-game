var numberOfSquares=9;
var colors=generateRandomColors(numberOfSquares);
var pickedcolor=pickColor();
var r=document.getElementById("r");
r.textContent=pickedcolor;
var squares=document.querySelectorAll(".square");
var message=document.getElementById("message");
var h1=document.querySelector("h1");


var modeButtons=document.querySelectorAll('.mode');

for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		// console.log(this.textContent);
		if (this.textContent==="Easy"){
			numberOfSquares=3;
		}
		if(this.textContent==="Medium"){
			numberOfSquares=6;
		}
		if(this.textContent==="Hard"){
			numberOfSquares=9;
		}
		Reset(numberOfSquares);
	});
}
// ha.addEventListener("click",function(){
// 	ha.classList.add("selected");
// 	me.classList.remove("selected");
// 	ea.classList.remove("selected");
// 	numberOfSquares=9;
// 	colors=generateRandomColors(numberOfSquares);
// 	pickedcolor=pickColor();
// 	r.textContent=pickedcolor;
// 	for(var i=0;i<squares.length;i++){
// 		squares[i].style.background=colors[i];
// 		squares[i].style.display="block";
// 	}
// });
// ea.addEventListener("click",function(){
// 	ea.classList.add("selected");
// 	ha.classList.remove("selected");
// 	me.classList.remove("selected");
// 	numberOfSquares=3;
// 	colors=generateRandomColors(numberOfSquares);
// 	pickedcolor=pickColor();
// 	r.textContent=pickedcolor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background=colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
//
// });
// me.addEventListener("click",function(){
// 	me.classList.add("selected");
// 	ea.classList.remove("selected");
// 	ha.classList.remove("selected");
// 	numberOfSquares=6;
// 	colors=generateRandomColors(numberOfSquares);
// 	pickedcolor=pickColor();
// 	r.textContent=pickedcolor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background=colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
// });
function Reset(numberOfSquares){
	colors=generateRandomColors(numberOfSquares);
	pickedcolor=pickColor();
	r.textContent=pickedcolor;
	squareColors();
	h1.style.background="#399f6d";
	message.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
	h1.style.background="#399f6d";
}


var reset=document.getElementById("reset");
reset.addEventListener("click",function(){
	colors=generateRandomColors(numberOfSquares);
	pickedcolor=pickColor();
	r.textContent=pickedcolor;
	squareColors();
	h1.style.background="#399f6d";
	message.textContent="";
	this.textContent="NEW COLORS";
});
squareColors();
function squareColors(){
	for(var i=0;  i<squares.length ; i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor){
			message.textContent="Correct!!!";
			reset.textContent="Play again?";
			changeColors(clickedcolor);
			h1.style.background= clickedcolor;
		}
		else{
			this.style.background="#232323";
			message.textContent="try again";
		}
	});
	}
}


function changeColors(color){
	for(var i=0;  i<squares.length ; i++){
		squares[i].style.background=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
