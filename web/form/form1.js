function showResult() {
	console.log(this);
	document.getElementById('result').innerHTML = 
	document.getElementById('fName').value + document.getElementById('lName').value;
}

