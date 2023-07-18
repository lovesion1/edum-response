$(function(){
  const $header =$("header")
  const $headerHeight = $header.outerHeight()
  const $mainmenu = $("nav .mainmenu li")

  $mainmenu.hover(function(){
    $header.stop().animate({
      height:$headerHeight+$(this).find(".submenu").outerHeight()
    },300)
  },function(){
    $header.stop().animate({
      height:$headerHeight
    },300)
  })
  // 태블릿용 메뉴 버튼을 클릭하면 전체 화면 메뉴가 나오도록
  $(".tmclick").click(function(){
    $(".tmport").fadeIn()
  })
  $(".tmport button").click(function(){
    $(".tmport").fadeOut()
  })
  $(".mslide").bxSlider()


  $mainmenu.hover(function(){
    $(this).find(".submenu").stop().fadeToggle()
  })

  $("ul.mslide").bxSlider({
    mode :'fade',
    auto:true,
    controls:true
  })
  AOS.init();
  $("ul.bxcover").bxSlider({
    maxSlides:4,
    minSlides:2,
    moveSlides:1,
    slideWidth:300,
    slideMargin:25,
    auto:true,
    pause:3000,
    constrols:false,
    pager:false
  })

  $(window).scroll(function(){
    if($(this).scrollTop()>900){
      $(".topbtn").fadeIn()
    }else{
      $(".topbtn").fadeOut()
    }
  })
  $(".topbtn").click(function(){
    $('html,body').animate({
      scrollTop:0
    },1000)

  })



})