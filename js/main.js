$(document).ready(function(){

    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse');

    /* click event on toggle menu*/
    $togglecollapse.click(function(){
        $nav.toggleClass('collapse');
    })

   //owl-carosoul for blog
  $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay:false,
      autoplayTimeout: 3000,
      dots:true,
      nav:true,
      navText : [$('.owl-navigation.owl-nav-prev'),$('.owl-navigation.owl-nav-next')],
  
    }); 

    

});