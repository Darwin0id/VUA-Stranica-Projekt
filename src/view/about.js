//IMPORT
import '../controller/inviewport.controller';
import AnimtionOnScroll from '../controller/onscrollanimation.controller';
import SubNav from './sub-menu';

//MAIN - FUNKCIJA
export function About()
{
    //SCROLL FUNKCIJA
    $(document).ready(function (){
        $(".cardChoose").click(function (){
            $('html, body').animate({
                scrollTop: $("#"+$(this).attr("data-scroll")).offset().top-155
            }, 1500);
        });
    });
    //--//

    //VISIBLE FUNKCIJA (AKTIVNI DIO STRANICE)
    $(window).on('resize scroll', function() {
        $('.sub-section').each(function(){
            if ($(this).isInViewport()) {
                $('a[data-scroll="'+$(this).attr("id")+'"]').addClass("activeCard");
            } else {
                $('a[data-scroll="'+$(this).attr("id")+'"]').removeClass("activeCard");
            }
        });
    });
    //--//

    //DODAJ PRIVREMENI HEADER
    $("body").append(`<div id="sub-menu" class="text-center"></div>`);
    //--//

    //DODAJ KARTICE NA PRIVREMENI HEADER
    SubNav.forEach((element, index) => $("#sub-menu").append('<a data-scroll="'+element.id+'" type="button" class="bg-white text-uppercase cardChoose card-'+(index+1)+'"><h1 class="'+element.icon+' text-2xl"></h1> <h3 class="cardTitle text-base">'+element.title+'</h3></a>'));
    //--//

    //DODAJ ANIMACIJE NA SCROLL-u
    AnimtionOnScroll();
    //--//
}
//--//

//MAKNI MENI - FUNKCIJA
export function RemoveSubMenu() 
{
    $("#sub-menu").remove();
}
//--//