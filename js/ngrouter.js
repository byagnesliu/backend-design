var ngPages=angular.module('NgPages',['ngRoute']);

ngPages.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
	
	$routeProvider
		//Top Menu-Company Profile
		.when('/companyProfile',{
			templateUrl:'./pages/companyProfile.html'
		})

		//Sidebar Menu-Branch Management
		.when('/branchManagement',{
			templateUrl:'./pages/branchManagement.html'
		})

		//Sidebar Menu-Member Management
		.when('/memberManagement',{
			templateUrl:'./pages/memberManagement.html'
		})

		//Sidebar Menu-Carousel Management
		.when('/carouselManagement',{
			templateUrl:'./pages/carouselManagement.html'
		})	

		//Sidebar Menu-News Management
		.when('/newsManagement',{
			templateUrl:'./pages/newsManagement.html'
		})

		//Sidebar Menu-Activity Management
		.when('/activityManagement',{
			templateUrl:'./pages/activityManagement.html'
		})		

		//Sidebar Menu-Product Management
		.when('/productManagement',{
			templateUrl:'./pages/productManagement.html'
		})	

		//Sidebar Menu-Knowledge Management
		.when('/knowledgeManagement',{
			templateUrl:'./pages/knowledgeManagement.html'
		})

		//Sidebar Menu-Knowledge Management
		.when('/analysisManagement',{
			templateUrl:'./pages/analysisManagement.html'
		})

		.otherwise({
			redirectTo:'/analysisManagement'
		});


}]);


ngPages.controller('idController',function($scope){
	$scope.title="ID Management";
});

ngPages.controller('memberController',function($scope){
	$scope.title="Member Management";
});
