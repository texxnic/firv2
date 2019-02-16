window.onscroll = () => {
    const nav = document.querySelector('.headerMenu');
    if (this.scrollY <= 10) nav.className = 'headerMenu'; else nav.className = 'headerMenu headerScroll';
};
$(document).ready(function () {
    $('.currentYear').text(moment().year());
    

});


