$( document ).ready(function() {
	loadNews();
	$("#slideMenuButton").click(function(event){
    	$('.menu').toggleClass('show-me');
    });

	/*
	console.log("im here");
    $("#about-button").click(function(event){
    	console.log("i was clikced");
    	$('.about-wrapper').addClass('is-showing');
    	$('.about-extended').show();
    });

    $("#back-about-button").click(function(event){
    	$('.about-wrapper').removeClass('is-showing');
    	$('.about-extended').hide(800);
    });
	*/
	mySlider = new Slider;
});

function loadNews(){
	var myLength = 100;
	var spinner = '<div class="loader">Loading...</div>';
	var $newsContainer = $('#blog-links');
	
	$newsContainer.append(spinner);
	
	$.ajax({
		type: 'GET',
		url: '/api/public/news',
		success: function(data){
			$newsContainer.empty();
			$.each(data, function(i, article){
				$newsContainer.append('<a href="news.html">' +
			'<div class="news-wrapper">' +
				'<div class="news-date">' +
					'<div class="news-day">'+ moment(article.News_Date).format('DD') +'</div>' +
					'<div class="news-month">'+ moment(article.News_Date).format('MMM') +'</div>'+
				'</div>' +
				'<div class="news-card" style="background-image: url(img/news/'+ article.News_impPath +')">' +
					'<div class="news-caption"><strong>' +
						article.News_Title +
						'</strong>' +	
						'<p>'+ article.News_Body.substring(0, myLength + 10) + '...' + '</p>' +
					'</div>' +
				'</div>' +
				'<p class="news-body">' +
				article.News_Body.substring(0,myLength) + '...' +
				'</p>' +
			'</div>' +
		'</a>')
			});
		}
	});
}

var Slider = function(){
	var slides = $(".slider-wrapper").find(".slider-card").length - 1
	var currentSlide = 0;
	var slideWidth = $(".slider-card").width();
	var myInterval;

	$("#slider-left").click(function(event){
		clearInterval(myInterval);
		goLeft();
		myInterval = setInterval(goRight, 3000);
	});

	$("#slider-right").click(function(event){
		clearInterval(myInterval);
		goRight();
		myInterval = setInterval(goRight, 3000);
	});

	function goRight(){
		currentSlide = currentSlide === slides ? 0 : currentSlide + 1;
		$(".slider-wrapper").css({"margin-left" : -slideWidth * currentSlide});	
	}

	function goLeft(){
		currentSlide = currentSlide === 0 ? slides : currentSlide - 1;
		$(".slider-wrapper").css({"margin-left" : -slideWidth * currentSlide});
	}

	function sliderResize(){
		clearInterval(myInterval);
		currentSlide = 0;
		slideWidth = $(".slider-card").width();
		$(".slider-wrapper").css({"margin-left" : -slideWidth * currentSlide});
		myInterval = setInterval(goRight, 3000);
	}

	myInterval = setInterval(goRight, 3000);

	$(window).on('resize', function() {
	    sliderResize();
	});

};
