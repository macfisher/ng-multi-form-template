// app.js

angular.module('multiFormApp', ['ngAnimate', 'ui.router'])
	
	// app. routes (ui.router)
	.config(function($stateProvider, $urlRouteProvider) {
		
		$stateProvider
			.state('form', {
				url: '/form',
				templateUrl: 'form.html',
				controller: 'formController'
			})
			
			// nested states, each will have their own view
			// nested url -> /form/profile
			.state('form.profile', {
				url: '/profile',
				templateUrl: 'form-profile.html'
			})
			
			// url -> /form/interests
			.state('form.interests', {
				url: '/interests',
				templateUrl: 'form-interests.html'
			})
			
			.state('form.payment', {
				url: '/payment',
				templateUrl: 'form-payment.html'
			});
		
		// catch all route
		$urlRouterProvider.otherwise('/form/profile');
	})
	
	
	.controller('formController', function($scope) {
		
		$scope.formData = {};
		
		$scope.processForm = function() {
			alert('Form Process Test.');
		};
	});
	
	
