
TweenMax.set('.howBecomeClient_bubble', {
    opacity: 0,
    bottom: -30,
});
window.onscroll = () => {
    const nav = document.querySelector('.headerMenu');
    
    if (this.scrollY <= 10) nav.className = 'headerMenu'; else nav.className = 'headerMenu headerScroll';
    
};
$(document).ready(function () {
    $('.currentYear').text(moment().year());
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        onChange: owlChanged,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
    });
    var el = document.querySelector('.aboutCompanyGhost');
    od = new Odometer({
        el: el,
        value: 20,



    });
    function owlChanged(event) {
        switch (event.item.index) {
            case 1:
                od.update(20);
                break;
            case 2:
                od.update(15);
                break;
            case 3:
                od.update(60);
                break;

        }
    };

    var controller = new ScrollMagic.Controller();

    // main buble Animation
    var tween = TweenMax.staggerTo('.howBecomeClient_bubble', 0.5,

        {
            opacity: 1,
            bottom: 0,
        },
        0.4
    );
    new ScrollMagic.Scene({
        triggerElement: '.howBecomeClient',
        triggerHook: 0.8,

    })
        .setTween(tween)
        .addTo(controller);
        

    new ScrollMagic.Scene({
        duration: $(window).height(),
        triggerHook: 0,

    })
        .setTween(".jumbo_png", { top: '-20%' })
        /* .addIndicators() */
        .addTo(controller);
    /* Прозрачность при скролле */
    new ScrollMagic.Scene({
        duration: $(window).height() / 2,
        triggerHook: 0,

    })
        .setTween(".jumbo", { opacity: 0 })
        /* .addIndicators() */
        .addTo(controller);
    $(".jumboText").mousemove(function (e) {

        parallaxIt(e, ".jumbo_png", -30);
        //   parallaxIt(e, ".jumbo__logo", -45);
        parallaxIt(e, ".jumbo__image", -70);
    });
   





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


