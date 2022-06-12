// goTop
$(document).ready(function () {
    $(window).scroll(function (e) {
        var scrollY = window.scrollY;
        if (scrollY < 200) {
            $('.go-to-top').removeClass('show');
        } else{
            $('.go-to-top').addClass('show');
        }       
    });    
});

$(".go-to-top").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });