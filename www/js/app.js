// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngResource'])

// This service will collect JSON data
// It returns a JSON object which the app can interact with (by have the business logic deal with it directly, or setting it to a variable on the scope)
.factory('resources', function($resource) {
  var url = 'https://api.meetup.com/';
  return {
    'events': $resource(url + '/2/events?offset=0&format=json&limited_events=False&group_urlname=frontendauthority&photo-host=public&page=20&fields=&order=time&status=past&desc=true&sig_id=63301032&sig=f1fc8b36be5e7e8146f38d4dfc0b4215eddfb60c'),
  };
  // Example with a static JSON file
  // return {
  //   'data': $resource('data/data.json'),
  // };
  // Example of creating multiple endpoints to retrive different types of data from a WordPress site
  // Example usage: resources.posts.query(...)
  // var url = 'http://representmenow.co/wp-json';
  // return {
  //   'posts': $resource(url + '/posts'),
  //   'users': $resource(url + '/users'),
  // };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    
  .state('app.events', {
    url: '/events',
    views: {
      'menuContent': {
        templateUrl: 'templates/events.html',
        controller: 'EventsCtrl'
      }
    }
  })

  .state('app.event', {
    url: '/events/:eventId',
    views: {
      'menuContent': {
        templateUrl: 'templates/event.html',
        controller: 'EventCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
