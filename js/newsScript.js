var myApp = angular.module("newsModule", ['ngAnimate']);
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
myApp.controller("newsController", function($scope){
	$scope.newsArticles = [
	  {
	    "_id": "578ecc6c4e7a3b2126583572",
	    "index": 0,
	    "title": "officia amet ut incididunt",
	    "imgPath": "http://placehold.it/600x300",
	    "body": "Ad aliquip elit nostrud id. Quis ipsum excepteur ex in aute exercitation. Consectetur elit magna anim consectetur sunt sunt fugiat magna ullamco exercitation sunt qui commodo. Irure in eu aliquip irure ea laboris adipisicing nostrud mollit tempor non. Sit ad veniam do aliquip. Aliqua in cupidatat minim dolor occaecat qui laborum do ea aliqua. Id magna voluptate duis irure et consequat reprehenderit.\r\nSint id nisi incididunt adipisicing nostrud. Lorem aliqua et ad minim non in minim velit cillum irure culpa. Sunt incididunt nostrud eiusmod Lorem commodo. Sunt exercitation nostrud ipsum excepteur nisi in irure. Laborum cupidatat pariatur deserunt do officia ut minim magna consectetur non culpa qui.\r\nConsectetur velit dolore pariatur id deserunt nisi duis labore. Tempor consectetur excepteur sint enim qui elit. Magna id pariatur velit proident ad eu in enim minim consectetur. Et nisi tempor veniam do ullamco. Dolor proident pariatur anim nostrud cillum tempor consectetur. Pariatur do ad aliqua ea cillum tempor velit nisi.\r\n",
	    "registered": "2015-06-27T05:28:58 +05:00",
	    "tags": ["amigos","reunion","familia"]
	  },
	  {
	    "_id": "578ecc6cfc3a848605555ce8",
	    "index": 1,
	    "title": "deserunt minim culpa ipsum",
	    "imgPath": "http://placehold.it/600x300",
	    "body": "Fugiat sit incididunt consectetur ut minim eu aliquip in nulla culpa incididunt deserunt officia. Qui qui ullamco aliquip fugiat consectetur. Nisi deserunt qui aliqua ullamco proident irure officia labore officia sint commodo fugiat velit sit. Aute non aliqua aute anim tempor nulla occaecat irure sint do velit dolor cupidatat proident. Deserunt pariatur irure dolor consequat nostrud labore exercitation anim dolore esse eu. Ex eu enim Lorem quis aliquip fugiat qui nisi aliquip. Non non et ad qui pariatur sunt cupidatat deserunt occaecat aute do.\r\nIncididunt commodo anim officia sint commodo sint nostrud magna ex cillum. Et elit veniam enim commodo commodo minim voluptate consectetur pariatur nostrud amet ad ea fugiat. Anim do sint ex in Lorem Lorem cillum ut incididunt velit.\r\nCupidatat occaecat dolor adipisicing fugiat do eiusmod. Ipsum ipsum magna sit occaecat ad duis consectetur pariatur. Nulla nostrud nisi in ipsum ad.\r\n",
	    "registered": "2016-05-15T08:47:40 +05:00",
	    "tags": ["Eventos","Lanzamiento"]
	  },
	  {
	    "_id": "578ecc6ce1733a6d1100cab6",
	    "index": 2,
	    "title": "voluptate amet proident in",
	    "imgPath": "http://placehold.it/600x300",
	    "body": "Fugiat amet fugiat deserunt enim officia minim ipsum excepteur in officia dolor esse pariatur. Ullamco magna deserunt anim sunt aliquip reprehenderit ea excepteur dolore ipsum. Dolor magna eiusmod nisi deserunt esse officia quis laboris. Exercitation mollit sunt sunt id do duis deserunt mollit ad laborum. Nisi tempor aute deserunt adipisicing amet esse adipisicing commodo tempor ullamco esse est esse. Sint est anim officia ex ut excepteur adipisicing excepteur fugiat amet voluptate mollit laborum.\r\nAdipisicing consequat cupidatat duis consectetur nisi laboris laboris. Nisi in aute et dolor mollit ullamco quis consequat elit. Amet qui incididunt culpa voluptate excepteur esse exercitation culpa do magna. Mollit eiusmod commodo eu nostrud nulla laboris amet ad labore cillum enim laborum ex. Labore in proident voluptate duis non aliqua veniam adipisicing consequat ullamco Lorem labore proident. Duis nulla ut ullamco ipsum voluptate nulla ea exercitation elit proident duis id.\r\nNisi ea cillum Lorem exercitation in ipsum irure dolore id veniam cillum minim dolor. Dolor eiusmod excepteur sunt duis quis labore. Ex irure sint fugiat esse duis mollit incididunt est nulla et. Officia exercitation aliqua consectetur duis. Non voluptate veniam est occaecat nulla consequat ut sint.\r\n",
	    "registered": "2014-05-31T01:12:51 +05:00",
	    "tags": ["Bebes","Colegios","familia"]
	  },
	  {
	    "_id": "578ecc6cb218b51f07ffda3f",
	    "index": 3,
	    "title": "dolore laborum cillum officia",
	    "imgPath": "http://placehold.it/600x300",
	    "body": "Non labore incididunt quis amet magna sit laborum. Sunt laboris veniam ex laboris elit cupidatat qui laboris ea ea cupidatat. Culpa exercitation cupidatat quis laborum adipisicing.\r\nCupidatat do ut enim sit ea in labore esse. Nisi incididunt eiusmod exercitation officia sint velit minim reprehenderit quis sint non est nisi pariatur. Deserunt reprehenderit sunt irure officia pariatur qui minim dolore. Incididunt aliquip laborum nisi occaecat ex culpa in ipsum cupidatat. Duis veniam sunt exercitation ad. Officia irure cupidatat eu minim voluptate dolor commodo velit.\r\nLaboris aute adipisicing incididunt ipsum sunt velit sit reprehenderit enim aute irure. Minim ipsum ullamco cillum officia non culpa esse quis irure consectetur et ea velit. Et fugiat elit pariatur nulla commodo quis voluptate. Non Lorem aliqua ad exercitation est. Nostrud culpa fugiat tempor in minim tempor enim reprehenderit ut. Occaecat eu enim amet aliquip sit elit. Enim cupidatat cillum laborum esse officia reprehenderit excepteur labore tempor voluptate nulla cillum.\r\n",
	    "registered": "2014-07-23T06:37:21 +05:00",
	    "tags": ["Aire Libre","Reunion","Lanzamiento"]
	  },
	  {
	    "_id": "578ecc6c9cf81310c7fa28c5",
	    "index": 4,
	    "title": "laborum eiusmod irure laboris",
	    "imgPath": "http://placehold.it/600x300",
	    "body": "Tempor reprehenderit labore culpa tempor. Nulla nulla officia nisi cillum. Consectetur est exercitation nulla cupidatat cupidatat fugiat cillum. Dolore nisi est tempor duis labore nisi aliqua. Ea elit Lorem anim in dolore dolore in sint do est ipsum ipsum nostrud veniam. Elit ad ea Lorem velit Lorem sit cillum esse ipsum tempor commodo sint ut.\r\nUt non nisi occaecat amet cupidatat irure adipisicing enim incididunt mollit occaecat culpa et aliquip. Ipsum elit eu sit ea veniam dolor consectetur qui tempor tempor nulla irure Lorem cupidatat. Sunt sit reprehenderit dolore fugiat ad aute enim mollit id nisi ut excepteur. Irure ex est id et aute Lorem. Enim nostrud laborum ipsum eiusmod sunt enim laboris nulla culpa. In minim ad duis non aliquip est nostrud ipsum ut. Cupidatat ullamco sit aliqua veniam ipsum sint minim ex do.\r\nSint minim proident velit magna voluptate quis cillum id. Dolore Lorem non labore consequat adipisicing deserunt id sint aute incididunt minim. Minim enim eiusmod nulla est aliqua tempor exercitation reprehenderit laboris fugiat voluptate ad. Cillum amet incididunt laborum cupidatat deserunt ut. Velit exercitation ea consectetur excepteur culpa esse. Aliquip officia cillum nisi ullamco nostrud aliqua proident in officia.\r\n",
	    "registered": "2015-08-02T07:45:51 +05:00",
	       "tags": ["Bebes","reunion","familia"]
	  }
	];
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