app.controller('addProductCtrl', function ($scope, Upload) {
    $scope.showFileName = function() {
        $scope.fileName = $scope.product_image.name;
    }
    $scope.submit = function() {
        if(!$scope.product_name) {
            alert("Inserire un nome.");
            return;
        }
        if(!$scope.product_price) {
            alert("Inserire il prezzo.");
            return;
        }
        if(!$scope.product_image) {
            alert("Selezionare un'immagine.");
            return;
        }
        Upload.upload({
            url: "add_product.php",
            data: {"product_name": $scope.product_name, "product_price": $scope.product_price, "product_image": $scope.product_image}
        }).then(function (resp) {
            location.replace("product_list.html");
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.product_image.name);
        });
    };
});