app.controller("footerCtrl", function ($scope, $translate) {
    $scope.setItalian = function() {
        $translate.use("it");
    }
    $scope.setEnglish = function() {
        $translate.use("en");
    }
});