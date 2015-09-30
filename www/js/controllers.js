angular.module('ViciousUnicorn.controllers', [])

.controller('HomeCtrl', function($scope) {
  $scope.chapters = [{sections: 1, content:'One day, Ekhan went to the mall.'},
  {sections: 2,content:'Two days latter he got married to a woman.'},
  {sections: 3, content:'Three years later, he was so whipped by his womean, he barely left the house.'}];

})

.controller('SettingsCtrl', function($scope,$firebaseObject, Ref) {
  var responsesRef = Ref.child('Sagas');
  var responsesObject = $firebaseObject(responsesRef);
  $scope.test = responsesObject;
});
