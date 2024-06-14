// カルーセル
$('.voice__list').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:'<i class="fas fa-arrow-circle-left"></i>',
  nextArrow:'<i class="fas fa-arrow-circle-right"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});



// アコーディオン
$('.faq__answer').hide();
$('.faq__question').on('click', (e) => {
    if($(e.target).hasClass('active')) {
      $(e.target).removeClass('active');
      $(e.target).removeClass('after');
      $(e.target).next().hide();
    } else {
      $(e.target).addClass('active');
      $(e.target).next().show(); 
    }
    console.log("hello")
  });