/* Toggle show-content */
var $el: any, 
    $p: any, 
    $up: any, 
    $ps: any, 
    totalHeight: number;

$(".sidebar-box .button").on("click", function(this: HTMLElement) {
    totalHeight = 0;

    $el = $(this);
    $p  = $el.parent();
    $up = $p.parent();
    $ps = $up.find("p:not('.read-more')");
  
    // Measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
    $ps.each(function(this: HTMLElement) {
        totalHeight += $(this).outerHeight() || 0;
    });
        
    $up
        .css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height() || 0,
            "max-height": 9999
        })
        .animate({
            "height": totalHeight
        });
  
    // Fade out read-more
    $p.fadeOut();
  
    // Prevent jump-down
    return false;
});
