; (function () {
    if (document.body.classList.contains('service')) {
        $(document).ready(function () {


            var controller = new ScrollMagic.Controller();
            var services = $(".servicesBlock_item");
            services.each(function (i, el) {

                new ScrollMagic.Scene({ duration: el.offsetHeight, triggerElement: el })
                    .setClassToggle(el, "servicesBlock_image__active")
                    .addTo(controller);
            });

            $('.owl-carousel').owlCarousel({
                loop: true,
                item: 3,
                stagePadding: 25,
                margin: 30,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,


            });

        });
    }
})();