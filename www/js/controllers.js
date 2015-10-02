angular.module('ViciousUnicorn.controllers', [])

.controller('HomeCtrl', function($scope) {
  $scope.chapters = [{sections: 1, content:'One day, Ekhan went to the mall.'},
  {sections: 2,content:'Two days latter he got married to a woman.'},
  {sections: 3, content:'Three years later, he was so whipped by his womean, he barely left the house.'}];

})

.controller('SettingsCtrl', function($scope,$firebaseObject, Ref) {
  $scope.draggableObjects = [{name:'one'}, {name:'two'}, {name:'three'}];
  var responsesRef = Ref.child('Sagas');
  var responsesObject = $firebaseObject(responsesRef);
  $scope.test = responsesObject;
  $scope.onDragComplete=function(data,evt){
      console.log("drag success, data:", data);
    }
  $scope.onDropComplete = function (index, obj, evt) {
    var otherObj = $scope.draggableObjects[index];
    var otherIndex = $scope.draggableObjects.indexOf(obj);
    $scope.draggableObjects[index] = obj;
    $scope.draggableObjects[otherIndex] = otherObj;
    }
});
