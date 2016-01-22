angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('EventsCtrl', function($scope, resources) {
  $scope.events = [
    { title: 'Hands on with Ionic', id: 1 },
    { title: 'Developing for Design', id: 2 },
    { title: 'An intro to POST CSS', id: 3 },
    { title: 'Atomic Design basics and open mic', id: 4 },
    { title: 'Open Mic Night', id: 5 },
    { title: 'Share your project / Lightning talks', id: 6 }
  ];
  // Retrieve the event data
  resources.data.get({},
  function(data) {
    // Success callback
    console.log('Success: ',data);
    $scope.data = data;
  },
  function(error){
    // Error callback
    console.warn('An error occured:',error);
  });

  // Retrieve data from a custom query on a WordPress site
  // resources.posts.query({
  //   'type[]': 'legislation',
  //   'filter[status]': 'publish',
  //   'filter[order]': 'DESC',
  // },
  // function(posts) {
  //   // Success callback
  //   console.log('Success: ',posts);
  //   $scope.posts = posts;
  // },
  // function(error) {
  //   // Error callback
  //   console.warn('An error occured:',error);
  // });
})

.controller('EventCtrl', function($scope, $stateParams) {
  $scope.state = $stateParams;
});
