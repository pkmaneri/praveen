var datajsonArr = [];
 
function add() {
	
	var email = document.getElementById('email').value;
	var name = document.getElementById('name').value;
	
	var obj ={
		"name": name,
		"email":email,
	}
	datajsonArr.push(obj);
	rendered();
 }

 function rendered () {
	 var tableRef = document.getElementById('dataTable');
	 var tableTbodyRef = tableRef.getElementsByTagName('tbody')[0];
	 var newTableTbodyRef = document.createElement('tbody');
	 tableRef.replaceChild(newTableTbodyRef, tableTbodyRef);

	 tableTbodyRef =tableRef.getElementsByTagName('tbody')[0];

	for (var i = 0; i < datajsonArr.length; i++) {
		if(datajsonArr[i] != undefined){
			var rowRef = tableTbodyRef.insertRow();

			var cellRef1 = rowRef.insertCell(0);
			var cellRef2 = rowRef.insertCell(1);
			var cellRef3 = rowRef.insertCell(2);
			var name = datajsonArr[i].name;
			var email = datajsonArr[i].email;
			
			cellRef1.appendChild(document.createTextNode(name));
			cellRef2.appendChild(document.createTextNode(email));
			
			var processDelete = function(){
				var index =  this.getAttribute('index');
				delete datajsonArr[index];
				rendered();
			}
	 		var processupdate = function () {
		 		var index =this.getAttribute('index');
		 		var obj = datajsonArr[index]

				document.getElementById('name').value = obj.name;
				document.getElementById('email').value = obj.email;
				
				document.getElementById('updateButton').setAttribute("index",index);
		 	}
		 	 var deleteButton = document.createElement('Button');
		 	 deleteButton.innerHTML ="delete";
		 	 deleteButton.setAttribute("index",i);		 	
		 	 deleteButton.addEventListener('click',processDelete);
		 	 cellRef3.appendChild(deleteButton);

		 	 var updateButton = document.createElement("button");
			 updateButton.innerHTML = "update";
			 updateButton.setAttribute("index",i);
			 updateButton.addEventListener('click', processupdate );			
			 cellRef3.appendChild(updateButton);		 	 
	
 		}
 	}
 }

 function update() {
	var email = document.getElementById('email').value;
	var name = document.getElementById('name').value;
	
	var obj ={
		"name": name,
		"email" : email,		
	}
	
	var index = document.getElementById('updateButton').getAttribute("index");
	datajsonArr[index] = obj;
	rendered();
}