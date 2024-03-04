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

$(function(){
    $('.section_3_chapterpage_buttonpage_next').click(function(){
        let idx = $(this).index();

        $(this).addClass('');
        $(this).siblings().removeClass('');

        $('.').eq(idx).fadeIn().css('display', 'flex');
        $('.').eq(idx).siblings('.').hide();
    })
})

// $(function () {
//     $('.best_swichi_button').click(function () {
//        let idx = $(this).index();

//        $(this).addClass('one');
//        $(this).siblings().removeClass('one');

//        $('.best_list').eq(idx).fadeIn().css('display', 'flex');
//        $('.best_list').eq(idx).siblings('.best_list').hide();
//    });
// });