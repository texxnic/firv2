
    if (document.body.classList.contains('index')) {

        TweenMax.set('.howBecomeClient_bubble', {
            opacity: 0,
            bottom: -30,
        });

        $(document).ready(function () {

            /* Парсинг новостей */

           

             /* Парсинг новостей */

            
            /* Крутилка цифр наших превосходств */

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

            /* Крутилка цифр наших превосходств */

            var controller = new ScrollMagic.Controller();


            var boobleAnim = TweenMax.staggerTo('.howBecomeClient_bubble', 0.5,

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
                .setTween(boobleAnim)
                
                .addTo(controller);
 
            


        });



    }
