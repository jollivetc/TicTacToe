'use strict';

angular.module('ticTacToeApp')
  .config(function ($stateProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        resolve: {
          games: function (Game) {
            return Game.getAll().$promise;
          },
          scores: function (Game) {
            return Game.getScores().$promise;
          }
        },
        controller: 'MainCtrl'
      })
      .state('main.gameboard', {
        url: 'gameboard/:idGame',
        templateUrl: 'app/game/gameboard.html',
        controller: 'GameboardCtrl'
      })
      .state('main.creategame', {
        url: 'creategame',
        templateUrl: 'app/main/creategame.html'
      });

  });
