$(document).ready(function () {
    $(window).resize(function () {
        var distance = 0;
        if ($(window).width() < 768) {
            distance = $(".computation_image").width() / 2 * -1;
            $(".computation_image").css("bottom", distance + "px");
            $(".architecture_image").css("top", distance + "px");
            $(".computation_image").css("right", "0px");
            $(".architecture_image").css("left", "0px");
        }
        else {
            distance = $(".col-md-3").width() / 2 * -1;
            $(".computation_image").css("right", distance + "px");
            $(".architecture_image").css("left", distance + "px");
            $(".computation_image").css("bottom", "0px");
            $(".architecture_image").css("top", "0px");
        }
    });
});

var distance = 0;
if ($(window).width() < 768) {
    distance = $(".computation_image").width() / 2 * -1;
    $(".computation_image").css("bottom", distance + "px");
    $(".architecture_image").css("top", distance + "px");
    $(".computation_image").css("right", "0px");
    $(".architecture_image").css("left", "0px");
}
else {
    distance = $(".col-md-3").width() / 2 * -1;
    $(".computation_image").css("right", distance + "px");
    $(".architecture_image").css("left", distance + "px");
    $(".computation_image").css("bottom", "0px");
    $(".architecture_image").css("top", "0px");
}


$("#computational_image_section").hover(
    function () {
        if ($(window).width() > 768) {
            $("#architecture_image_section").hide();
            $("#architecture_text_section").hide();
            $("#computational_image_section").css("overflow", "visible");
            $("#computational_image_section").removeClass("col-md-3");
            $("#computational_image_section").addClass("col-md-6");
            $("#computational_text_section h2").css("font-weight", "700");
        }
    }, function () {
        if ($(window).width() > 768) {
            $("#architecture_image_section").show();
            $("#architecture_text_section").show();
            $("#computational_image_section").css("overflow", "hidden");
            $("#computational_image_section").addClass("col-md-3");
            $("#computational_image_section").removeClass("col-md-6");
            $("#computational_text_section h2").css("font-weight", "500");
        }
    }
);
$("#computational_text_section").hover(
    function () {
        if ($(window).width() > 768) {
            $("#architecture_image_section").hide();
            $("#architecture_text_section").hide();
            $("#computational_image_section").css("overflow", "visible");
            $("#computational_image_section").removeClass("col-md-3");
            $("#computational_image_section").addClass("col-md-6");
            $("#computational_text_section h2").css("font-weight", "700");
        }
    }, function () {
        if ($(window).width() > 768) {
            $("#architecture_image_section").show();
            $("#architecture_text_section").show();
            $("#computational_image_section").css("overflow", "hidden");
            $("#computational_image_section").addClass("col-md-3");
            $("#computational_image_section").removeClass("col-md-6");
            $("#computational_text_section h2").css("font-weight", "500");
        }
    }
);
$("#architecture_image_section").hover(
    function () {
        if ($(window).width() > 768) {
            $("#computational_image_section").hide();
            $("#computational_text_section").hide();
            $("#computational_image_section").fadeOut();
            $("#architecture_image_section").css("overflow", "visible");
            $("#architecture_image_section").removeClass("col-md-3");
            $("#architecture_image_section").addClass("col-md-6");
            $("#architecture_text_section").removeClass("col-md-3");
            $("#architecture_text_section").addClass("col-md-6");
            $(".architecture_image").css("left", "0px");
            $("#architecture_text_section h2").css("font-weight", "700");
        }
    }, function () {
        if ($(window).width() > 768) {
            $("#computational_image_section").show();
            $("#computational_text_section").show();
            $("#computational_image_section").fadeIn();
            $("#architecture_image_section").css("overflow", "hidden");
            $("#architecture_image_section").addClass("col-md-3");
            $("#architecture_image_section").removeClass("col-md-6");
            $("#architecture_text_section").addClass("col-md-3");
            $("#architecture_text_section").removeClass("col-md-6");
            $("#architecture_text_section h2").css("font-weight", "500");
            var distance = 0;
            if ($(window).width() < 768) {
                distance = $(".computation_image").width() / 2 * -1;
                $(".computation_image").css("bottom", distance + "px");
                $(".architecture_image").css("top", distance + "px");
                $(".computation_image").css("right", "0px");
                $(".architecture_image").css("left", "0px");
            }
            else {
                distance = $(".col-md-3").width() / 2 * -1;
                $(".computation_image").css("right", distance + "px");
                $(".architecture_image").css("left", distance + "px");
                $(".computation_image").css("bottom", "0px");
                $(".architecture_image").css("top", "0px");
            }
        }
    }
);
$("#architecture_text_section").hover(
    function () {
        if ($(window).width() > 768) {
            $("#computational_image_section").hide();
            $("#computational_text_section").hide();
            $("#computational_image_section").fadeOut();
            $("#architecture_image_section").css("overflow", "visible");
            $("#architecture_image_section").removeClass("col-md-3");
            $("#architecture_image_section").addClass("col-md-6");
            $("#architecture_image_section").removeClass("col-md-3");
            $("#architecture_image_section").addClass("col-md-6");
            $("#architecture_text_section").removeClass("col-md-3");
            $("#architecture_text_section").addClass("col-md-6");
            $(".architecture_image").css("left", "0px");
            $("#architecture_text_section h2").css("font-weight", "700");
        }
    }, function () {
        if ($(window).width() > 768) {
            $("#computational_image_section").show();
            $("#computational_text_section").show();
            $("#computational_image_section").fadeIn();
            $("#architecture_image_section").css("overflow", "hidden");
            $("#architecture_image_section").addClass("col-md-3");
            $("#architecture_image_section").removeClass("col-md-6");
            $("#architecture_text_section").addClass("col-md-3");
            $("#architecture_text_section").removeClass("col-md-6");
            $("#architecture_text_section h2").css("font-weight", "500");
            var distance = 0;
            if ($(window).width() < 768) {
                distance = $(".computation_image").width() / 2 * -1;
                $(".computation_image").css("bottom", distance + "px");
                $(".architecture_image").css("top", distance + "px");
                $(".computation_image").css("right", "0px");
                $(".architecture_image").css("left", "0px");
            }
            else {
                distance = $(".col-md-3").width() / 2 * -1;
                $(".computation_image").css("right", distance + "px");
                $(".architecture_image").css("left", distance + "px");
                $(".computation_image").css("bottom", "0px");
                $(".architecture_image").css("top", "0px");
            }
        }
    }
);