app.controller('productListCtrl', function($scope) {
	$.get("get_products.php",
		function(data) {
			var root = data.documentElement;
			for(var i = 0; i < root.childNodes.length; i++)
			{
				document.getElementById("list").innerHTML += "<div class='md-list-item-text' style='padding-top:10 px;'><md-card><md-card-title>" + root.childNodes[i].childNodes[1].firstChild.nodeValue + "</md-card-title>"
														   + "<p style='padding-left: 15px; padding-right: 15px'>" +  root.childNodes[i].childNodes[2].firstChild.nodeValue + ""
														   + "<br>" +  root.childNodes[i].childNodes[3].firstChild.nodeValue + "</p><br>"
														   + "<img src='" +  root.childNodes[i].childNodes[4].firstChild.nodeValue +"'></md-card></div><br>";
			}
		}
	);
});

// app.controller('productListCtrl', function($scope) {
// 	$.get("get_products.php",
// 		function(data) {
// 			var root = data.documentElement;
// 			for(var i = 0; i < root.childNodes.length; i++)
// 			{
// 				//<div class='md-list-item-text' style='height: 400px; width: 300px; padding-top:10 px;'>
// 				document.getElementById("list").innerHTML += "<md-card style='height: 400px; width: 300px; padding-top:10 px;>" 
// 														   + "<md-card-title>" + root.childNodes[i].childNodes[0].firstChild.nodeValue + "</md-card-title>"
// 														   + "<span><p style='border-left: 15px; border-right: 15px'>" +  root.childNodes[i].childNodes[1].firstChild.nodeValue + ""
// 														   + "<br>" +  root.childNodes[i].childNodes[2].firstChild.nodeValue + "</p></span>"
// 														   + "<img src='" +  root.childNodes[i].childNodes[3].firstChild.nodeValue +"'></md-card>";
// 			}
// 		}
// 	);
// });
// app.controller('productListCtrl', function($scope) {
// 	$.get("get_products.php",
// 		function(data) {
// 			var root = data.documentElement;
// 			for(var i = 0; i < root.childNodes.length; i++)
// 			{
// 				document.getElementById("list").innerHTML += "<md-list flex><md-list-item class='md-2-line'>";
// 				for(var j = 0; j < 2; j++)
// 				{
// 					// <div class='md-list-item-text' style='padding-top:10 px;'>
// 					document.getElementById("list").innerHTML += "<md-card style='width: 300px; height: 400px'><md-card-title>" + root.childNodes[i].childNodes[0].firstChild.nodeValue + "</md-card-title>"
// 															+ "<p style='padding-left: 15px; padding-right: 15px'>" +  root.childNodes[i].childNodes[1].firstChild.nodeValue
// 															+ "<br>" +  root.childNodes[i].childNodes[2].firstChild.nodeValue + "</p><br>"
// 															+ "<img src='" +  root.childNodes[i].childNodes[3].firstChild.nodeValue +"'></md-card>";
// 				}
// 				document.getElementById("list").innerHTML += "</md-list-item></md-list>";
// 			}
// 		}
// 	);
// });