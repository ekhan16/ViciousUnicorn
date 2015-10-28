angular.module('ViciousUnicorn.controllers', [])

.controller('HomeCtrl', function($scope, $http, helperService) {
  $scope.quizName = 'js/dummyQuiz.js';


// var selectKey = function(integer) {
//   firebaseKeys = ["-K0rgU249rAUmFT7isk2", "-K0rgU0ulCQAQDeLbleC"];
//   return firebaseKeys[integer]
// };
var orderedScenes = []
var populateOrderedScenes = (function(file) {
  $http.get(file)
  .then(function(res) {
    var obj = res.data
    for (var key in obj )
      if (obj.hasOwnProperty(key)) {
        var volume = res.data[key];
        console.log(volume)
        for (var contents in volume) {
          if (volume.hasOwnProperty(contents)) {
            contents = volume[contents]
            console.log(contents)
            for (var chapters in contents) {
              chapters = contents[chapters]
              console.log(chapters)
              for (var scenes in chapters) {
                scenes = chapters[scenes]
                console.log(scenes)
                for (var scene in scenes) {
                  scene = scenes[scene]
                  console.log(scene)
                  orderedScenes.push(scene)
                }
              }
            }
          }
        }
      }
      debugger;
      loadText();
    });
  }('https://viciousunicorn.firebaseio.com/Sagas.json'));

  var loadText = (function() {
      txt = orderedScenes[0]
      var appendTo = angular.element(document.querySelector(".text"));
      appendTo.html(txt);
  });

  var nextPage = 1
  $scope.loadMore = function() {
      newTxt = orderedScenes[nextPage]
      nextPage++
      debugger;
      var replaceWith = angular.element(document.querySelector(".text"));
      replaceWith.html(newTxt);
    };

   $scope.loadQuiz = function () {
    debugger;
      $http.get('js/dummyQuiz.js')
       .then(function (res) {
           $scope.quiz = res.data.quiz;
           $scope.questions = res.data.questions[0];
           $scope.choice = res.data.questions[0].options;
       });
       loadMore();
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

