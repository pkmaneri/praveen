var dataJsonArr = [];
//  [
// 	{
// 		"name" : "praveen",
// 		"age":2
// 	},
// 	{
// 		"name" : "praveen",
// 		"age":2
// 	}
// ];
	
function add(
	) {
	var age = document.getElementById('age').value;
	var name = document.getElementById('name').value;
	var obj = {
		"name" : name,
		"age": age
	} 

	dataJsonArr.push(obj);

	rendered();
}

function rendered() {
	//get table refrence tbody
	var tableRef = document.getElementById('dataTable');
	var tableTbodyRef = tableRef.getElementsByTagName('tbody')[0];

	var newTableTbodyRef = document.createElement("tbody");
	tableRef.replaceChild(newTableTbodyRef, tableTbodyRef);

	tableTbodyRef = tableRef.getElementsByTagName('tbody')[0];

	for (var i = 0; i < dataJsonArr.length; i++) {
		if (dataJsonArr[i] != undefined) {
			var rowRef = tableTbodyRef.insertRow();
			var cellRef1 = rowRef.insertCell(0);
			var cellRef2 = rowRef.insertCell(1);
			var cellRef3 = rowRef.insertCell(2);
			var name = dataJsonArr[i].name;
			var age = dataJsonArr[i].age;

			var nameText = document.createTextNode(name);
			cellRef1.appendChild(nameText);

			var ageText = document.createTextNode(age);
			cellRef2.appendChild(ageText);

			var processDelete = function () {
				var index = this.getAttribute("index");
				delete dataJsonArr[index];
				rendered();
			 }

			var processupdate = function () {


				var index = this.getAttribute("index");
				var obj = dataJsonArr[index];

				document.getElementById('age').value = obj.age;
				document.getElementById('name').value = obj.name;

				document.getElementById('updateButton').setAttribute("index", index);

			}

			 var deleteButton = document.createElement("button");
			 deleteButton.innerHTML = "delete";
			 deleteButton.setAttribute("index",i);
			 deleteButton.addEventListener('click', processDelete );

			  var updateButton = document.createElement("button");
			 updateButton.innerHTML = "update";
			 updateButton.setAttribute("index",i);
			 updateButton.addEventListener('click', processupdate );
			
			 cellRef3.appendChild(deleteButton);
			 cellRef3.appendChild(updateButton);
		}

	}

}


function update() {
	var age = document.getElementById('age').value;
	var name = document.getElementById('name').value;
	var obj = {
		"name" : name,
		"age": age
	} 

	var index = document.getElementById('updateButton').getAttribute("index");
	dataJsonArr[index] = obj;
	document.getElementById('updateButton').style.display = "none";


	rendered();
}



document.getElementById('updateButton').style.display = "none";
