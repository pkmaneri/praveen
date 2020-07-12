function submitData() {
	var empId = document.getElementById('empId').value;
	var empName = document.getElementById('empName').value;
	var empContact = document.getElementById('empContact').value;
	
	//get table refrence tbody
	var tableRef = document.getElementById('dataTable')
	.getElementsByTagName('tbody')[0];

	var rowRef = tableRef.insertRow();

	//
	var cellRef1 = rowRef.insertCell(0);
	var cellRef2 = rowRef.insertCell(1);
	var cellRef3 = rowRef.insertCell(2);

	var empIdText = document.createTextNode(empId);
	cellRef1.appendChild(empIdText);

	var empNameText = document.createTextNode(empName);
	cellRef2.appendChild(empNameText);
	
	var empContactText = document.createTextNode(empContact);
	cellRef3.appendChild(empContactText);

	console.log(empId, empName,empContact, tableRef, rowRef, cellRef1, cellRef2,cellRef3,
	 empIdText, empNameText, empContactText
		);
}

