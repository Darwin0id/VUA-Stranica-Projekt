export default function()
{
    $(window).scroll(function(){
        let sticky = $('.navbar-sticky'), scroll = $(window).scrollTop();
        if (scroll >= 200) {
            sticky.addClass('navbar-fixed');
        } else {
            sticky.removeClass('navbar-fixed');
        }
    });
}