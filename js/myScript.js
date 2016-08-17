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
	//store the element i will use in variables
	var slides = $(".slider-wrapper").find(".slider-card").length - 1
	var currentSlide = 0;
	var slideWidth = $(".slider-card").width();
	var myInterval;

	//attach function to go left to the #slider-left element/button
	$("#slider-left").click(function(event){
		clearInterval(myInterval);
		goLeft();
		myInterval = setInterval(goRight, 3000);
	});

	//attach function to go right to the #slider-right element/button
	$("#slider-right").click(function(event){
		clearInterval(myInterval);
		goRight();
		myInterval = setInterval(goRight, 3000);
	});

	//re usable function to make the carousel go right
	function goRight(){
		currentSlide = currentSlide === slides ? 0 : currentSlide + 1;
		$(".slider-wrapper").css({"margin-left" : -slideWidth * currentSlide});	
	}
	
	//re usable function to make the carousel go left
	function goLeft(){
		currentSlide = currentSlide === 0 ? slides : currentSlide - 1;
		$(".slider-wrapper").css({"margin-left" : -slideWidth * currentSlide});
	}

	//reset the slider on windows resize so it's responsive - this is complemented with css media queries
	function sliderResize(){
		clearInterval(myInterval);
		currentSlide = 0;
		slideWidth = $(".slider-card").width();
		$(".slider-wrapper").css({"margin-left" : -slideWidth * currentSlide});
		myInterval = setInterval(goRight, 3000);
	}

	//set the initial interval to start the carousel
	myInterval = setInterval(goRight, 3000);

	//actual implementation of the window resize
	$(window).on('resize', function() {
	    sliderResize();
	});
};
