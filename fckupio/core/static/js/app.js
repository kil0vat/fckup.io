window.app = angular.module('app', ['restangular', 'ui.router', 'appControllers', 'appServices', 'oitozero.ngSweetAlert']);

// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, RestangularProvider) {

  RestangularProvider.setBaseUrl("/api");

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '/',
    controller: 'AppCtrl',
    templateUrl: staticUrl + 'js/partials/app.html',
  })
  .state('deal', {
    url: '/deal/:id',
    templateUrl: staticUrl + 'js/partials/deal.html',
    controller: function($stateParams, dealsDS, $scope, $rootScope, SweetAlert, $state){

      $rootScope.staticUrl = staticUrl;

      $rootScope.rightPaneActive = false;

      dealsDS.getDeal($stateParams.id).then(function(data){
        $scope.deal = data;
        $scope.hideButtons = $scope.deal.participant.pk !== window.userId;
      }).catch(function(){});

      $scope.complete = function(){
        if($scope.deal.id){
          $scope.deal.complete = true;
          $scope.deal.fucked_up = false;
          $scope.deal.put().then(function(){
            showMessage();
          });
        }
      };

      $scope.fuckedUp = function(){
        if($scope.deal.id){
          $scope.deal.complete = true;
          $scope.deal.fucked_up = true;
          $scope.deal.put();
        }
      };

      function showMessage(){
        SweetAlert.swal({
          title: "Greetings, dude!",
          text: "You've just approved deal! Nice work",
          imageUrl: staticUrl + 'img/smiling.png'
        },function(){
          $state.go("app");
        });
      }
    } }
  );
  }]);
