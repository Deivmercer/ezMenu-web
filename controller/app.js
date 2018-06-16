var app = angular.module("ezMenu", ["ngMaterial", "pascalprecht.translate"]);

app.config(['$translateProvider', function ($translateProvider) {  
    $translateProvider.translations('en', {
        "GET": "Get ezMenu",
        "LANGUAGES": "Languages",
        "ENGLISH": "English",
        "ITALIAN": "Italian"
    });
    $translateProvider.translations('it', {
        "GET": "Ottieni ezMenu",
        "LANGUAGES": "Lingue",
        "ENGLISH": "Inglese",
        "ITALIAN": "Italiano"
    });
    $translateProvider.preferredLanguage('it');
}]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.enableBrowserColor({
        palette: 'green',
        hue: '800'
    });
    $mdThemingProvider.theme('default').primaryPalette('green');
});