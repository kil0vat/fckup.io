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
            showMessage(true, {
              title: "Nice work!",
              text: "You've just approved the deal!",
            });
          });
        }
      };

      $scope.fuckedUp = function(){
        if($scope.deal.id){
          $scope.deal.complete = true;
          $scope.deal.fucked_up = true;
          $scope.deal.put().then(function(){
            showMessage(false, {
              title: "Greetings!",
              text: "You've just made an pain in the ass for your companion...",
            });
          });
        }
      };

      function showMessage(flag, options){
        var image = flag ? 'img/smiling.png' : 'img/you_are_dead.png';
        SweetAlert.swal({
          title: options.title,
          text: options.text,
          imageUrl: staticUrl + image
        },function(){
          $state.go("app");
        });
      }
    } }
  );
  }]);
