$(function(){
    var win_h = $(window).height();
});


$('.').on("mousewheel", function(e){
    var pagePos = parseInt($(this).attr());
    if(e.originalEvent.wheelDelta>=0){
        $("html, body").stop().animate({scrollTop:pagePos - win_h});
        return false;
    } else if(e.originalEvent.wheelDelta<0){
        $("html, body").stop().animate({scrollTop:pagePos+win_h});
        return false;
    }
})
