function postmaster(){
	var data = document.getElementById('postContainer').value;
	var xmlHttp =new XMLHttpRequest()
	 xmlHttp.open('post', '/post', true);
	 xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	 var dataStr = JSON.stringify({
	 	"postdata":data
	 });
	 xmlHttp.send(dataStr)
	 xmlHttp.onreadyStatechange = function(){ 
	 	if (this.readystate == 4){
	 	getpostMaster()
	 	}
	}
}
function getpostmaster(){
	var xmlHttp =new XMLHttpRequest()
	 xmlHttp.open('get', '/posts', true);
	 xmlHttp.send();
	 xmlHttp.onreadyStatechange = function(){
	 	
	 console.log(this)
	 if (this.readyState == 4){
	 		var jsondata = JSON.parse(this.responseText)
	 		renderer(jsondata);
	 	}
	}
}
 function renderer(data){
 	var olRef = document.getElementById('dataContainer')
 	olRef.innerHTML = '';
	 	for (let index = 0; index < data.length; index++) {
	 	const element = data[index]
	 	 var postmasterdata = element.postData;
	 	 var color = getRandomColor();
        var li = document.createElement('li');
        li.setAttribute("class", "list-group-item");
        li.setAttribute("style", "color:"+color);
        var textNode = document.createTextNode(postmasterdata);
        li.appendChild(textNode);
        olRef.appendChild(li);
	}
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 getpostmaster();