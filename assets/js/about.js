window.onscroll = () => {
    const nav = document.querySelector('.headerMenu');
    if (this.scrollY <= 10) nav.className = 'headerMenu'; else nav.className = 'headerMenu headerScroll';
};
$(document).ready(function () {
    $('.currentYear').text(moment().year());
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoWidth:true,
        
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        

    });




    var controller = new ScrollMagic.Controller();

    // main buble Animation


    new ScrollMagic.Scene({
        duration: $(window).height(),
        triggerHook: 0,

    })
        .setTween(".jumbo_png", { top: '-20%' })

        .addTo(controller);
    /* Прозрачность при скролле */
    new ScrollMagic.Scene({
        duration: $(window).height() / 2,
        triggerHook: 0,

    })
        .setTween(".jumbo", { opacity: 0 })

        .addTo(controller);
    $(".jumboText").mousemove(function (e) {

        parallaxIt(e, ".jumbo_png", -30);

        parallaxIt(e, ".jumbo__image", -70);
    });

    new ScrollMagic.Scene({
        duration: $(window).height() / 6,
        triggerHook: 0.5,
        triggerElement: '.aboutFirboSlide',

    })
        .setClassToggle(".aboutFirboSlide_word__F", "aboutFirboSlide__visible")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        duration: $(window).height() / 6,
        triggerHook: 0.5,
        triggerElement: '.aboutFirboSlide',
        offset: $(window).height() / 6

    })
        .setClassToggle(".aboutFirboSlide_word__I", "aboutFirboSlide__visible")
        .addIndicators()
        .addTo(controller);
    new ScrollMagic.Scene({
        duration: $(window).height() / 6,
        triggerHook: 0.5,
        triggerElement: '.aboutFirboSlide',
        offset: $(window).height() / 6 * 2

    })
        .setClassToggle(".aboutFirboSlide_word__R", "aboutFirboSlide__visible")
        .addIndicators()
        .addTo(controller);
    new ScrollMagic.Scene({
        duration: $(window).height() / 6,
        triggerHook: 0.5,
        triggerElement: '.aboutFirboSlide',
        offset: $(window).height() / 6 * 3

    })
        .setClassToggle(".aboutFirboSlide_word__B", "aboutFirboSlide__visible")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        duration: $(window).height() / 6,
        triggerHook: 0.5,
        triggerElement: '.aboutFirboSlide',
        offset: $(window).height() / 6 * 4

    })
        .setClassToggle(".aboutFirboSlide_word__O", "aboutFirboSlide__visible")
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({

        triggerHook: 0.5,
        triggerElement: '.aboutFirboSlide',
        offset: $(window).height() / 6 * 5

    })
        .setClassToggle(".aboutFirboSlide_letter", "aboutFirboSlide__visible")
        .addIndicators()
        .addTo(controller);
    new ScrollMagic.Scene({

        triggerHook: 0.5,
        triggerElement: '.aboutFirboSlide',
        offset: $(window).height() / 6 * 5

    })
        .setClassToggle(".aboutFirboSlide_capital", "aboutFirboSlide__visible")
        .addIndicators()
        .addTo(controller);






    function parallaxIt(e, target, movement) {
        var $this = $(".jumbo");
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });

    }

});


