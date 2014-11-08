if (typeof window.angular !== 'undefined') {
  if (typeof angular.appControllers === 'undefined') {
    angular.appControllers = angular.module('appControllers', []);
  }

  angular.appControllers.controller('AppCtrl', ['$scope', '$rootScope', '$state', 'dealsDS', function ($scope, $rootScope, $state, dealsDS) {
    $scope.tasks = "LOLAAAA";

    // TasksDS.getAllTasks().then(function(tasks){
    //   $scope.tasks = tasks;
    // });

    $scope.deals = [
      {title: "Don't drink teckila", deadline: new Date()},
      {title: "Buy an a new liver", deadline: new Date()}
    ];

    $scope.addDeal = function(){
      $scope.deals.push($scope.newDeal);
      dealsDS.addNewDeal($scope.newDeal).then(function(){
        $scope.newDeal.title = null;
        $scope.newDeal.deadline = null;
      })
    };

  }]);
}
