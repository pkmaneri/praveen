var rowBeingUpdated = null;

function submitData() {
	var companyName = document.getElementById('companyName').value;
	var companyId = document.getElementById('companyId').value;
	
	
	var tableRef = document.getElementById('dataTable')
	.getElementsByTagName('tbody')[0];

	var rowRef = tableRef.insertRow();

	
	var cellRef1 = rowRef.insertCell(0);
	var cellRef2 = rowRef.insertCell(1);
	
	
	var companyNameText = document.createTextNode(companyName);
	cellRef1.appendChild(companyNameText);
	var companyIdText = document.createTextNode(companyId);
	cellRef2.appendChild(companyIdText);

	
	var processDelete = function () {
		var index = this.parentNode.parentNode.rowIndex;
	 	tableRef.deleteRow(index);
	 }

	 var deleteButton = document.createElement("button");
	 deleteButton.innerHTML = "delete";
	 deleteButton.addEventListener('click', processDelete );
	
	 cellRef1.appendChild(deleteButton);

	 var processEdit = function () {
	 	document.getElementById('submitDataButton').style.display = "none";
	 	document.getElementById('updateDataButton').style.display = "inline";

		var rowRef = this.parentNode.parentNode;
		rowBeingUpdated = rowRef;
		var tdArr = rowRef.getElementsByTagName("td");

		var companyPage = tdArr[0].innerHTML;
		
		document.getElementById('companyName').value = companyName;

		var companyId = tdArr[1].innerHTML;
		
		document.getElementById('companyId').value = companyId;
		
		
	 }

	 var editbutton = document.createElement('button');
	 editbutton.innerHTML = "edit";
	 editbutton.addEventListener('click', processEdit );

	 cellRef1.appendChild(editbutton);

	console.log( companyName, companyId,  tableRef, rowRef, cellRef1,cellRef2,  
	 companyNameText,companyIdText  );
}

function updateData() {
	if (rowBeingUpdated != null) {
		var companyPage = document.getElementById('companyName').value;
		var companyid = document.getElementById('companyId').value;
		

		
		// reset
		rowBeingUpdated = null;
		document.getElementById('companyName').value = '';
		document.getElementById('companyId').value = '';


		
	}
}


submitData();
// document.getElementById('updateDataButton').style.display = "none";
