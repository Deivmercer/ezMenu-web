app.controller('languageSelectorCtrl', function ($scope, $translate) {

    $scope.languageSelected = function(){
        if($scope.selectLanguage == 1)
            $translate.use("it");
        else if($scope.selectLanguage == 2)
            $translate.use("en");
    }
});