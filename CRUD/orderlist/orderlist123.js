var toBeUpdatedLiRef = null;
	document.getElementById("updateItemButton").style.display ='none';	
function listItem(){
	var newItemValue = document.getElementById('newItem').value;
	var itemList = document.getElementById('itemList');

	var li = document.createElement('li');
	var text = document.createTextNode(newItemValue);
	var div =document.createElement('span');
	div.appendChild(text);

	var deleteButtonText = document.createTextNode('X');
	var deleteButton = document.createElement('button');
	deleteButton.addEventListener('click', processDelete );
	deleteButton.appendChild(deleteButtonText);
	
	function processDelete() {
		var li = this.parentNode;
		this.parentNode.parentNode.removeChild(li);
	}

	var updateButtontext = document.createTextNode('Y');
	var updateButton = document.createElement('button');
	updateButton.addEventListener('click', processUpdate);
	updateButton.appendChild(updateButtontext);

	 function processUpdate() {
	 	console.log(this);
		var li =this.parentNode;
		toBeUpdatedLiRef = li;

		li.getElementsByTagName('button')[0].style.display ='none';

		var spanArr = li.getElementsByTagName('span');
		console.log(spanArr[0]);
		var spanText = spanArr[0].innerHTML;
		console.log(spanText);
		document.getElementById('newItem').value = spanText;
		document.getElementById('updateItemButton').style.display ='inline';
		document.getElementById('listItemButton').style.display ='none';
		document.getElementById('newItem').focus();


	}
	

	
	li.appendChild(div);
	li.appendChild(deleteButton);
	li.appendChild(updateButton);
	itemList.appendChild(li);

	 document.getElementById('newItem').value ='';
	 document.getElementById('newItem').focus();
}
function updateItem(){
	var updateItemValue = document.getElementById('newItem').value;
 	toBeUpdatedLiRef.getElementsByTagName('span')[0].innerHTML = updateItemValue;
 	toBeUpdatedLiRef.getElementsByTagName('button')[0].style.display ='inline';
	document.getElementById('listItemButton').style.display ='inline';
	document.getElementById('updateItemButton').style.display ='none';
	 document.getElementById('newItem').value ='';
	 document.getElementById('newItem').focus();


}

