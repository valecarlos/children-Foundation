var myApp = angular.module("newsModule", ['ngAnimate']);

myApp.controller("newsController", function($scope){
	$scope.newsArticles = [{
		title: 'Lorem ipsum dolor', 
		imgPath: 'img/kidsWater.jpg', 
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel massa faucibus, efficitur justo sit amet, tempor nisi. Nullam massa nunc, molestie vitae malesuada vitae, imperdiet nec justo. Donec nibh nibh, sagittis non libero ac, commodo tincidunt ligula. Curabitur rhoncus efficitur risus a varius. Donec commodo aliquam mauris, eget suscipit turpis consequat non. Sed vitae elit nisi. Aliquam erat volutpat. Nunc lectus magna, dictum non eros eget, scelerisque scelerisque augue. Morbi vel lacinia urna, et pretium urna. Duis vel nisl maximus, lacinia sem id, imperdiet justo. Nulla a faucibus velit. Donec commodo magna odio, ac tempus neque commodo at. Pellentesque sed pretium quam. Aliquam quis velit pharetra, ultricies ex a, egestas ligula. Aenean laoreet sodales auctor. Proin tempus vel nunc vitae imperdiet. Praesent eget tincidunt arcu, pharetra dictum dolor. Duis non malesuada metus. Vestibulum vitae orci enim.', 
		tags : [{name: 'Deportes'}, 
			{name: 'Bebes'}, 
			{name: 'Infancia'}]},
		{title: 'Donec mollis ornare', 
		imgPath: '', 
		body: 'Vestibulum auctor consequat metus volutpat tempus. Suspendisse id metus egestas nibh fermentum elementum vel eget arcu. Proin viverra posuere ligula et pharetra. Ut vel elit lacinia, porttitor lacus sed, dictum tellus. Nunc vestibulum porttitor suscipit. Vestibulum in justo augue. Praesent finibus tellus erat, id malesuada sapien ornare vitae. Praesent egestas ac eros at tincidunt. Cras a fermentum magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus quis euismod metus. Nullam vitae fermentum eros. Vivamus lacus dui, facilisis rhoncus aliquet eget, molestie et nulla. Quisque interdum sem ac erat vehicula, id tincidunt magna iaculis. Donec ac dictum purus, quis ultrices erat. Morbi quis iaculis ligula, sed blandit dolor. Donec pretium metus et nisi auctor pharetra. Sed fringilla risus consequat ornare pharetra. Mauris quis blandit enim. Vestibulum quis nisl libero. Integer sit amet odio lorem. Vestibulum efficitur mi est, vel maximus libero feugiat fringilla. Duis et massa pretium, accumsan odio vel, faucibus augue. Aenean vitae lobortis eros, sed dignissim tellus. Curabitur porta justo leo, mattis rhoncus orci euismod eu. Vivamus risus sapien, consequat sed ipsum sit amet, tincidunt sagittis erat. Suspendisse id justo sodales, venenatis dolor accumsan, eleifend diam.',
		tags : [{name: 'Lanzamiento'}, 
			{name: 'Actividades'}]},
		{title: 'Aenean diam', 
		imgPath: '', 
		body: 'Donec blandit mollis elit consequat consequat. Quisque efficitur quam rhoncus, euismod orci vestibulum, tincidunt quam. Etiam tincidunt mi nec massa gravida ornare. Proin porttitor elementum augue a cursus. Proin lacus purus, cursus malesuada fermentum vitae, viverra ac neque. Duis dignissim lectus vel dictum porta. Vestibulum porta dapibus efficitur.Donec non laoreet felis, eget auctor felis. Nulla facilisi. Aenean eget ipsum turpis. Vivamus venenatis orci cursus risus consequat cursus. Aenean elementum leo erat, quis commodo augue vehicula ut. Nam auctor sapien fermentum, facilisis mauris in, scelerisque purus. Quisque vel fermentum lectus. Vivamus posuere felis vel quam venenatis maximus. Ut id eros vitae elit gravida convallis ultrices eget mi. Maecenas nec lacus sit amet tellus sodales mollis. Curabitur in neque sollicitudin nibh scelerisque pretium.',
			tags : [{name: 'Eventos'}, 
			{name: 'Infancia'}]},
		{title: 'Etiam elit massa', 
		imgPath: '', 
		body: 'Maecenas molestie eleifend augue, at lacinia felis pretium euismod. Duis rhoncus, nunc eget accumsan luctus, sapien felis scelerisque est, et hendrerit urna odio sed nibh. Aenean semper nibh eros, vel auctor elit volutpat et. Nulla finibus ante ullamcorper augue posuere vehicula. Vestibulum ut turpis tortor. Sed nisl orci, pharetra at mauris eu, commodo euismod mauris. Donec sed tristique velit. Curabitur commodo convallis neque in lobortis. Vivamus aliquet molestie nisl a dictum. Donec eu justo in felis sollicitudin porttitor eu sit amet odio. Sed id nisi ante. Suspendisse vel diam massa. Integer et lectus justo. Nulla suscipit mauris vel eros facilisis, non bibendum diam pellentesque. Mauris maximus tempor tortor in imperdiet. Maecenas vitae suscipit metus. In molestie, nisi sed accumsan sodales, sem felis ultrices risus, et vulputate lacus tortor vel leo. Morbi consectetur, nibh eu scelerisque varius, lacus nisi pharetra libero, at lobortis nibh urna quis sapien. Sed et risus lacus. Suspendisse nec urna dictum, rhoncus elit non, cursus diam. Aliquam eget porta dolor. Aliquam hendrerit risus ligula, eu rutrum diam accumsan sed. Vestibulum dictum fermentum posuere. Pellentesque finibus eleifend elit, sed finibus velit.',
		tags : [{name: 'Eventos'}, 
			{name: 'Aire Libre'}]}];
});