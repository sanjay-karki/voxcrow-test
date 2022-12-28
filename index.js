$(".menu_link").click(function () {
  var $menuBar = $(this).closest(".menu_bar");

  $($menuBar).find(".menu_item .menu_link.active").removeClass("active");
  // $($menuBar).find(".menu_item__expandable.expanded").removeClass("expanded");
  $(this).addClass("active");
  if ($(this).closest(".menu_child").hasClass("menu_child")) {
    return
  } else {
    $(this).closest(".menu_item__expandable").toggleClass("expanded");
  }
});

$(".tab_link").click(function () {
  var $tabBar = $(this).closest(".tab_bar");
  $($tabBar).find(".tab_item .tab_link.active").removeClass("active");
  $(this).addClass("active");
  $($tabBar).find(".tab_content .tab_panel.active").removeClass("active");
});

$(".p1").click(function () {
  $("#panelOne").addClass("active");
});
$(".p2").click(function () {
  $("#panelTwo").addClass("active");
});
$(".p3").click(function () {
  $("#panelThree").addClass("active");
});
