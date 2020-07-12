function call() {
    var data = document.getElementById('callContainer').value;
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('post', '/post', true);
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var dataStr = JSON.stringify({
        "postData" : data
    });
    xmlHttp.send(dataStr)
    xmlHttp.onreadystatechange = function(){
        if (this.readyState == 4) {
            getCall();
        }
    }
}
 function getCall(){
    var xmlHttp = new XMLHttpRequest()
     xmlHttp.open('GET', '/posts', true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = function(){
        console.log(this)

        if (this.readyState == 4){
            var jsondata = JSON.parse(this.responseText);
            renderer(jsondata);
        }

    }
}
function renderer(data){
    var olRef = document.getElementById('dataContainer');
    olRef.innerHTML = '';
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        var callData = element.postData;
        // var color = 'blue';
        // if(index%2 == 0){
        //     color = 'red';
        // }

        var color = getRandomColor();
        var li = document.createElement('li');
        li.setAttribute("class", "list-group-item");
        li.setAttribute("style", "color:"+color);
        var textNode = document.createTextNode(callData);
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

getCall();