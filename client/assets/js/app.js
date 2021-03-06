
//var $ = require ("jquery");
//global.jQuery = $ = require('jquery');
//global.$       = global.jQuery = require('jquery');
// Note: use either Bower or NPM to grab jQuery (don't install both)

(function() {
  'use strict';

  angular.module('app', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
    .value('appVars', {
        projectData: []
    })
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
    //console.log($);
    //$(document).foundation();
    //$('.owl-carousel').owlCarousel();
  }

/*
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });
*/

})();
