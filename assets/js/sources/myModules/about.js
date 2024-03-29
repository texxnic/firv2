; (function () {

    if (document.body.classList.contains('about')) {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                autoWidth: true,

                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,


            });
            var controller = new ScrollMagic.Controller();

            new ScrollMagic.Scene({
                duration: $(window).height() / 6,
                triggerHook: 0.5,
                triggerElement: '.aboutFirboSlide',

            })
                .setClassToggle(".aboutFirboSlide_word__F", "aboutFirboSlide__visible")

                .addTo(controller);

            new ScrollMagic.Scene({
                duration: $(window).height() / 6,
                triggerHook: 0.5,
                triggerElement: '.aboutFirboSlide',
                offset: $(window).height() / 6

            })
                .setClassToggle(".aboutFirboSlide_word__I", "aboutFirboSlide__visible")

                .addTo(controller);
            new ScrollMagic.Scene({
                duration: $(window).height() / 6,
                triggerHook: 0.5,
                triggerElement: '.aboutFirboSlide',
                offset: $(window).height() / 6 * 2

            })
                .setClassToggle(".aboutFirboSlide_word__R", "aboutFirboSlide__visible")

                .addTo(controller);
            new ScrollMagic.Scene({
                duration: $(window).height() / 6,
                triggerHook: 0.5,
                triggerElement: '.aboutFirboSlide',
                offset: $(window).height() / 6 * 3

            })
                .setClassToggle(".aboutFirboSlide_word__B", "aboutFirboSlide__visible")

                .addTo(controller);

            new ScrollMagic.Scene({
                duration: $(window).height() / 6,
                triggerHook: 0.5,
                triggerElement: '.aboutFirboSlide',
                offset: $(window).height() / 6 * 4

            })
                .setClassToggle(".aboutFirboSlide_word__O", "aboutFirboSlide__visible")

                .addTo(controller);

            new ScrollMagic.Scene({

                triggerHook: 0.5,
                triggerElement: '.aboutFirboSlide',
                offset: $(window).height() / 6 * 5

            })
                .setClassToggle(".aboutFirboSlide_letter", "aboutFirboSlide__visible")

                .addTo(controller);
            new ScrollMagic.Scene({

                triggerHook: 0.5,
                triggerElement: '.aboutFirboSlide',
                offset: $(window).height() / 6 * 5

            })
                .setClassToggle(".aboutFirboSlide_capital", "aboutFirboSlide__visible")

                .addTo(controller);








        });

    }

})();
