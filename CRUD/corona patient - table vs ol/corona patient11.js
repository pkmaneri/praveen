 function submitData(ele) {
 	var tableRefMain = ele.parentNode.parentNode.parentNode.parentNode;
 	var compId =  tableRefMain.querySelector('input[name="compId"]').value;
	var compName =  tableRefMain.querySelector('input[name="compName"]').value;

	var tableRef = tableRefMain.querySelector('table[name="dataTable"]').getElementsByTagName('tbody')[0];

	var rowRef = tableRef.insertRow();

	var cellRef1 = rowRef.insertCell(0);
	var cellRef2 = rowRef.insertCell(1);
	var cellRef3 = rowRef.insertCell(2);

	var compIdText = document.createTextNode(compId);
	cellRef1.appendChild(compIdText);

	var compNameText = document.createTextNode(compName);
	cellRef2.appendChild(compNameText);
	
	
	var processDelete = function () {
		var index = this.parentNode.parentNode.rowIndex;
	 	tableRef.deleteRow(index);
	 }

	 var deleteButton = document.createElement("button");
	 deleteButton.innerHTML = "delete";
	 deleteButton.addEventListener('click', processDelete );
	 cellRef3.appendChild(deleteButton);
 
	 var processEdit = function () {
	 	// tableRefMain.querySelector('input[name="submitDataButton"]').style.display = "none";
	 	// tableRefMain.querySelector('input[name="updateDataButton"]').style.display = "inline";

		var rowRef = this.parentNode.parentNode;
		rowBeingUpdated = rowRef;
		var tdArr = rowRef.getElementsByTagName("td");

		var compId = tdArr[0].innerHTML;
		var compName  = tdArr[1].innerHTML;

		tableRefMain.querySelector('input[name="compId"]').value = compId;
		tableRefMain.querySelector('input[name="compName"]').value = compName;
	
		
	 }

	 var editbutton = document.createElement('button');
	 editbutton.innerHTML = "edit";
	 editbutton.addEventListener('click', processEdit );

	 cellRef3.appendChild(editbutton);


	tableRefMain.querySelector('input[name="compId"]').value = '';
	tableRefMain.querySelector('input[name="compName"]').value = '';
	console.log( compId, compName, tableRef, rowRef, cellRef1, cellRef2, cellRef3,
	 compIdText, compNameText, );
}

function updateData(ele) {

	var tableRefMain = ele.parentNode.parentNode.parentNode.parentNode;
 
	
	if (rowBeingUpdated != null) {
		var compId =  tableRefMain.querySelector('input[name="compId"]').value;
		var compName =  tableRefMain.querySelector('input[name="compName"]').value

		var tdArr = rowBeingUpdated.getElementsByTagName("td");
		tdArr[0].innerHTML = compId;
		tdArr[1].innerHTML = compName;
	

		rowBeingUpdated = null;
		tableRefMain.querySelector('input[name="compId"]').value = '';
		tableRefMain.querySelector('input[name="compName"]').value = '';

		tableRefMain.querySelector('input[name="submitDataButton"]').style.display = "inline";
	 	tableRefMain.querySelector('input[name="updateDataButton"]').style.display = "none";
	}
}



	

