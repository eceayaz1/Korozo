/**=== MOBILE MENU JS START ===****/
$(document).ready(function () {
    $("#menu").mmenu({
        extensions: ["position-right"]
    });
});
/**=== MOBILE MENU JS END ===****/
/**=== MENU SCROLL FIXED JS START ===****/
$(document).ready(function () {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".section-two").position();
        if (scroll > topDist.top) {
            $('.main-navbar-area').css({ "position": "fixed", "top": "0", "width": "100%" });
            $('.main-navbar-area').addClass("nav-fixed");
            $('.main-menu-bottom').addClass("main-menu-bottom-fixed");
        } else {
            $('.main-navbar-area').css({ "position": "static", "top": "auto" });
            $('.main-menu-bottom').removeClass("main-menu-bottom-fixed");
        }
    });
});
/**=== MENU SCROLL FIXED JS END ===****/
/**=== HOME SCROLL VIDEO JS START ===****/
if (document.querySelector(".intro") != null) {
    const intro = document.querySelector(".intro");
    const video = intro.querySelector("video");
    //   const text = intro.querySelector("h1");
    //END SECTION
    const section = document.querySelector("section");
    const end = section.querySelector("h1");

    //SCROLLMAGIC
    const controller = new ScrollMagic.Controller();

    //Scenes
    let scene = new ScrollMagic.Scene({
        duration: 2520,
        triggerElement: intro,
        triggerHook: 0
    })
        .setPin(intro)
        .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
        duration: 2000,
        triggerElement: intro,
        triggerHook: 0
    })
        .addTo(controller);

    //Video Animation
    let accelamount = 0.3;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", e => {
        scrollpos = e.scrollPos / 2000;
    });

    setInterval(() => {
        delay += (scrollpos * 4 - delay) * accelamount;
        video.currentTime = delay;
    }, 40);
}

$(document).ready(function () {
    var scrolled = false; // Bayrak de�i�keni

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 50 && !scrolled) {
            $(".scrollTop").addClass("white-content");
            scrolled = true; 
        } else if ($(window).scrollTop() + $(window).height() < $(document).height() - 50 && scrolled) {
            $(".scrollTop").removeClass("white-content");
            scrolled = false;
        }
    });
});
/**=== HOME SCROLL VIDEO JS END ===****/

/**=== VIDEO POPUP JS START ===****/
$(document).ready(function () {
    // Gets the video src from the data-src on each button
    var $videoSrc;
    $(".video-btn").click(function () {
        $videoSrc = $(this).attr("data-src");
        console.log("button clicked" + $videoSrc);
    });

    // when the modal is opened autoplay it
    $("#myModal").on("shown.bs.modal", function (e) {
        console.log("modal opened" + $videoSrc);
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr(
            "src",
            $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
        );
    });

    // stop playing the youtube video when I close the modal
    $("#myModal").on("hide.bs.modal", function (e) {
        // a poor man's stop video
        $("#video").attr("src", $videoSrc);
    });

    // document ready
});
/**=== VIDEO POPUP JS END ===****/




/**===SCROLL TOP JS END ===****/
var scrollTop = $(".scrollTop");

$(window).on("scroll", function () {
    var topPos = $(this).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    if (documentHeight - topPos - windowHeight < 1000) {
        $(scrollTop).css("opacity", "0.5");
    } else {
        $(scrollTop).css("opacity", "0");
    }
});

$(scrollTop).on("click touchstart", function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

/**=== SCROLL TOP JS END ===****/

/**=== SEARCH JS  END ===****/
(function ($) {

    $.fn.searchBox = function (ev) {

        var $searchEl = $('.search-elem');
        var $placeHolder = $('.placeholder');
        var $sField = $('#search-field');

        if (ev === "open") {
            $searchEl.addClass('search-open')
        };

        if (ev === 'close') {
            $searchEl.removeClass('search-open'),
                $placeHolder.removeClass('move-up'),
                $sField.val('');
        };

        var moveText = function () {
            $placeHolder.addClass('move-up');
        }

        $sField.focus(moveText);
        $placeHolder.on('click', moveText);

        $('.submit').prop('disabled', true);
        $('#search-field').keyup(function () {
            if ($(this).val() != '') {
                $('.submit').prop('disabled', false);
            }
        });
    }

}(jQuery));

$('.search-btn').on('click', function (e) {
    $(this).searchBox('open');
    e.preventDefault();
});

$('.close').on('click', function () {
    $(this).searchBox('close');
});
/**=== SEARCH JS  END ===****/

/**=== HOME TAB MENU MOBILE SLIDER START ===****/


var init = true; // De�i�iklik 1: init'i true olarak ba�lat
var pricingCardSwiper;

function swiperCard() {
    if (window.innerWidth <= 991) {
        if (init) { // De�i�iklik 2: init kontrol� tersine �evrildi
            init = false; // De�i�iklik 2: init'i false olarak ayarla
            pricingCardSwiper = new Swiper(".cardSlider", {
                slidesPerView: "1",
                spaceBetween: 0,
                grabCursor: true,
                keyboard: true,
                autoHeight: false,
                navigation: {
                    nextEl: '.swiper-button-next-cardslider',
                    prevEl: '.swiper-button-prev-cardslider',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    }
                },
            });
        }
    } else if (!init) { // De�i�iklik 3: init kontrol� tersine �evrildi
        pricingCardSwiper.destroy();
        init = true; // De�i�iklik 3: init'i true olarak ayarla
    }
}

