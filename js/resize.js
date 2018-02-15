$(document).ready(function(){
  
  $('.logo-img').height($('.grid').width()/7.31);

  $(window).resize(function(){
    $('.logo-img').height($('.grid').width()/7.31);
  });

});