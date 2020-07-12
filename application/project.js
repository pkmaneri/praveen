function call() {
	var data = document.getElementsById('callContainer').value;
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.open('post', '/post', true);
	xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	var dataStr = JSON.stringify({
		"calldata" : data
	});
	xmlHttp.send('dataSta')
	xmlHttp.onreadystatechange = function(){
		if (this.readystate == 4) {
			getCall();
		}
	}
}
 function getCall(){
 	var xmlHttp = new XMLHttpRequest()
 	 xmlHttp.open('GET', '/post', true);
 	xmlHttp.send();
 	xmlHttp.onreadystatechange = function(){
		if (this.readystate == 4){
			var jsondata = JSON.parse(this.responseText);
			rendred(jsondata);
		}

	}
}
function renderer(data){
    var olRef = document.getElementById('dataContainer');
    olRef.innerHTML = '';
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        var callData = element.callData;

        var li = document.createElement('li');
        var textNode = document.createTextNode(callData);
        li.appendChild(textNode);
        olRef.appendChild(li);
       
    }
}

getCall();