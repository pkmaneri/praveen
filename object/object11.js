var rowBeingUpdated = null;

function submitData() {
	var companyPage = document.getElementById('companyPage').value;
	var companyName = document.getElementById('companyName').value;
	var companyProfile = document.getElementById('companyProfile').value;
	var companyId = document.getElementById('companyId').value;
	var companyEmail = document.getElementById('companyEmail').value;
	
	
	var tableRef = document.getElementById('dataTable')
	.getElementsByTagName('tbody')[0];

	var rowRef = tableRef.insertRow();

	//
	var cellRef1 = rowRef.insertCell(0);
	var cellRef2 = rowRef.insertCell(1);
	var cellRef3 = rowRef.insertCell(2);
	var cellRef4 = rowRef.insertCell(3);
	var cellRef5 = rowRef.insertCell(4);
	var cellRef6 = rowRef.insertCell(5);
	
	var companyPageText = document.createTextNode(companyPage);
	cellRef1.appendChild(companyPageText);

	var companyNameText = document.createTextNode(companyName);
	cellRef2.appendChild(companyNameText);

	var companyProfileText = document.createTextNode(companyProfile);
	cellRef3.appendChild(companyProfileText);

	var companyIdText = document.createTextNode(companyId);
	cellRef4.appendChild(companyIdText);

	var companyEmailText = document.createTextNode(companyEmail);
	cellRef5.appendChild(companyEmailText);

	var processDelete = function () {
		var index = this.parentNode.parentNode.rowIndex;
	 	tableRef.deleteRow(index);
	 }

	 var deleteButton = document.createElement("button");
	 deleteButton.innerHTML = "delete";
	 deleteButton.addEventListener('click', processDelete );
	
	 cellRef6.appendChild(deleteButton);

	 var processEdit = function () {
	 	document.getElementById('submitDataButton').style.display = "none";
	 	document.getElementById('updateDataButton').style.display = "inline";

		var rowRef = this.parentNode.parentNode;
		rowBeingUpdated = rowRef;
		var tdArr = rowRef.getElementsByTagName("td");

		//step 1 - read values of row columns
		var companyPage = tdArr[0].innerHTML;
		var companyName = tdArr[1].innerHTML;
		var companyProfile = tdArr[2].innerHTML;
		var companyId = tdArr[3].innerHTML;
		var companyEmail = tdArr[4].innerHTML;

		//step 2 - fill values to input field so that user can modify
		document.getElementById('companyPage').value = companyPage;
		document.getElementById('companyName').value = companyName;
		document.getElementById('companyProfile').value = companyProfile;
		document.getElementById('companyId').value = companyId;
		document.getElementById('companyEmail').value = companyEmail;
	 	
	 }

	 var editbutton = document.createElement('button');
	 editbutton.innerHTML = "edit";
	 editbutton.addEventListener('click', processEdit );

	 cellRef6.appendChild(editbutton);

	console.log( companyPage, companyName, companyProfile, companyId,companyEmail, tableRef, rowRef, cellRef1, cellRef2, cellRef3, cellRef4, 
	 companyPage, companyNameText, companyProfileText, companyIdText,companyEmailText
	 );
}

function updateData() {
	//step 3 - update the modified values in the table row column
	if (rowBeingUpdated != null) {
		var companyPage = document.getElementById('companyPage').value;
		var companyName = document.getElementById('companyName').value;
		var companyProfile = document.getElementById('companyProfile').value;
		var companyId = document.getElementById('companyId').value;
		var companyEmail = document.getElementById('companyEmail').value;
		var tdArr = rowBeingUpdated.getElementsByTagName("td");
		tdArr[0].innerHTML = companyPage;

		// reset
		rowBeingUpdated = null;
		document.getElementById('companyPage').value = '';
		document.getElementById('companyName').value = '';
		document.getElementById('companyProfile').value = '';
		document.getElementById('companyId').value = '';
		document.getElementById('companyEmail').value = '';
		document.getElementById('submitDataButton').style.display = "inline";
		document.getElementById('updateDataButton').style.display = "none";

	}
}


submitData();
document.getElementById('updateDataButton').style.display = "none";
