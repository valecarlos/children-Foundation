$( document ).ready(function() {
	console.log("im here");
    $("#about-button").click(function(event){
    	console.log("i was clikced");
    	$('.about-wrapper').addClass('is-showing');
    	$('.about-extended').show();
    })

    $("#back-about-button").click(function(event){
    	$('.about-wrapper').removeClass('is-showing');
    	$('.about-extended').hide(800);
    })
});