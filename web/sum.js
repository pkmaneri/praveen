var i = 0;
function incrementer() {
	i++;
	console.log(document.getElementById("pTag"));
	document.getElementById("pTag").innerHTML = i;
}
incrementer();