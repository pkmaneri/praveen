var datajsonArr =[];

function add (){
	var name = document.getElementBy('name').value;
	var company = document.getElementBy('company').value;

	var obj = {
		"name":name,
		"company":company,
	}
	datajsonArr.push(obj);
	rendred();
}

function rendred() {
	var tableRef = document.getElementById('dataTable');
	var tableTbodyRef = tableTbodyRef.getElementsByTagName('tbody')[0];
	var newTableTbodyRef = tableTbodyRef.createElements('tbody');
	 tableRef.replacechild('tableTbodyRef',newTableTbodyRef)

	tableTbodyRef = tableRef.getElementsByTagName('tbody')[0];
	for (var i = 0; i <datajsonArr.length; i++) {
	 if (dataJsonArr[i] != undefined) {
	 	var rowRef =tableTbodyRef.insertRow();
	 	var cellRef1 =rowRef.insertCell(0);
	 	var cellRef2 =rowRef.insertCell(1);
	 	var cellRef3 =rowRef.insertCell(2);

	 	var nameText =document.createTextNode(name);
	 	cellRef1.appendchild(nameText);
	 	var companyText =document.createTextN

	 	var processDelete = function(){
	 		var index =this.gatAttribute('index');
	 		 delete datajsonArr[index];

	 		rendred();
	 	}

	 	var proceeupdate =function(){
	 		var index =this.getAttribute('index')
	 		var obj = datajsonArr[index];

	 		document.getElementById('name').value = obj.name;
	 		document.getElementById('company').value = obj.company;
	 		document.getElementById('updatebutton').setAttribute('index',index);

	 		var deleteButton = document.getElementById("button");
	 		deleteButton.setAttribute('index',i);
	 		deleteButton.ineerHTML=('deleteButton');
	 		deleteButton.addEventlistener('click',processdelete);

	 		var updateButton = document.getElementById("button");
	 		updateButton.setAttribute('index',i);
	 		updateButton.ineerHTML=('deleteButton');
	 		updateButton.addEventlistener('click',processupdate);

	 		cellRef3.appendchild(deleteButton);
	 		cellRef3.appendchild('updateButton')
	 	}
	 }

}
function update (){
	var name = document.getElementBy('name').value;
	var company = document.getElementBy('company').value;

	var obj = {
		"name":name,
		"company":company,
	}
		var index = document.getElementById('updateButton').getAttribute("index");
			datajsonArr[index] = obj;
		rendered();
}