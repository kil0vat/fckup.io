if (typeof window.angular !== 'undefined') {
  if (typeof angular.appControllers === 'undefined') {
    angular.appControllers = angular.module('appControllers', []);
  }

  angular.appControllers.controller('AppCtrl', ['$scope', '$rootScope', '$state', 'dealsDS', function ($scope, $rootScope, $state, dealsDS) {

    $rootScope.staticUrl = staticUrl;

    dealsDS.getAllDeals().then(function(tasks){
      var allDeals = tasks.objects;

      $scope.deals = _.filter(allDeals, {complete: false});
    });

    $scope.addDeal = function(){
      var newDeal = {
        title: $scope.newDeal.title,
        deadline: $scope.newDeal.deadline
      };

      dealsDS.addNewDeal(newDeal).then(function(data){
        $scope.deals.push(data);

        $scope.newDeal.title = null;
        $scope.newDeal.deadline = null;
      })
    };

    $scope.toggleMenu = function(){
      $rootScope.rightPaneActive = !$rootScope.rightPaneActive
    };

  }]);
}
