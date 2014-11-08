if (typeof window.angular !== 'undefined') {
  if (typeof angular.appControllers === 'undefined') {
    angular.appControllers = angular.module('appControllers', []);
  }

  angular.appControllers.controller('AppCtrl', ['$scope', '$rootScope', '$state', 'dealsDS', function ($scope, $rootScope, $state, dealsDS) {
    $scope.tasks = "LOLAAAA";

    dealsDS.getAllDeals().then(function(tasks){
      var allDeals = tasks.objects;

      $scope.deals = _.filter(allDeals, {completed: false});
      $scope.fuckups = _.filter(allDeals, {fuckuped: true});
    });

    // $scope.fuckups = [
    //   {title: "Don't drink", deadline: new Date()},
    //   {title: "Love my wife", deadline: new Date()}
    // ]

    $scope.addDeal = function(){
      $scope.deals.push($scope.newDeal);
      dealsDS.addNewDeal($scope.newDeal).then(function(){
        $scope.newDeal.title = null;
        $scope.newDeal.deadline = null;
      })
    };

  }]);
}
