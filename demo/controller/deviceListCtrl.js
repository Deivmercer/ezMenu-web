app.controller('deviceListCtrl', function ($scope) {
    $scope.registeredDevice = [];
    $scope.unregisteredDevice = [];
    $.get("get_devices.php",
        function(data) {
            var root = data.documentElement;
            for(var i = 0; i < root.childNodes.length; i++)
            {
                if(root.childNodes[i].childNodes[3].firstChild.nodeValue == 1)
                    $scope.registeredDevice.push({
                                                    "name": root.childNodes[i].childNodes[1].firstChild.nodeValue,
                                                    "table_n": root.childNodes[i].childNodes[2].firstChild.nodeValue});
                else if(root.childNodes[i].childNodes[3].firstChild.nodeValue == 0)
                    $scope.unregisteredDevice.push({
                        "name": root.childNodes[i].childNodes[1].firstChild.nodeValue,
                        "table_n": root.childNodes[i].childNodes[2].firstChild.nodeValue});
            }
            console.log($scope.registeredDevice);
        }
    );
});