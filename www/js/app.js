// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('App', ['ionic', 'ui.calendar', 'firebase', 'App.controllers', 'App.services'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs', {
        url: '/tabs',
        abstract: true,
        templateUrl: 'views/tabs/tabs.html'
      })
      .state('tabs.home', {
        url: '/home',
        views: {
          'home-tab': {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('tabs.biography', {
        url: '/biography',
        views: {
          'biography-tab': {
            templateUrl: 'views/biography/biography.html',
            controller: 'BiographyController'
          }
        }
      })
      .state('tabs.detailBiography', {
        url: '/detailBiography/:presenterId',
        views:{
          'biography-tab': {
            templateUrl: 'views/detailBiography/detailBiography.html',
            controller: 'DetailBiographyController'
          }
        }
      })
      .state('tabs.calendar', {
        url: '/calendar',
        views: {
          'calendar-tab': {
            templateUrl: 'views/calendar/calendar.html',
            controller: 'CalendarController'
          }
        }
      })
      .state('tabs.map', {
        url: '/map',
        views:{
          'map-tab': {
            templateUrl: 'views/map/map.html',
            controller: 'MapCtrl'
          }
        }
      })
    $urlRouterProvider.otherwise('/tabs/home');
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.factory("Presenter", function($firebaseArray) {
   var ref = firebase.database().ref().child("Other");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  var presenter = $firebaseArray(ref);
  
  return {
    all: function() {
      return presenter;
    },
    remove: function(presenter) {
      presenter.splice(presenter.indexOf(presenter), 1);
    },
    get: function(presenterId) {
      for (var i = 0; i < presenter.length; i++) {
        if (presenter[i].presenterId === parseInt(presenterId)) {
          return presenter[i];
        }
      }
      return null;
    }
  };
});
