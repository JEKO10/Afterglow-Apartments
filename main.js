var folder = "images/";

$.ajax({
  url: folder,
  success: function (data) {
    $(data)
      .find("a")
      .attr("href", function (i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          $(".imgContainer").append(
            "<div>" +
              "<img src='" +
              val +
              "' loading='lazy' decoding='async' alt='IMG'" +
              `id=${i}` +
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
