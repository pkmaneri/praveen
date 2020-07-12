var i = 15;
 
function incrementer() {
	if( i>= 15 ) {
		document.getElementById("alert").innerHTML = "value more than 15 is not allowed";
		return;
	}
	i++;
	console.log(document.getElementById("pTag"));
	document.getElementById("pTag").innerHTML = i;
}

function decrementer() {
	if( i <= 0 ) {
		document.getElementById("alert").innerHTML = "value less than 0 is not allowed";
		return;
	}
	i--;
	document.getElementById("pTag").innerHTML = i;

}

document.getElementById("pTag").innerHTML = i;
