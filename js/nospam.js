window.onload=function openPreloader(){
	var d = document.getElementById("test");
	d.classList.add('m_visible');
};
setTimeout(function hidePreloader(){
	var d = document.getElementById("test");
	d.classList.remove('m_visible');
	d.classList.add('m_invisible');
	setTimeout(function(){ d.classList.remove('m_invisible'); }, 3000);
}, 4000);







/*
$(function hidePreloader(){ 
    $.when( $('.l_preloader').animate({ opacity: 0.0 }, 2000) ).then(function(){ 
         $('.l_preloader').hide(); 
    });
});*/



