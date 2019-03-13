;(function(){
    $('.currentYear').text(moment().year());
    $('.headerMenu_menuLink').click(function () {
        $('.headerMenu').toggleClass('headerMenu__activated');
        if (!$('.headerMenu').hasClass('headerScroll')) {
            $('.headerMenu').addClass('headerScroll');
        }
    });
    if (document.querySelector('#phoneInput2') !== null) {
        $('#phoneInput2').mask('+7 (000) 000 - 00 - 00');
    }
    
    window.onscroll = function() {
        var nav = document.querySelector('.headerMenu');
        if (this.scrollY <= 10) nav.className = 'headerMenu'; else nav.className = 'headerMenu headerScroll';
      };
    })();