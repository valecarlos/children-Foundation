$( document ).ready(function() {
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
	//setInterval(mySlider.goRight, 1000);
});

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
