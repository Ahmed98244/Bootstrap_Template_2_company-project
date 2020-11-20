$(function () {
  "use strict";

  // adjust slider height

  var windowHeight = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider, .carousel-item").height(windowHeight - (upperH + navH));

  // featured work shuffle image
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(this).data("class") === "all") {
      $(".shuffle-image .col-md").css("opacity", 1);
    } else {
      $(".shuffle-image .col-md").css(
        "opacity",
        ".08",
        "background-color",
        "rgba(0,0,0,.5)"
      );
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
});

// niceScroll
$("body").niceScroll({
  cursorcolor: "#08526d",
  background: "#DDD",
  cursorwidth: "15px",
  cursorborderradius: "20px",
  cursoropacitymin: .4
});

// funnyText

$(function () {
  "use strict";
  $(".overview .h1").funnyText({
    speed: 300,
    color: "#f00",
    borderColor: "#080",
  });
});

$(function () {
  "use strict";
  $(".featured-work h2").funnyText({
    speed: 300,
    color: "#f00",
    borderColor: "#080",
  });
});

$(function () {
  "use strict";
  $(".pricing-table h2").funnyText({
    speed: 300,
    color: "#f00",
    borderColor: "#080",
  });
});

$(function () {
  "use strict";
  $(".latest-post h2").funnyText({
    speed: 300,
    color: "#f00",
    borderColor: "#080",
  });
});
