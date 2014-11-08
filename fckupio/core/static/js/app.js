window.app = angular.module('app', ['restangular', 'ui.router', 'appControllers', 'appServices']);

// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('');

  $stateProvider
    .state('app', {
      url: '',
      controller: 'AppCtrl',
      templateUrl: 'js/partials/app.html',
    })
    .state('404', {
      url: '/404',
      templateUrl: 'js/core/templates/404.tpl.html',
      controller: 'AppCtrl'
    });

}]);
