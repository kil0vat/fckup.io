window.app = angular.module('app', ['restangular', 'ui.router', 'appControllers', 'appServices']);

// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, RestangularProvider) {

  RestangularProvider.setBaseUrl("/api");

  $urlRouterProvider.otherwise('');

  $stateProvider
    .state('app', {
      url: '',
      controller: 'AppCtrl',
      templateUrl: staticUrl + 'js/partials/app.html',
    })
    .state('deal', {
      url: 'deal/:id',
      controller: 'DealCtrl',
      templateUrl: staticUrl + 'js/partials/deal.html',
    });

}]);
