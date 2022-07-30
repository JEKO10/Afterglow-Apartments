AOS.init();

var folder = "images/";

$.ajax({
  url: folder,
  success: function (data) {
    $(data)
      .find("a")
      .attr("href", function (i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          $(".imgContainer").append(
            "<div data-aos='zoom-in' data-aos-once='true'>" +
              "<img src='" +
              val +
              "' loading='lazy' decoding='async' alt='IMG'" +
              " />" +
              "</div>"
          );
        }
      });
  },
});

$(window).on("load", function () {
  $(".imgContainer img").on("click", function () {
    $(".fullImg").css("display", "block");
    $(document.body).css("overflow", "hidden");

    $(".fullImg img").attr("src", this.src);
  });
});

$(".fullImg h1").on("click", function () {
  $(document.body).css("overflow", "auto");
  $(document.body).css("overflow-x", "hidden");
  $(".fullImg").css("display", "none");
});

$(".menuBtn").on("click", () => {
  $(".menuBurger").toggleClass("open");

  if ($(".menuBurger").hasClass("open")) {
    $(document.body).css("position", "fixed");
  } else {
    $(document.body).css("position", "static");
  }

  $("nav ul, nav #book").toggleClass("hide");
});
