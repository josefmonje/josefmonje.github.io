(function() {
'use strict;'
URLS = function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/cover.html',
    })
    .when('/blog/', {
      templateUrl: '/archives.html',
    })
    .when('/:path*\/?', {
      templateUrl: function($routeParams){
        return 'articles/' + $routeParams.path
      },
    })
    .otherwise({
      redirectTo: '/'})
}

angular
  .module('app', [
    'ngRoute',
    'ngAnimate',
  ])
  .config([
    '$routeProvider',
    URLS,
  ])
})();
