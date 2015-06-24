(function() {
'use strict;'
URLS = function($routeProvider) {
  $routeProvider
    .when('', {
      templateUrl: '/archives.html',
    })
    .when('/:path*\/?', {
      templateUrl: function($routeParams){
        return 'articles/' + $routeParams.path
      },
    })
    .otherwise({
      redirectTo: ''})
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
