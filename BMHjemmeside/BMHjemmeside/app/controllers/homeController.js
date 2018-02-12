app.controller('homeController', function ($scope) {

    // set initial footer margin
    var footerHeight = $(".footer").height();
    $(".footer").css('margin-bottom', (footerHeight * -1) + "px");

    //$("#my-video").css('max-width', window.innerWidth + "px");
    $(window).resize(function () {
        var checkHeight = $(".footer").height()
        if (footerHeight !== checkHeight) {
            $(".footer").css('margin-bottom', (checkHeight * -1) + "px");
            footerHeight = checkHeight;
        }
    });
});