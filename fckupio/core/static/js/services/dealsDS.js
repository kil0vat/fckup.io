if (typeof angular !== 'undefined') {
  if (typeof angular.appServices === 'undefined') {
    angular.appServices = angular.module('appServices', []);
  }

  angular.appServices.service('dealsDS', ['$rootScope','Restangular', function($rootScope, $restangular) {
    'use strict';


    this.getAllDeals = function () {
      return $restangular.one('task').get();
    };

    this.addNewDeal = function (deal) {
      return $restangular.all('task').post(deal);
    };

    this.completeDeal = function (deal, dealId) {
      return $restangular.one('task', dealId).customPOST(deal, 'complete');
    }

    this.getDeal = function(dealId){
      return $restangular.one('task', dealId).get();
    }

  }]);
}
