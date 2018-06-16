var app = angular.module("prova", []);

app.controller("provaCtrl", function ($scope) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 200,
        height: 200
    });
    $scope.makeCode = function() {
        var url = document.getElementById("text");
        if (!url.value) {
            alert("Input a text");
            url.focus();
            return;
        }
        qrcode.makeCode(url.value);
    };
});