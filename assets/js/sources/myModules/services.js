; (function () {
    if (document.body.classList.contains('services')) {
        $(document).ready(function () {

            var owl = $('.owl-carousel');
            var serviceTypeSelector = $(".innerJumbo_serviceType");
            owl.owlCarousel({
                nav: false,
                items: 1,
                touchDrag: false,
                mouseDrag: false,
            });

            serviceTypeSelector.click(function () {

                if (this == serviceTypeSelector[0]) {
                    window.location.hash = "#personal";

                } else {
                    window.location.hash = "#corp";

                }
            });
            if (window.location.hash) {
                changeServiceType(window.location.hash);
            }
            $(window).on('hashchange', function () {
                changeServiceType(window.location.hash);
            });

            function changeServiceType(hash) {
                if (hash == "#personal") {
                    serviceTypeSelector.removeClass("selected");
                    serviceTypeSelector.eq(0).addClass("selected");
                    $(".innerJumbo_services").removeClass("innerJumbo_services__corp");
                    owl.trigger('to.owl.carousel', 0);

                } else if (hash == "#corp") {
                    serviceTypeSelector.removeClass("selected");
                    serviceTypeSelector.eq(1).addClass("selected");
                    $(".innerJumbo_services").addClass("innerJumbo_services__corp");
                    owl.trigger('to.owl.carousel', 1);
                }
            }
            var controller = new ScrollMagic.Controller();
            var services = $(".servicesBlock_item");
            services.each(function (i, el) {
                
                new ScrollMagic.Scene({ duration: el.offsetHeight, triggerElement: el })
                    .setClassToggle(el, "servicesBlock_image__active")
                    .addTo(controller);
            });

        });
    }
})();