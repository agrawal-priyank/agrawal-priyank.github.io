// JavaScript Document
'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	// route for profile page
	.when('/',{
		templateUrl: 'pages/profile.html',
		controller: 'MainController'
	});
});

app.controller('MainController', function($scope){
	$scope.message = "Hello from AngularJS";
});