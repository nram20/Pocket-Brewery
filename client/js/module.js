'use strict';

angular

  .module('beerApp', ['ui.router', 'ui.bootstrap', 'angularSpinner', 'ngStorage'])

  .config(config)

function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: '/html/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .state('login', {
        url:'/login',
        templateUrl: '/html/login.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'        
      })
      .state('register', {
        url:'/register',
        templateUrl: '/html/registration.html',
        controller: 'regCtrl',
        controllerAs: 'vm'        
      })
      .state('profile', {
        url:'/profile',
        templateUrl: '/html/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'        
      })
      .state('editProfile', {
        url:'/editProfile',
        templateUrl: '/html/editProfile.html',
        controller: 'editProfileCtrl',
        controllerAs: 'vm'        
      })
      .state('myBeers', {
        url:'/myBeers',
        templateUrl: '/html/myBeers.html',
        controller: 'myBeersCtrl',
        controllerAs: 'vm'        
      })
      .state('allBeers', {
        url:'/allBeers',
        templateUrl: '/html/allBeers.html',
        controller: 'allBeersCtrl',
        controllerAs: 'vm'
      })
      .state('review', {
        url:'/review',
        templateUrl: '/html/review.html',
        controller: 'reviewCtrl',
        controllerAs: 'vm'
      })
      .state('reviewspecific', {
        url:'/reviewspecific/:id',
        templateUrl: '/html/reviewspecific.html',
        controller: 'reviewspecificCtrl',
        controllerAs: 'vm'
      })

  $urlRouterProvider.otherwise('/');
};