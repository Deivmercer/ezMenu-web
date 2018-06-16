app.controller('productListCtrl', function($scope) {
	var rowspan = 1;
	var colspan = 1;
	$.get("get_products.php",
		function(data) {
			var root = data.documentElement;
			document.getElementById("list").innerHTML += "<md-grid-tile>a</md-grid-tile>"
			for(var i = 0; i < root.childNodes.length; i++)
			{
				// md-colspan='" + colspan + "'
				// document.getElementById("list").innerHTML += "<md-grid-tile><md-grid-tile-header>" + root.childNodes[i].childNodes[0].firstChild.nodeValue + "</md-grid-tile-header>"
				// 										   + "<p style='padding-left: 15px; padding-right: 15px'>" +  root.childNodes[i].childNodes[1].firstChild.nodeValue + ""
				// 										   + "<br>" +  root.childNodes[i].childNodes[2].firstChild.nodeValue + "</p><br>"
				// 										   + "<img src='" +  root.childNodes[i].childNodes[3].firstChild.nodeValue +"'></md-grid-tile><br>";
	// 			if(i % 2 == 0)
	// 				rowspan++;
	// 			colspan++;
			}
		}
	);
});