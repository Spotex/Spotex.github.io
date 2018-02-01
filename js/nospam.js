$(function openPreloader(){
	$('.l_preloader').animate({
		opacity: 1
	},2000);
});

$(function hidePreloader(){ 
    $.when( $('.l_preloader').animate({ opacity: 0.0 }, 2000) ).then(function(){ 
         $('.l_preloader').hide(); 
    });
});



