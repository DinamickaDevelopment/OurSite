$(document).ready(function () {

    function play() {
        setInterval(function () {
            var next = $(".slideshow .active").removeClass("active").next();
            if (!next.length) {
                next = $(".slideshow .image:first");
            }
            next.addClass("active");
        }, 5000);
    }
    play();

});
