if (typeof window.angular !== 'undefined') {
  if (typeof angular.appControllers === 'undefined') {
    angular.appControllers = angular.module('appControllers', []);
  }

  angular.appControllers.controller('AppCtrl', ['$scope', '$rootScope', '$state', 'dealsDS', function ($scope, $rootScope, $state, dealsDS) {
    $scope.tasks = "LOLAAAA";

    dealsDS.getAllDeals().then(function(tasks){
      debugger;
      $scope.deals = tasks.objects;
    });

    $scope.addDeal = function(){
      $scope.deals.push($scope.newDeal);
      dealsDS.addNewDeal($scope.newDeal).then(function(){
        $scope.newDeal.title = null;
        $scope.newDeal.deadline = null;
      })
    };

  }]);
}
