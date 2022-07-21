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
