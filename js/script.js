$(document).ready(function(){
	 $(window).scroll(function(){
	 	 var scroll = $(document).scrollTop();

/*	 	 console.log(scroll);*/

 
    if (scroll > 200) {
          $('.navmenu').addClass('nav-active');
       $('.sblack').css("color", "black");

    }
    else{
          $('.navmenu').removeClass('nav-active');
       $('.sblack').css("color", "white");

    }


  if (scroll > 600) {
  	$('.fixedbtn').addClass('showbtn');
  }
  else{
  	  	$('.fixedbtn').removeClass('showbtn');
  }


	 });
});






   var bmenu  = document.querySelector('.ham');
   bmenu.addEventListener('click',  function(){

   var smmenu = document.querySelector('.smmenu');
   smmenu.classList.toggle('smactive');
   });