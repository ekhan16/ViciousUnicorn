angular.module('ViciousUnicorn.controllers', [])

.controller('HomeCtrl', function($scope, $http, helperService) {
  $scope.quizName = 'js/dummyQuiz.js';

  //If you wish, you may create a separate factory or service to call loadQuiz. To keep things simple, i have kept it within controller.
  var loadQuiz = (function (file) {
      $http.get(file)
       .then(function (res) {
           $scope.quiz = res.data.quiz;
           $scope.questions = res.data.questions[0];
           $scope.choice = res.data.questions[0].options;
       });
  }('js/dummyQuiz.js'));

  var loadText = (function(file) {
    $http.get(file)
    .then(function (res) {
      debugger;
      txt = res.data
      var appendTo = angular.element(document.querySelector(".text"));
      appendTo.html(txt);
    });
  }('https://viciousunicorn.firebaseio.com/Sagas/-K0mgiqVcWumS9i-b8Ss/Volume%202%3A%20The%20Path%20of%20Rejection/Chapter%201/Scene%201.json'));

  var nextPage = 2
  $scope.loadMore = function() {
    $http.get('js/pages/page' + nextPage + '.html')
    .then(function(res) {
      nextPage++;
      newTxt = res.data
      var replaceWith = angular.element(document.querySelector(".text"));
      debugger;
      replaceWith.html(newTxt);
    });
  };

  $scope.testResponse = function() {
    $http({method: 'GET', url: 'http://localhost:3000', headers: {'Accept': 'application/json', 'Content-type': 'application/json'}})
    .then(function(res) {
      console.log(res)
    });
  };

  $scope.isCorrect = function(answer) {
    if (answer.isAnswer == true) {
      console.log("Well done")
    }
    else {
      console.log("Try again")
    }
  }

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

