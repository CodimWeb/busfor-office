$(document).ready(function(){
	$('.language__select').on('click', function(){
		$(this).toggleClass('closed');
	});

	$('.slider').slick({
    	slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: true,
	    fade: false,
	    infinite: false
	});
});
