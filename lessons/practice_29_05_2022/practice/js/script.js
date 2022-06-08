//Меню бургер
$(document).ready(function () {
  $(".icon-menu").click(function (event) {
    $(".icon-menu,.menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

//IBG  подключение картинки background
document.querySelectorAll(".ibg").forEach((el) => {
  if (el.querySelector("img")) {
    el.style.backgroundImage =
      "url(" + el.querySelector("img").getAttribute("src") + ")";
    el.querySelector("img").style.display = "none";
  }
});
