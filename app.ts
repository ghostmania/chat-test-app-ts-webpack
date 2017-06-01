var angular = require('angular');
var material = require('angular-material');
var material2 = require('angular-aria');
var material3 = require('angular-animate');

var app = angular.module('myApp', [material, material2, material3]);

import MainCtrl from './app/config/mainCtrl';



app.controller('mainCtrl', MainCtrl)