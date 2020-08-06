var app = angular.module("ezMenu", ["ngMaterial", "pascalprecht.translate", "ngFileUpload"]);

app.config(['$translateProvider', function ($translateProvider) {  
    $translateProvider.translations('en', {
        "404ERROR": "Page not found.",
        "GET": "Get ezMenu",
        "LANGUAGE": "Language",
        "ENGLISH": "English",
        "ITALIAN": "Italian",
        "DEVICELIST": "Device list",
        "ADDDEVICE": "Add a device",
        "EDITDEVICE": "Edit a device",
        "DELETEDEVICE": "Delete a device",
        "PRODUCTLIST": "Product list",
        "ADDPRODUCT": "Add a product",
        "EDITPRODUCT": "Edit a product",
        "DELETEPRODUCT": "Delete a product",
        "NOTIFICATIONS": "Notifications",
        "CLEARALL": "Clear all",
        "ADDPRODUCT": "Add product",
        "PRODUCTNAME": "Product name",
        "PRODUCTPRICE": "Product price",
        "PRODUCTLIST": "Product list",
        "ADDDEVICE": "Add device",
        "DEVICENAME": "Device name",
        "DEVICETABLE": "Table",
        "QRCODEINSTRUCTIONS": "In order to scan the QR code, you have to open the app on your device and if no other QR code have been scanned the scansion will start automatically. Once you have scanned the QR code, click outside this window.",
        "REGISTEREDDEVICE": "Registered device",
        "UNREGISTEREDDEVICE": "Unregistered device",
        "SEND": "Send",
        "SELECTFILE": "Select a image",
        "SELECT": "Select"
    });
    $translateProvider.translations('it', {
        "404ERROR": "Pagina non trovata.",
        "GET": "Ottieni ezMenu",
        "LANGUAGE": "Lingua",
        "ENGLISH": "Inglese",
        "ITALIAN": "Italiano",
        "DEVICELIST": "Lista dispositivi",
        "ADDDEVICE": "Aggiungi un dispositivo",
        "EDITDEVICE": "Modifica un dispositivo",
        "DELETEDEVICE": "Rimuovi un dispositivo",
        "PRODUCTLIST": "Lista prodotti",
        "ADDPRODUCT": "Aggiungi un prodotto",
        "EDITPRODUCT": "Modifica un prodotto",
        "DELETEPRODUCT": "Elimina un prodotto",
        "NOTIFICATIONS": "Notifiche",
        "CLEARALL": "Cancella tutto",
        "ADDPRODUCT": "Aggiungi un prodotto",
        "PRODUCTNAME": "Nome prodotto",
        "PRODUCTPRICE": "Prezzo prodotto",
        "PRODUCTLIST": "Lista prodotti",
        "ADDDEVICE": "Aggiungi un dispositivo",
        "DEVICENAME": "Nome dispositivo",
        "DEVICETABLE": "Tavolo",
        "QRCODEINSTRUCTIONS": "Per scansionare il codice QR apri l'applicazione sul tuo dispositivo, e se e' il primo avvio la scansione partira' automaticamente. Una volta scannerizzato il file fai click fuori da questa finestra.",
        "REGISTEREDDEVICE": "Dispositivi registrati",
        "UNREGISTEREDDEVICE": "Dispositivi non registrati",
        "SEND": "Invia",
        "SELECTFILE": "Scegli un immagine",
        "SELECT": "Scegli"
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

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

app.config(function($mdIconProvider) {
    $mdIconProvider.fontSet('md', 'material-icons');
});