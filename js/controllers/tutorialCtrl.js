angular.module("tutorialCtrlModule",[])

.controller("TutorialCtrl",["$scope" ,function($scope){
    //our work is done
    $scope.name = "spyros"
    $scope.tutorialObject = {};
    $scope.tutorialObject.title = "Main page";
    $scope.tutorialObject.subtitle = "Sub Title";

    $scope.tutorialObject.bindOutput = 2;

    
    $scope.tutorialObject.firstname = "Spyros";
    $scope.tutorialObject.lastname = "Linardakis";

    $scope.timesTwo = function() {
        $scope.tutorialObject.bindOutput *= 2;
    }

}])

.controller("TutorialCtrl2", ["$scope", function($scope){
    $scope.secondTutorial = "This is the second controller";
}]);


