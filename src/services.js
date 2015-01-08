/* Services */

var appServices = angular.module('appServices', ['ngResource']);

appServices.service('api', function($rootScope, $resource, appConfig){

	this.Zones = $resource(appConfig.apiURL + '/servers/:server/zones/:zone',
	   {}, {
		   /* Custom methods */
	   });
	this.Servers = $resource(appConfig.apiURL + '/servers/:server',
	   {}, {
		   /* Custom methods */
	   });
});
