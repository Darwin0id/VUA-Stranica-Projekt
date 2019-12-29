export default function()
{
    //PROĐI PO SVAKOM ELEMENTU
    $('.aniview').each(function(){
        //STAVI OPACITY NA 0
        $(this).css('opacity', 0);
    });
    //--//

     //U VRIJEME SCROLLA
    $(window).on('resize scroll', function() {
        //PROĐI PO SVAKOM ELEMENTU
        $('.aniview').each(function(){
            //AKO GA VIDIM
            if ($(this).isInViewport()) {
                $(this).css('opacity', 1); //DODAJ OPACITY 1
                $(this).addClass('animated ' + $(this).attr('data-av-animation')); //DODAJ ANIMACIJU
            } 
            //--//
        });
        //--//
    });
    //--//
}