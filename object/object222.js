var rowBeingUpdated = null;


function submitData() {
	var applicationForm = document.getElementById('applicationForm').value;
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var fatherName = document.getElementById('fatherName').value;
	var motherName = document.getElementById('motherName').value;
	var mobileNumber = document.getElementById('mobileNumber').value;
	var emailId = document.getElementById('emailId').value;
	
	
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
	var cellRef7 = rowRef.insertCell(6);
	var cellRef8 = rowRef.insertCell(7);
	
	
	var applicationFormText = document.createTextNode(applicationForm);
	cellRef1.appendChild(applicationFormText);

	var firstNameText = document.createTextNode(firstName);
	cellRef2.appendChild(firstNameText);

	var lastNameText = document.createTextNode(lastName);
	cellRef3.appendChild(lastNameText);

	var fatherNameText = document.createTextNode(fatherName);
	cellRef4.appendChild(fatherNameText);

	var motherNameText = document.createTextNode(motherName);
	cellRef5.appendChild(motherNameText);

	var mobileNumberText = document.createTextNode(mobileNumber);
	cellRef6.appendChild(mobileNumberText);

	var emailIdText = document.createTextNode(emailId);
	cellRef7.appendChild(emailIdText);

	var processDelete = function () {
		var index = this.parentNode.parentNode.rowIndex;
		tableRef.deleteRow(index);

	 }

	 var deleteButton = document.createElement("button");
	 deleteButton.innerHTML = "delete";
	 deleteButton.addEventListener('click', processDelete );
	
	 cellRef8.appendChild(deleteButton);

	 	var processEdit = function () {
	 	document.getElementById('submitDataButton').style.display = "inline";
	 	document.getElementById('updateDataButton').style.display = "none";

		var rowRef = this.parentNode.parentNode;
		rowBeingUpdated = rowRef;
		var tdArr = rowRef.getElementsByTagName("td");

		var applicationForm = tdArr[0].innerHTML;
		var firstName = tdArr[1].innerHTML;
		var lastName = tdArr[2].innerHTML;
		var fatherName = tdArr[3].innerHTML;
		var motherName = tdArr[4].innerHTML;
		var mobileNumber = tdArr[5].innerHTM;
		var emailId = tdArr[6].innerHTML;

		document.getElementById('applicationForm').value = applicationForm;
		document.getElementById('firstName').value = firstName;
		document.getElementById('lastName').value = lastName;
		document.getElementById('fatherName').value = fatherName;
		document.getElementById('motherName').value = motherName;
		document.getElementById('mobileNumber').value = mobileNumber;
		document.getElementById('emailId').value = emailId; 		 
	 }

	  var editButton = document.createElement("button");
	 editButton.innerHTML = "edit";
	 editButton.addEventListener('click', processEdit );
	
	 cellRef8.appendChild(editButton);

	console.log( applicationForm, 
		firstName,lastName,fatherName,motherName,mobileNumber,emailId,tableRef,rowRef,
		 cellRef1,cellRef2,cellRef3,cellRef4,cellRef5,cellRef6,cellRef7,cellRef8,
	 applicationFormText,lastNameText,fatherNameText,motherNameText,mobileNumberText,firstNameText,
	emailIdText);
}

function updateData() {
	if (rowBeingUpdated != null) {
		var applicationForm = document.getElementById('applicationForm').value;
		var firstName = document.getElementById('firstName').value;
		var lastName = document.getElementById('lastName').value;
		var fatherName = document.getElementById('fatherName').value;
		var motherName = document.getElementById('motherName').value;
		var mobileNumber = document.getElementById('mobileNumber').value;
		var emailId = document.getElementById('emailId').value;		
		var tdArr = rowBeingUpdated.getElementsByTagName("td");
		tdArr[0].innerHTML = applicationForm;
		tdArr[1].innerHTML = firstName;
		tdArr[2].innerHTML = lastName;
		tdArr[3].innerHTML = fatherName;
		tdArr[4].innerHTML = motherName;
		tdArr[5].innerHTML = mobileNumber;
		tdArr[6].innerHTML = emailId;
		
		// reset
		rowBeingUpdated = null;
		document.getElementById('applicationForm').value = '';
		document.getElementById('firstName').value = '';
		document.getElementById('lastName').value = '';
		document.getElementById('fatherName').value = '';
		document.getElementById('motherName').value = '';
		document.getElementById('mobileNumber').value = '';
		document.getElementById('emailId').value = '';
		document.getElementById('submitDataButton').style.display = "none";
		document.getElementById('updateDataButton').style.display = "inline";

	}
}


submitData();
document.getElementById("updateDataButton").style.display = "none";


