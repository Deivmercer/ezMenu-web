app.controller('homeCtrl', function ($scope) {
  $scope.submit = function() {
    if ($scope.form.file.$valid && $scope.file) {
      $scope.upload($scope.file);
    }
  };
  //TODO: togliere i permessi della cartella uploaded da everyone e farlo funzionare comunque
  $scope.upload = function (file) {
      Upload.upload({
          url: 'file_upload.php',
          data: {file: file, 'username': $scope.username}
      }).then(function (resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
      }, function (resp) {
          console.log('Error status: ' + resp.status);
      }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
  };
});