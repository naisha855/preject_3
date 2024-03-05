$(function(){
    var win_h = $(window).height();
});

// 휠 이동
// $('.').on("mousewheel", function(e){
//     var pagePos = parseInt($(this).attr());
//     if(e.originalEvent.wheelDelta>=0){
//         $("html, body").stop().animate({scrollTop:pagePos - win_h});
//         return false;
//     } else if(e.originalEvent.wheelDelta<0){
//         $("html, body").stop().animate({scrollTop:pagePos+win_h});
//         return false;
//     }
// })

// section_2 effect
let w=$(window).innerWidth();

console.log(w)
$('.section_2_button_page_prev').click(function(){
    $('.section_2_paper li:last').prependTo('.section_2_paper');
    $('.section_2_paper').css('margin-left',-w);
    $('.section_2_paper').stop().animate({marginLeft:0}, 800);
})

$('.section_2_button_page_next').click(function(){
    $('.section_2_paper').stop().animate({marginLeft: -w}, 800, function(){
        $('.section_2_paper li:first').appendTo('.section_2_paper');
        $('.section_2_paper').css({marginLeft:0});
    });
});

// Section_3 effect
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