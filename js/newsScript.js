var myApp = angular.module("newsModule", ['ngAnimate', 'ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when("/", {
			title:"home",
			templateUrl: "partials/home.html",
			controller: "homeController"
		})
		.when("/home", {
			title:"home",
			templateUrl: "partials/home.html",
			controller: "homeController"
		})
		.when("/about", {
			title:"about",
			templateUrl: "partials/about.html",
			controller: "aboutController",
            css: 'css/aboutTheme.css'
		})
		.when("/news", {
			title:"news",
			templateUrl: "partials/news.html",
			controller: "newsController",
            css: 'css/newsTheme.css'
		})
		.when("/programs", {
			title:"programs",
			templateUrl: "partials/programs.html",
			controller: "programsController",
            css: 'css/productsTheme.css'
		})
		.when("/contact", {
			title:"contact",
			templateUrl: "partials/contact.html",
			controller: "contactController",
            css: 'css/contactTheme.css'
		})
		.when("/careers", {
			title:"careers",
			templateUrl: "partials/careers.html",
			controller: "careersController"
		})
		.otherwise({
			redirectTo: "/home"
		})
}]);

myApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.currentView = current.$$route.title;
    });
}]);
/*
myApp.directive('head', ['$rootScope','$compile',
    function($rootScope, $compile){
        return {
            restrict: 'E',
            link: function(scope, elem){
                var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
                elem.append($compile(html)(scope));
                scope.routeStyles = {};
                $rootScope.$on('$routeChangeStart', function (e, next, current) {
                	console.log("ive changed the view");
                    if(current && current.$$route && current.$$route.css){
                        if(!angular.isArray(current.$$route.css)){
                            current.$$route.css = [current.$$route.css];
                        }
                        angular.forEach(current.$$route.css, function(sheet){
                            delete scope.routeStyles[sheet];
                        });
                    }
                    if(next && next.$$route && next.$$route.css){
                        if(!angular.isArray(next.$$route.css)){
                            next.$$route.css = [next.$$route.css];
                        }
                        angular.forEach(next.$$route.css, function(sheet){
                            scope.routeStyles[sheet] = sheet;
                        });
                    }
                });
            }
        };
    }
]);
*/
myApp.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
        	var myEl = angular.element(document.querySelector('#to-fix'));
             if (this.pageYOffset >= 172) {
				myEl.addClass('fix-me');
             } else {
             	myEl.removeClass('fix-me');
                 //scope.boolChangeFixClass = false;
             }
            //scope.$apply();
        });
    };
});

myApp.directive("mySlider", function($window){
	return function(scope, element, attrs) {

	};
});

myApp.service('newsService', function($http, $q){
	var deferred = $q.defer(); //promise to say 'im going to do this later'
	$http.get('data/news_mock.json').then(function(data){
		deferred.resolve(data);
	});
	this.getNews = function(){
		return deferred.promise;
	}
});

myApp.controller("headerController", function($scope, newsService){
	$scope.burgerShow = false;
});

myApp.controller("newsController", function($scope, newsService){
	var promise = newsService.getNews();
	promise.then(function(data){
		$scope.newsArticles = data.data;
		console.log($scope.newsArticles);
	});
});

myApp.controller("homeController", function($scope, newsService){
	var promise = newsService.getNews();
	promise.then(function(data){
		$scope.newsArticles = data.data;
		console.log($scope.newsArticles);
	});
});

myApp.controller("programsController", function($scope){

});

myApp.controller("aboutController", function($scope){

});

myApp.controller("contactController", function($scope){

});

myApp.controller("careersController", function($scope){

});
	/*
	$scope.searchArticle = function(item){
		console.log(item.title);
		console.log(item.tags);
		if ($scope.searchText == undefined){
			return true;
		}
		else{
			if(item.title.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
				item.tags.indexOf($scope.searchText.toLowerCase()) != -1){
				return true;
			}
		}

		return false;
	};*/

