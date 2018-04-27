moment.locale("es");
 
var myApp = angular.module("newsModule", ['ngAnimate']);
myApp.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
        	var myEl = angular.element(document.querySelector('#to-fix'));
             if (this.pageYOffset >= 257) {
				myEl.addClass('fix-me');
             } else {
             	myEl.removeClass('fix-me');
                 //scope.boolChangeFixClass = false;
             }
            //scope.$apply();
        });
    };
});

myApp.service('newsService', function($http, $q){
	var deferred = $q.defer(); //promise to say 'im going to do this later'
	$http.get('/api/public/news').then(function(data){
		deferred.resolve(data);
	});
	this.getNews = function(){
		return deferred.promise;
	}
});

myApp.controller("newsController", function($scope, newsService){
	var promise = newsService.getNews();
	promise.then(function(data){
		for (var i = 0; i<data.data.length; i++){
			data.data[i].formattedDate = moment(data.data[i].News_Date).format('LL');
		}
		$scope.newsArticles = data.data;
		console.log($scope.newsArticles);
	});

myApp.controller("headerController", function($scope, newsService){
	$scope.burgerShow = false;
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
});