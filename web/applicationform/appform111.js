'use strict';

function showResult() {
	console.log(this);
	document.getElementById('result').innerHTML = 
	document.getElementById('email').value + document.getElementById('password').value;
	
}

var color = "blue";

function changeColor(){
	var anotherColor = "red";
	function swapColors(){
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;

	}
	swapColors();
}

changeColor();


function function_name(argument) {
	function function_name(argument) {
		if (true) {
			color = "ss"
		}
	}
	
	console.log(color)
}
console.log(color)



var loginPage = {
	login : function () {
		
	},
	register : function (

	}
}