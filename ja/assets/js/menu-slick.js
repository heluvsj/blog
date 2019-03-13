$(function() {
  $('.navbar-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    variableWidth: true,
    prevArrow: '<button type="button" class="menu-arrow-left"><svg class="svgIcon-use" width="21" height="21"><path d="M13.402 16.957l-6.478-6.479L13.402 4l.799.71-5.768 5.768 5.768 5.77z" fill-rule="evenodd"></path></svg></button>',
    nextArrow: '<button type="button" class="menu-arrow-right"><svg class="svgIcon-use" width="21" height="21"><path d="M8.3 4.2l6.4 6.3-6.4 6.3-.8-.8 5.5-5.5L7.5 5" fill-rule="evenodd"></path></svg></button>',
    responsive: [{
      breakpoint: 321,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 9
      }
    }]
  });
});
