
$(document).ready(function(){  


    $('.search-active').click(function (e) { 
        e.preventDefault();
        $('.search-active i').toggleClass('fa-search');
        $('.search-active i').toggleClass('fa-times');
        $('.search-form').toggle();
    });


    //swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // tiptool
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


      //product-slick
    $('.product-swiper').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        appendArrows:$(".arrowLocation"),
        prevArrow: `<i class="fas fa-chevron-left mx-2"></i>`,
        nextArrow: `<i class="fas fa-chevron-right"></i>`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    });

        //slick-user
    $('.user-slice').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        appendArrows:$(".user-arrow"),
        prevArrow: `<i class="fas fa-chevron-left prev"></i>`,
        nextArrow: `<i class="fas fa-chevron-right next"></i>`,
        infinite: true,
        dots: false,
    
      });
        
        //slick-blog
    $(".blog-slick").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        appendArrows:$('.blog-arrow'),
        prevArrow: `<i class="fas fa-chevron-left mx-2"></i>`,
        nextArrow: `<i class="fas fa-chevron-right"></i>`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
    })

      //slick-featured
    $('.featured-category-content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });


    //brands-img
    $('.brands-img').mouseenter(function (e) { 
        e.preventDefault();
        $(this).addClass('animate__swing');
        
    });    
    $('.brands-img').mouseleave(function (e) { 
        e.preventDefault();
        $(this).removeClass('animate__swing');
    });
    $(".brands-content").slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows:true,
        appendArrows: $('.brands-arrow'),
        prevArrow: `<i class="fas fa-chevron-left mx-2"></i>`,
        nextArrow: `<i class="fas fa-chevron-right"></i>`,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    });

    //footer-btn
    $('.footer-title').click(function() {
      event.preventDefault();
        $(this).siblings('ul').slideToggle(500);
        $(this).parent().siblings().find('ul').slideUp(500);
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up')
    });
         
      //imgfadeIn
      function getPosition(elm,str, e) {
        var x = elm.offsetWidth;
        var y = -(elm.offsetHeight);
        var k =  y/x //斜率
        //以上元素內的x軸,y軸,斜率
        var x0 = x/2;
        var y0 = y/2;
        //元素的中點xy座標
        var x1 = e.offsetX;
        var y1 = -e.offsetY;
        //鼠標座標
        var kk = (y1-y0) / (x1-x0);
        //鼠標到中線的斜率
        if (isFinite(kk)&& kk < -k && kk > k) {
            if (x1 > x0) {
                if (str == "進") {
                    $(elm).siblings('.imgbox').addClass("animate__fadeInRight").removeClass("animate__fadeOutRight animate__fadeOutLeft animate__fadeInLeft animate__fadeInDown animate__fadeOutUp animate__fadeInUp animate__fadeOutDown");
                }else{
                    $(elm).siblings('.imgbox').addClass("animate__fadeOutRight").removeClass("animate__fadeInRight animate__fadeInLeft animate__fadeOutLeft animate__fadeInDown animate__fadeOutUp animate__fadeInUp animate__fadeOutDown");
                }

            }else if (x1 < x0){
                if (str == "進") {
                    $(elm).siblings('.imgbox').addClass("animate__fadeInLeft").removeClass("animate__fadeInRight animate__fadeOutLeft animate__fadeOutRight animate__fadeInDown animate__fadeOutUp animate__fadeInUp animate__fadeOutDown");
                }else{
                    $(elm).siblings('.imgbox').addClass("animate__fadeOutLeft").removeClass("animate__fadeInLeft animate__fadeInRight animate__fadeOutRight animate__fadeInDown animate__fadeOutUp animate__fadeInUp animate__fadeOutDown");
                }
            }

        }else{
            if (y1 > y0) {
                if (str == "進") {
                    $(elm).siblings('.imgbox').addClass("animate__fadeInDown").removeClass("animate__fadeInRight animate__fadeInLeft animate__fadeOutLeft animate__fadeOutRight animate__fadeOutUp animate__fadeInUp animate__fadeOutDown");
                }else{
                    $(elm).siblings('.imgbox').addClass("animate__fadeOutUp").removeClass("animate__fadeInLeft animate__fadeOutLeft animate__fadeInRight animate__fadeOutRight animate__fadeInDown animate__fadeInUp animate__fadeOutDown");
                }
            }else if(y1 < y0){
                if (str == "進") {
                    $(elm).siblings('.imgbox').addClass("animate__fadeInUp").removeClass("animate__fadeInRight animate__fadeOutLeft animate__fadeInLeft animate__fadeOutRight animate__fadeInDown animate__fadeOutUp animate__fadeOutDown");
                }else{
                    $(elm).siblings('.imgbox').addClass("animate__fadeOutDown").removeClass("animate__fadeInLeft  animate__fadeOutLeft animate__fadeInRight animate__fadeOutRight animate__fadeInDown animate__fadeOutUp animate__fadeInUp");
                }
            }
        }
    }
    $('.rep').on('mouseenter', function (e) {    
      var position = getPosition(this,"進",e)
      });

      $('.rep').on('mouseleave', function (e) {    
      var position = getPosition(this,"出",e)
      });


    //   //parallax
    //   $(window).addEventListener('scroll', () => {
    //     const scrollPositionY = $(window).pageYOffset;      
    //     $('.featured-category').style[background-position] = `50% ${scrollPositionY * -2} %)`;
    //     console.log(scrollPositionY)
    //   });


});

