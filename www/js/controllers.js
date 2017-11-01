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

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlayerCtrl', function ($scope, $stateParams) {
  
      $scope.players = [{
  
          'p': [{
              'player': 'Player1',
  
            },
            {
              'player': 'Player2',
  
            },
            {
              'player': 'Player3',
  
            },
            {
              'player': 'Player4',
  
            },
  
          ]
        },
        {
  
          'p': [{
              'player': 'Player5',
  
            },
            {
              'player': 'Player6',
  
            },
            {
              'player': 'Player7',
  
            },
            {
              'player': 'Player8',
              'active': true
  
            },
  
          ]
        },
  
      ]
      var count=0;
      var counter = 0;
      $scope.selected='0-0';
      console.log($scope.selected);
      // console.log('helloindex', selected)
  
      $scope.currentPlayer = 0
  
      $scope.move = function () {
        $scope.selected='0-0';
        count++;
        console.log(count);
        counter=count%4;
        console.log("hello",counter);
        if (0<count && count<4) {
          $scope.selected = 0+'-'+counter;
          console.log($scope.selected);
        } else if(4<=count && count<8){
          $scope.selected = 1+'-'+counter;
          console.log("hello",counter);
      }else{
         count=0;
         
      }
    }
    })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
