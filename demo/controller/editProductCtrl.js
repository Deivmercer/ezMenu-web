app.controller('editProductCtrl', function ($scope, Upload) {
    var root;
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
    $scope.editProduct = function(){
        if(!$scope.selectProduct){
            alert("Seleziona il prodotto da modificare.");
            return;
        }
        if(!$scope.product_name) {
            alert("Inserire un nome.");
            return;
        }
        if(!$scope.product_price) {
            alert("Inserire il prezzo.");
            return;
        }
        // Non funziona l'aggiornamento dell'immagine, dio merda
        if($scope.product_image)
            Upload.upload({
                url: "edit_product.php",
                data: {"id_p": id_p, "product_name": $scope.product_name, "product_price": $scope.product_price, "product_image": $scope.product_image}
            }).then(function (resp) {
                location.replace("product_list.html");
                //console.log('Success ' + resp.config.data.product_image.name + ' uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.product_image.name);
            });
        else
            $.post("edit_product.php",
                   {"id_p": id_p, "product_name": $scope.product_name, "product_price": $scope.product_price},
                   function(){
                        location.replace("product_list.html");
                   }
            );
    }
});