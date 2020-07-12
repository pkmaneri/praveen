var datajsonArr = [];
 
function add() {
	var age = document.getElementById('age').value;
	var name = document.getElementById('name').value;
	var sex = document.getElementById('sex').value;
	var mobile = document.getElementById('mobile').value;
	var obj ={
		"name": name,
		"age" : age,
		"mobile":mobile,
		"sex": sex,
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
			var cellRef4 = rowRef.insertCell(3);
			var cellRef5 = rowRef.insertCell(4); 

			var name = datajsonArr[i].name;
			var age = datajsonArr[i].age;
			var sex = datajsonArr[i].sex;
			var mobile = datajsonArr[i].mobile;

			cellRef1.appendChild(document.createTextNode(name));
			cellRef2.appendChild(document.createTextNode(age));
			cellRef3.appendChild(document.createTextNode(sex));
			cellRef4.appendChild(document.createTextNode(mobile));
	
			var processDelete = function(){
				var index =  this.getAttribute('index');
				delete datajsonArr[index];
				rendered();

			}
	 		var processUpdate = function () {
		 		var index =this.getAttribute('index');
		 		var obj = datajsonArr[index]

				document.getElementById('name').value = obj.name;
				document.getElementById('age').value = obj.age;
				document.getElementById('sex').value = obj.sex;
				document.getElementById('mobile').value = obj.mobile;
				document.getElementById('updateButton').setAttribute("index",index);
		 	}
		 	 var deleteButton = document.createElement('Button');
		 	 deleteButton.innerHTML ="delete";
		 	 deleteButton.setAttribute("index",i);		 	
		 	 deleteButton.addEventListener('click',processDelete);
		 	 cellRef5.appendChild(deleteButton);

		 	 var updateButton = document.createElement("button");
			 updateButton.innerHTML = "update";
			 updateButton.setAttribute("index",i);
			 updateButton.addEventListener('click', processUpdate );			
			 cellRef5.appendChild(updateButton);		 	 

	
 		}
 	}
 }

 function update() {
	var age = document.getElementById('age').value;
	var name = document.getElementById('name').value;
	var sex = document.getElementById('sex').value;
	var mobile = document.getElementById('mobile').value;
	var obj ={
		"name": name,
		"age" : age,
		"mobile":mobile,
		"sex":sex
	}
	
	var index = document.getElementById('updateButton').getAttribute("index");
	datajsonArr[index] = obj;
	rendered();
}