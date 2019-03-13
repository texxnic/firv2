; (function () {
    if (document.body.classList.contains('premium')) {
        function animateCSS(element, animationName, callback) {
            var node = document.querySelector(element)
            node.classList.add('animated', animationName)

            function handleAnimationEnd() {
                node.classList.remove('animated', animationName)
                node.removeEventListener('animationend', handleAnimationEnd)

                if (typeof callback === 'function') callback()
            }

            node.addEventListener('animationend', handleAnimationEnd)
        }
        var buttonSend = document.querySelector(".contactCard__submit");
        buttonSend.onclick = function (e) {
            e.preventDefault();
            animateCSS(".form_firbo", "shake");
        };
    }
})();