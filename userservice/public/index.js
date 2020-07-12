
function post() {
    var data = document.getElementById('postContainer').value;
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('POST', '/post', true);
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var dataStr = JSON.stringify({
        "postData" : data
    });
    xmlHttp.send(dataStr);
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            getPosts();            
        }
    }
}

function getPosts() {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', '/posts', true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            var jsonData = JSON.parse(this.responseText);
            renderer(jsonData)            
        }
    }
}


function renderer(data){
    var olRef = document.getElementById('dataContainer');
    olRef.innerHTML = '';
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        var postData = element.postData;

        var li = document.createElement('li');
        var textNode = document.createTextNode(postData);
        li.appendChild(textNode);
        olRef.appendChild(li);
       
    }
}

getPosts();