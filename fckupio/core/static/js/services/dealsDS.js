if (typeof angular !== 'undefined') {
  if (typeof angular.appServices === 'undefined') {
    angular.appServices = angular.module('appServices', []);
  }

  angular.appServices.service('dealsDS', ['$rootScope','Restangular', function($rootScope, $restangular) {
    'use strict';

    var dealsData = $restangular.one('api/task');

    this.getAllDeals = function () {
      return dealsData.get();
    };

    this.addNewDeal = function (deal) {
      return dealsData.post(deal);
    };

    this.completeDeal = function (deal, dealId) {
      return $restangular.one('task', dealId).customPOST(deal, 'complete');
    }

    this.getDeal = function(dealId){
      return $restangular.one('task', dealId).get();
    }

  }]);
}
