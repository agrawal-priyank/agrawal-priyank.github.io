// JavaScript Document
'use strict';
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'pages/profile.html',
		controller: 'ProfileController'
	})
	
	.when('/projects', {
		templateUrl: 'pages/projects.html',
		controller: 'ProjectController'	
	})
	
	.when('/resume',{
		templateUrl: 'pages/resume.html',
		controller: 'ResumeController'	
	})
	
	.when('/contact',{
		templateUrl: 'pages/contact.html',
		controller: 'ContactController'
	});	
});

app.controller('ProfileController', function($scope){
	$scope.message = "Hello from Profile Page";
});

app.controller('ProjectController', function($scope){
	$scope.message = "Hello from Projects Page";	
});

app.controller('ResumeController', function($scope){
	$scope.message = "Hello from Resume Page";	
});

app.controller('ContactController', function($scope){
	$scope.message = "Hello from Contact Page";	
});