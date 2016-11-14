$(document).ready(function() {
    var s = $(".masterhead");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop()>150;
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });
});
