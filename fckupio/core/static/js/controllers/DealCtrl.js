if (typeof window.angular !== 'undefined') {
  if (typeof angular.appControllers === 'undefined') {
    angular.appControllers = angular.module('appControllers', []);
  }

  angular.appControllers.controller('DealCtrl', ['$scope', '$rootScope', '$state', 'dealsDS', function ($scope, $rootScope, $state, dealsDS) {

    $scope.deal = {
      title: "Don't drink", deadline: new Date();
    }

    $scope.addDeal = function(){
      $scope.deals.push($scope.newDeal);
      var newDeal = {
        title: $scope.newDeal.title,
        deadline: $scope.newDeal.deadline
      }
      dealsDS.addNewDeal(newDeal).then(function(){
        $scope.newDeal.title = null;
        $scope.newDeal.deadline = null;
      })
    };

  }]);
}
