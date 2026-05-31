// JavaScript Document
declare var jQuery: any;

(function($: JQueryStatic) {

  $(".menu-icon").on("click", function(this: HTMLElement) {
    $(this).toggleClass("open");
    $(".container").toggleClass("nav-open");
    $("nav ul li").toggleClass("animate");
  });

})(jQuery);
