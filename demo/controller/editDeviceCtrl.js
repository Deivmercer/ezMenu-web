app.controller('editDeviceCtrl', function ($scope) {
    var root;
    var id_p;
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
        $scope.device_name = root.childNodes[i].childNodes[1].firstChild.nodeValue;
        $scope.device_table = parseInt(root.childNodes[i].childNodes[2].firstChild.nodeValue);
        id_d = root.childNodes[i].childNodes[0].firstChild.nodeValue;
    }
    $scope.editDevice = function(){
        if(!$scope.selectDevice){
            alert("Seleziona il dispositivo da modificare.");
            return;
        }
        if(!$scope.device_name) {
            alert("Inserire il nome del dispositivo.");
            return;
        }
        if(!$scope.device_table) {
            alert("Inserire il numero del tavolo.");
            return;
        }
        // Non funziona l'aggiornamento dell'immagine, dio merda
        $.post("edit_device.php",
                {"id_d": id_d, "device_name": $scope.device_name, "device_table": $scope.device_table},
                function(){
                    location.replace("device_list.html");
                }
        );
    }
});