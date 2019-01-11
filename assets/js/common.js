window.onscroll = () => {
    const nav = document.querySelector('.headerMenu');
    if(this.scrollY <= 10) nav.className = 'headerMenu'; else nav.className = 'headerMenu headerScroll';
  };

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
      duration: $(window).height(),
      triggerHook: 0,
      
  })
      .setTween(".jumbo_png", { top: '-20%'})
      .addIndicators()
      .addTo(controller);
  new ScrollMagic.Scene({
      duration: $(window).height(),
      triggerHook: 0,
      
  })
  .setTween(".jumbo", { opacity: 0 })
      .addIndicators()
      .addTo(controller);
  $(".jumboText").mousemove(function (e) {
      console.log(e);
      parallaxIt(e, ".jumbo_png", -60);
      // parallaxIt(e, ".jumboText", -45);
      parallaxIt(e, ".jumbo__image", -30);
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