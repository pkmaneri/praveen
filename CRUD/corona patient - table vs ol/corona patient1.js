 function submitData(ele) {
 	var tableRefMain = ele.parentNode.parentNode.parentNode.parentNode;
 	var empId =  tableRefMain.querySelector('input[name="empId"]').value;
	var empName =  tableRefMain.querySelector('input[name="empName"]').value;
	var empAge =  tableRefMain.querySelector('input[name="empAge"]').value;

	var tableRef = tableRefMain.querySelector('table[name="dataTable"]').getElementsByTagName('tbody')[0];

	var rowRef = tableRef.insertRow();

	var cellRef1 = rowRef.insertCell(0);
	var cellRef2 = rowRef.insertCell(1);
	var cellRef3 = rowRef.insertCell(2);
	var cellRef4 = rowRef.insertCell(3);

	var empIdText = document.createTextNode(empId);
	cellRef1.appendChild(empIdText);

	var empNameText = document.createTextNode(empName);
	cellRef2.appendChild(empNameText);
	
	var empAgeText = document.createTextNode(empAge);
	cellRef3.appendChild(empAgeText);

	var processDelete = function () {
		var index = this.parentNode.parentNode.rowIndex;
	 	tableRef.deleteRow(index);
	 }

	 var deleteButton = document.createElement("button");
	 deleteButton.innerHTML = "delete";
	 deleteButton.addEventListener('click', processDelete );
	 cellRef4.appendChild(deleteButton);
 
	 var processEdit = function () {
	 	// tableRefMain.querySelector('input[name="submitDataButton"]').style.display = "none";
	 	// tableRefMain.querySelector('input[name="updateDataButton"]').style.display = "inline";

		var rowRef = this.parentNode.parentNode;
		rowBeingUpdated = rowRef;
		var tdArr = rowRef.getElementsByTagName("td");

		var empId = tdArr[0].innerHTML;
		var empName  = tdArr[1].innerHTML;
		var empAge = tdArr[2].innerHTML;

		tableRefMain.querySelector('input[name="empId"]').value = empId;
		tableRefMain.querySelector('input[name="empName"]').value = empName;
		tableRefMain.querySelector('input[name="empAge"]').value = empAge;
	
		// document.getElementById('empId').value = empId;
		// document.getElementById('empName').value = empName;
		// document.getElementById('empAge').value = empAge;
		
	 }

	 var editbutton = document.createElement('button');
	 editbutton.innerHTML = "edit";
	 editbutton.addEventListener('click', processEdit );

	 cellRef4.appendChild(editbutton);


	tableRefMain.querySelector('input[name="empId"]').value = '';
	tableRefMain.querySelector('input[name="empName"]').value = '';
	tableRefMain.querySelector('input[name="empAge"]').value = '';
	console.log( empId, empName, empAge, tableRef, rowRef, cellRef1, cellRef2, cellRef3, cellRef4, 
	 empIdText, empNameText, );
}

function updateData(ele) {

	var tableRefMain = ele.parentNode.parentNode.parentNode.parentNode;
 
	
	if (rowBeingUpdated != null) {
		var empId =  tableRefMain.querySelector('input[name="empId"]').value;
		var empName =  tableRefMain.querySelector('input[name="empName"]').value;
		var empAge =  tableRefMain.querySelector('input[name="empAge"]').value;

		var tdArr = rowBeingUpdated.getElementsByTagName("td");
		tdArr[0].innerHTML = empId;
		tdArr[1].innerHTML = empName;
		tdArr[2].innerHTML = empAge

		rowBeingUpdated = null;
		tableRefMain.querySelector('input[name="empId"]').value = '';
		tableRefMain.querySelector('input[name="empName"]').value = '';
		tableRefMain.querySelector('input[name="empAge"]').value = '';
		// tableRefMain.querySelector('input[name="submitDataButton"]').style.display = "inline";
	 // 	tableRefMain.querySelector('input[name="updateDataButton"]').style.display = "none";
	}
}



	

