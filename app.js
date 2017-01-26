// MODULE
const ngSlides = angular.module('ngSlides', ['ngRoute', 'ngResource']);

// ROUTES
ngSlides.config(function ($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeCtrl'
  });

  $routeProvider.when('/slide/:deckId/:page', {
    templateUrl: 'pages/slide.html',
    controller: 'slideCtrl'
  });

});

// SERVICES
ngSlides.service('deckService', function () {

  var slideDecks = [
    {
      name: "Angular History",
      subtitle: "An arbitrary and cursory overview",
      slides: [
        {
          title: "First release",
          content: "2009, first public release of Angular",
        },
        {
          title: "Google Developers",
          content: "Work began internally at Google prior to public release",
        }
      ]
    }
  ];

  this.name = slideDecks[0].name;
  this.subtitle = slideDecks[0].subtitle;
  this.slides = slideDecks[0].slides;

})

// CONTROLLERS
ngSlides.controller('homeCtrl'=, ['$scope', 'deckService', function ($scope, deckService) {

  $scope.deckName = deckService.name;
  $scope.deckSubtitle = deckService.subtitle;
  $scope.slides = deckService.slides;

}]);

ngSlides.controller('slideCtrl', ['$scope', function ($scope) {

  $scope.deckName = deckService.name;
  $scope.deckSubtitle = deckService.subtitle;
  $scope.slides = deckService.slides;

}]);

ngSlides.directive('slidesList', function () {

  return {
    templateUrl: 'directives/slidesList.html',
    replace: true,
  };

});
