app.controller('deleteProductCtrl', function ($scope) {
    var id_p;
    $.get("get_products.php")
         .then(function(data) {
            root = data.documentElement;
            var namelist = root.childNodes[0].childNodes[1].firstChild.nodeValue;
            for(var i = 1; i < root.childNodes.length; i++)
                namelist += "-" + root.childNodes[i].childNodes[1].firstChild.nodeValue;
            $scope.products = namelist.split('-').map(function(product) {
                return {name: product};
            });
        }
    );
    $scope.showFileName = function() {
        $scope.fileName = $scope.product_image.name;
    }
    $scope.productSelected = function(){
        var i;
        for(i = 0; i < root.childNodes.length && root.childNodes[i].childNodes[1].firstChild.nodeValue != $scope.selectProduct; i++);
        console.log(root.childNodes[i].childNodes[2].firstChild.nodeValue);
        $scope.product_name = root.childNodes[i].childNodes[1].firstChild.nodeValue;
        $scope.product_price = parseInt(root.childNodes[i].childNodes[2].firstChild.nodeValue);
        document.getElementById("productImage").src = root.childNodes[i].childNodes[4].firstChild.nodeValue;
        id_p = root.childNodes[i].childNodes[0].firstChild.nodeValue;
    }
    $scope.deleteProduct = function(ev) {
        if(!$scope.selectProduct) {
            alert("Seleziona un prodotto.");
            return;
        }
        $.post('delete_product.php', 
                {"id_p": id_p},
                function(data){
                    location.replace("product_list.html");
                }
        );
    };
});