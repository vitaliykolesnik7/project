//Меню бургер
$(document).ready(function () {
  $(".icon-menu").click(function (event) {
    $(".icon-menu,.menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

//IBG
document.querySelectorAll(".ibg").forEach((el) => {
  if (el.querySelector("img")) {
    el.style.backgroundImage =
      "url(" + el.querySelector("img").getAttribute("src") + ")";
    el.querySelector("img").style.display = "none";
  }
});
