$(document).ready(function(){
    var signUp = $('.signup-but');
   
    
    signUp.on('click', function(){
      $('.login').fadeOut('slow').css('display', 'none');
      $('.sign-up').fadeIn('slow');
      
      $('.form-container').animate({left: '10px'}, 'slow');
    });
    
   });