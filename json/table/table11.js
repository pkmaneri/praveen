		
var jsonData ={
	"items":
		{
			"item":
				[
					{
						"id": "0001",
						"type": "donut",
						"name": "Cake",
						"ppu": 0.55,
						"batters":
							{
								"batter":
									[
										{ "id": "1001", "type": "Regular" },
										{ "id": "1002", "type": "Chocolate" },
										{ "id": "1003", "type": "Blueberry" },
										{ "id": "1004", "type": "Devil's Food" }
									]
							},
						"topping":
							[
								{ "id": "5001", "type": "None" },
								{ "id": "5002", "type": "Glazed" },
								{ "id": "5005", "type": "Sugar" },
								{ "id": "5007", "type": "Powdered Sugar" },
								{ "id": "5006", "type": "Chocolate with Sprinkles" },
								{ "id": "5003", "type": "Chocolate" },
								{ "id": "5004", "type": "Maple" }
							]
					}


				]
		}
}

var batterArr =jsonData.items.item[0].batters.batter;

for(var i = 0; i < batterArr.length; i++) {
	var id = batterArr[i].id;
	var type = batterArr[i].type;


	var tableRef = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

	var rowRef = tableRef.insertRow();

	var cellRef1 = rowRef.insertCell(0);
	var cellRef2 = rowRef.insertCell(1);

	var idText = document.createTextNode(id);
	cellRef1.appendChild(idText);

	var typeText = document.createTextNode(type);
	cellRef2.appendChild(typeText);

}

