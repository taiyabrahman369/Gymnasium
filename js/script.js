//fixed nav
$(window).scroll(function(){
  $scrollamout = $(window).scrollTop();
  
  if($scrollamout > 500){
    $(".menu").addClass("sticky")
  }else{
    $(".menu").removeClass("sticky")
  }

  if($scrollamout > 800){
    $(".btop").fadeIn()
  }else{
    $(".btop").fadeOut()
  }
})
//back to top
$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})

//banner-part
$('.banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


 //venobox 
  $(document).ready(function(){
    $('.venobox').venobox(); 
});


//team-part
$('#team-part .team-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
             
          }
  },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
          }
  },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:true,
          }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

//testi-part
$('#testi-part .testi-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
             
          }
  },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
          }
  },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:true,
          }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

//counterup js
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

//class part
$(document).ready(function(){
        
  $("#colorful").colorfulTab();    
  

  
  $("#colorful").colorfulTab({
      theme: "colorful",
      overlayColor: "#000",
      overlayOpacity: "0.6"
  });   

});

//market-part
$('#market-part .market-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
             
          }
  },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
          }
  },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:true,
          }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});