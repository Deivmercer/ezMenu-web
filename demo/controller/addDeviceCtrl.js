app.controller('addDeviceCtrl', function ($scope, $mdDialog, $http) {
    $scope.showPrerenderedDialog = function(ev) {
        if(!$scope.device_name) {
            alert("Inserire un nome per il dispositivo.");
            return;
        }
        if(!$scope.device_table) {
            alert("Inserire il numero del tavolo.");
            return;
        }
        $http.post('add_device.php', 
                    {"device_name": $scope.device_name, "device_table": $scope.device_table}
            ).then(function(data){
                $mdDialog.show({
                    contentElement: '#dialog',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    onRemoving: function (event, removePromise) {
                        location.replace("device_list.html");
                    }
                });
                document.getElementById("qrcode").innerText = "";
                var qrcode = new QRCode(document.getElementById("qrcode"), {width: 300, height: 300});
                qrcode.makeCode($.parseXML(data.data).firstChild.firstChild.firstChild.nodeValue);
            });
    };
});