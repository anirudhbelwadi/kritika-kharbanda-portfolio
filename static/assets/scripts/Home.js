$(".left_header").hover(
    function () {
        console.log("hover left in");
        //$(".left_header").css("background-color", "black")
        $(".left_header").addClass("left_header_hover");
        $(".left_header_image").css("height", "700px");
        $(".left_header").css("width", "70%");
        $(".left_header").css("overflow", "visible");
        $(".child_2_text").css("color", "transparent");
        $(".child_1_text").css("font-size", "2.2em");
        $(".right_header_image").fadeOut();
    }, function () {
        console.log("hover left out");
        //$(".left_header").css("background-color", "white")
        $(".left_header").removeClass("left_header_hover");
        $(".left_header_image").css("height", "550px");
        $(".left_header").css("width", "50%");
        $(".left_header").css("overflow", "hidden");
        $(".child_2_text").css("color", "black");
        $(".child_1_text").css("font-size", "2em");
        $(".right_header_image").fadeIn();
    }
);

$(".bi-arrow-up-square-fill").hide();

$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 50) {
        $(".bi-arrow-up-square-fill").fadeIn();
    }
    if (scroll_amount == 0) {
        $(".bi-arrow-up-square-fill").fadeOut();
    }
});

//document.querySelector("left_header").addEventListener("hover", function () {
//    console.log("hover left in");
//}, false);

$(".right_header").hover(
    function () {
        console.log("hover right in");
        //$(".right_header").css("background-color", "black")
        $(".right_header").addClass("right_header_hover");
        $(".right_header_image").css("height", "700px");
        $(".right_header").css("width", "70%");
        $(".right_header").css("overflow", "visible");
        $(".child_1_text").css("color", "transparent");
        $(".child_2_text").css("font-size", "2.2em");
        $(".left_header_image").fadeOut();
    }, function () {
        console.log("hover rightout");
        //$(".right_header").css("background-color", "white")
        $(".right_header").addClass("right_header_hover");
        $(".right_header_image").css("height", "550px");
        $(".right_header").css("width", "50%");
        $(".right_header").css("overflow", "hidden");
        $(".child_1_text").css("color", "black");
        $(".child_2_text").css("font-size", "2em");
        $(".left_header_image").fadeIn();
    }
);

$('.hover_image').hover(function () {
    $(this).addClass('hover_style');
},
    function () {
        $(this).removeClass('hover_style');
    });

// Video aspect ratio maintainer
var j = 0;
const video_width = $(".comp_video").width()
comp_video_array = document.getElementsByClassName('comp_video')
for (j = 0; j < comp_video_array.length; j++) {
    comp_video_array[j].style.height = (9 / 16) * video_width + "px";
}
// Document ready - means the page is loaded
$(document).ready(function () {
    $(window).resize(function () {
        var j = 0;
        const video_width = $(".comp_video").width()
        comp_video_array = document.getElementsByClassName('comp_video')
        for (j = 0; j < comp_video_array.length; j++) {
            comp_video_array[j].style.height = (9 / 16) * video_width + "px";
        }
    });
});
