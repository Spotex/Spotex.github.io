$(function noSpam(){
	$('.cbalink').css('display','none');
});
$(function openPreloader(){
	$('.l_preloader').animate({
		opacity: 1
	},2000);
});

$(function hidePreloader(){
	$('.l_preloader').animate({
		opacity: 0
	},2000);
});



