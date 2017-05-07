// JavaScript Document
'use strict';
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/profile',{
		templateUrl: 'pages/profile.html',
		controller: 'ProfileController'
	})
	
	.when('/projects', {
		templateUrl: 'pages/projects.html',
		controller: 'ProjectController'	
	})
	
	.when('/skills', {
		templateUrl: 'pages/skills.html',
		controller: 'SkillController'	
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
	$scope.message = "Please come back later :)";
});

app.controller('ProjectController', function($scope){
	$scope.message = "Please come back later :)";	
});

app.controller('SkillController', function($scope){
	$scope.message = "Please come back later :)";	
});

app.controller('ResumeController', function($scope){
	$scope.message = "Please come back later :)";	
});

app.controller('ContactController', function($scope){
	$scope.message = "Please come back later :)";	
});