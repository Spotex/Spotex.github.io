
const onOpen = () => {
	let elem = document.getElementById("preloader");
	elem.classList.add('m_visible');
};
const onClose = () => {
	let elem = document.getElementById("preloader");
	elem.classList.remove('m_visible');
	elem.classList.add('m_invisible');
	setTimeout(function(){ elem.classList.remove('m_invisible'); }, 3000);
};






/*
$(function hidePreloader(){ 
    $.when( $('.l_preloader').animate({ opacity: 0.0 }, 2000) ).then(function(){ 
         $('.l_preloader').hide(); 
    });
});*/



