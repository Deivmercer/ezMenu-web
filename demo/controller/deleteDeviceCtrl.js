app.controller('deleteDeviceCtrl', function ($scope) {
    var id_d;
    $.get("get_devices.php")
         .then(function(data) {
            root = data.documentElement;
            var namelist = root.childNodes[0].childNodes[1].firstChild.nodeValue;
            for(var i = 1; i < root.childNodes.length; i++)
                namelist += "-" + root.childNodes[i].childNodes[1].firstChild.nodeValue;
            $scope.devices = namelist.split('-').map(function(device) {
                return {name: device};
            });
        }
    );
    $scope.showFileName = function() {
        $scope.fileName = $scope.product_image.name;
    }
    $scope.deviceSelected = function(){
        var i;
        for(i = 0; i < root.childNodes.length && root.childNodes[i].childNodes[1].firstChild.nodeValue != $scope.selectDevice; i++);
        console.log(root.childNodes[i]);
        $scope.device_name = root.childNodes[i].childNodes[1].firstChild.nodeValue;
        $scope.table_n = parseInt(root.childNodes[i].childNodes[2].firstChild.nodeValue);
        id_d = root.childNodes[i].childNodes[0].firstChild.nodeValue;
    }
    $scope.deleteDevice = function(ev) {
        if(!$scope.selectDevice) {
            alert("Seleziona un dispositivo.");
            return;
        }
        $.post('delete_device.php', 
                {"id_d": id_d},
                function(data){
                    location.replace("device_list.html");
                }
        );
    };
});