app.controller('productListCtrl', function($scope) {
	$scope.products = [];
	$.get("get_products.php",
        function(data) {
            var root = data.documentElement;
            for(var i = 0; i < root.childNodes.length; i++)
            {
                    $scope.products.push({"name": root.childNodes[i].childNodes[1].firstChild.nodeValue,
										  "price": root.childNodes[i].childNodes[2].firstChild.nodeValue,
										  "currency": root.childNodes[i].childNodes[3].firstChild.nodeValue,
										  "image": root.childNodes[i].childNodes[4].firstChild.nodeValue});
                
			}
			console.log($scope.products);
        }
    );
});