/**
 * Mobile Navigation Menu Logic
 */

(function($: JQueryStatic) {
  if (!$) return;

  $(".menu-icon").on("click", function(this: HTMLElement) {
    $(this).toggleClass("open");
    $(".container").toggleClass("nav-open");
    $("nav ul li").toggleClass("animate");
  });

})(jQuery);

export {};
