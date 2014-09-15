(function() {
'use strict;'

// Think of this like Django URLS.
URLS = function($routeProvider) { 
  $routeProvider
    .when('/hello-again-pelican-2.html', {
      templateUrl: 'hello-again-pelican-2.html',
    })
    .when('/hello-again-pelican.html', {
      templateUrl: 'hello-again-pelican.html',
    })
    .when('/hello-pelican.html', {
      templateUrl: 'hello-pelican.html',
    })
    .when('/categories.html', {
      templateUrl: 'categories.html',
    })
    .when('/tags.html', {
      templateUrl: 'tags.html',
    })
    .when('/', {
    })
    .otherwise({
      redirectTo: '/'
    })
}

// This is the module name.
angular.module('app', [
  // Angular.js routing module.
  'ngRoute',
  'ngAnimate',
  ])
  .config(URLS)

})();
