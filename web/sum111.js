var i = 0;
 
function decrementer() {
	if( i<= 0 ) {
		document.getElementById("alert").innerHTML = "value less than zero is not allowed";
		return;
	}
	i--;
	console.log(document.getElementById("pTag"));
	document.getElementById("pTag").innerHTML = i;
}

function incrementer() {
	if( i >= 100000000000 ) {
		document.getElementById("alert").innerHTML = "value more than infinite is not allowed";
		return;
	}
	i++;
	document.getElementById("pTag").innerHTML = i;

}

document.getElementById("pTag").innerHTML = i;