document.addEventListener("DOMContentLoaded", function () { // De�i�iklik 4: DOMContentLoaded kullan�ld�
    swiperCard();
    window.addEventListener("resize", swiperCard);
});
/**=== HOME TAB MENU MOBILE SLIDER END ===****/
/**=== HOME VIDEO SLIDER START ===****/
if ($(".swiperAbout") != null) {
    const swiperAbout = new Swiper('.swiper-about', {
        // Optional parameters
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-aboutvideo',
            prevEl: '.swiper-button-prev-aboutvideo',
        },
        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 480px
            1024: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            // when window width is >= 640px
            1280: {
                slidesPerView: 1,
                spaceBetween: 50
            }
        }
    });
}

/**=== HOME VIDEO SLIDER END ===****/


/**=== HOME NEWS SLIDER START ===****/
if ($(".swiper-responsive") != null) {
    const swiper = new Swiper('.swiper-responsive', {
        // Optional parameters
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-news',
            prevEl: '.swiper-button-prev-news',
        },
        breakpoints: {
            575: {
                slidesPerView: 2,
                spaceBetween: 30,

            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        }
    });
}

/**=== HOME NEWS SLIDER END ===****/


/**=== koro keyword find  START ===****/
function replaceWordInDiv(divSelector, wordToFind, replacement) {
    var kelimeDegistir = function (match) {
        return "<strong>" + match + "</strong>";
    };

    document.querySelectorAll(divSelector).forEach(function (element) {
        var content = element.innerHTML;
        var yeniContent = content.replace(new RegExp(wordToFind, "gi"), kelimeDegistir);
        element.innerHTML = yeniContent;
    });
}

//HOME ACCODION MENU

$(document).ready(function () {
    $(".accordion-gallery").each(function () {
        var slide = $(this);
        var accordions = slide.find(".accordion_intro");
        var images = slide.find(".accordion_images img");

        accordions.click(function () {
            var accordion = $(this).closest('.accordion');
            var index = accordion.index();

            $(".accordion_active", slide).removeClass("accordion_active").find(".accordion_content").css("max-height", "");
            accordion.addClass("accordion_active");

            if (accordion.hasClass("accordion_active")) {
                accordion.find(".accordion_content").css("max-height", accordion.find(".accordion_content")[0].scrollHeight + "px");
            } else {
                accordion.find(".accordion_content").css("max-height", "");
            }

            // T�m g�rsellerden active s�n�f�n� kald�r
            images.removeClass("active");

            // T�klanan ba�l���n bir �nceki accordion_images i�indeki g�r�nt�s�n� active yap
            $(images[index]).addClass("active");
        });

        // �lk accordion'un otomatik olarak a��lmas� i�in:
        accordions.first().trigger("click");
    });
});



// Tab Men� kodlar�
$(document).on('click', '.Home-Tabs li', function () {
    $('.Home-Tabs li').removeClass('active');
    $('.Home-Tabs ul').toggleClass('expanded');
    $(this).addClass('active');
    var tab_id = $(this).attr('data-tab');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $('#' + tab_id).addClass('current');
});

//replaceWordInDiv(".Home-Tabs", "koro", "");
replaceWordInDiv(".keywordFinderAndReplace", "koro", "");

/**=== koro keyword find  END ===****/
var wasBelow1280 = false;
var wasAbove1280 = false;

$(window).on('resize', function () {
    var win = $(this);
    var currentWidth = win.width();

    if (currentWidth <= 1270 && !wasBelow1280) {
        AOS.init({
            disable: true
        });
        wasBelow1280 = true;
        wasAbove1280 = false;
    } else if (currentWidth > 1270 && !wasAbove1280) {
        AOS.init({
            disable: false
        });
        wasBelow1280 = false;
        wasAbove1280 = true;
    }
});

/*AOS ANIMATE START*/
AOS.init({ disable: 'mobile' });
/*AOS ANIMATE END */

$(document).on('click', '.Home-Tabs1 li', function () {
    $('.Home-Tabs1 li').removeClass('active');
    $('.Home-Tabs1 ul').toggleClass('expanded');
    $(this).addClass('active');
    var tab_id = $(this).attr('data-tab');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $('#' + tab_id).addClass('current');
});


/*NEWS SLİDER*/

  document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slider = document.querySelector(".slider-new");

  let counter = 0;

  nextBtn.addEventListener("click", function () {
    counter++;
    if (counter === slider.children.length - 2) {
      counter = 0;
    }
    updateSlider();
  });

  prevBtn.addEventListener("click", function () {
    counter--;
    if (counter < 0) {
      counter = slider.children.length - 3;
    }
    updateSlider();
  });

  function updateSlider() {
    slider.style.transform = `translateX(-${counter * 33.333}%)`;
  }
});
/*new slider end*/

/*event slider*/

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn1 = document.querySelector(".prev1");
    const nextBtn1 = document.querySelector(".next1");
    const slider = document.querySelector(".card-event");
  
    let counter = 0;
  
    nextBtn1.addEventListener("click", function () {
      counter++;
      if (counter === slider.children.length - 2) {
        counter = 0;
      }
      updateSlider();
    });
  
    prevBtn1.addEventListener("click", function () {
      counter--;
      if (counter < 0) {
        counter = slider.children.length - 3;
      }
      updateSlider();
    });
  
    function updateSlider() {
      slider.style.transform = `translateX(-${counter * 33.333}%)`;
    }
  });

