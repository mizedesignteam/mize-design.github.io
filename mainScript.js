$(document).ready(function () {

  $(".upDownBtn").click(function(){
    if($('.menu').hasClass("on")) {
        $('.menu').addClass("off").removeClass("on");
        $('.fa-chevron-up').addClass("off").removeClass("on");
    } else {
        $('.menu').addClass("on").removeClass("off");
        $('.fa-chevron-up').addClass("on").removeClass("off");
    };
    e.stopPropagation();
  });
  $('.menu').click(function(e) {
    e.stopPropagation(); // 메뉴 내부 클릭 시에도 메뉴가 닫히지 않도록
} );
  $(document).click(function() {
    if ($('.menu').hasClass("on")) {  // 메뉴가 열려 있을 때만 닫기 동작
        $('.menu').addClass("off").removeClass("on");
        $('.fa-chevron-up').addClass("off").removeClass("on");
    }
  });

  $('#st1').click(function(){
    $('.state > h1').text('재실');
    $('.stateImg > img').attr('src', './img/inRoom.png');
    $('.menu').addClass("off").removeClass("on");
    $('.fa-chevron-up').addClass("off").removeClass("on");
  });
  $('#st2').click(function(){
    $('.state > h1').text('방해금지');
    $('.stateImg > img').attr('src', './img/noEntry.png');
    $('.menu').addClass("off").removeClass("on");
    $('.fa-chevron-up').addClass("off").removeClass("on");
  });
  $('#st3').click(function(){
    $('.state > h1').text('면담');
    $('.stateImg > img').attr('src', './img/meeting.png');
    $('.menu').addClass("off").removeClass("on");
    $('.fa-chevron-up').addClass("off").removeClass("on");
  });
  $('#st4').click(function(){
    $('.state > h1').text('식사');
    $('.stateImg > img').attr('src', './img/outRoom.png');
    $('.menu').addClass("off").removeClass("on");
    $('.fa-chevron-up').addClass("off").removeClass("on");
  });
  $('#st5').click(function(){
    $('.state > h1').text('외근');
    $('.stateImg > img').attr('src', './img/outside.png');
    $('.menu').addClass("off").removeClass("on");
    $('.fa-chevron-up').addClass("off").removeClass("on");
  });
  $('#st6').click(function(){
    $('.state > h1').text('회의');
    $('.stateImg > img').attr('src', './img/meeting.png');
    $('.menu').addClass("off").removeClass("on");
    $('.fa-chevron-up').addClass("off").removeClass("on");
  });
  $('#st7').click(function(){
    $('.state > h1').text('휴가');
    $('.stateImg > img').attr('src', './img/outRoom.png');
    $('.menu').addClass("off").removeClass("on");
    $('.fa-chevron-up').addClass("off").removeClass("on");
  });
  $('#st8').click(function(){
    $('.state > h1').text('퇴근');
    $('.stateImg > img').attr('src', './img/outRoom.png');
    $('.menu').addClass("off").removeClass("on");
    $('.fa-chevron-up').addClass("off").removeClass("on");
  });

  

});