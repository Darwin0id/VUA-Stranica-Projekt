//FUNKCIJA PROVJERE JE LI NEŠTO U VIEWPORT-u
$.fn.isInViewport = function() {
    
    //PROVJERA POSTOJI LI UOPĆE OFFSET ZA TRAŽENI ELEMENT
    let thisTop = ($(this).offset() || { "top": NaN }).top;
    
    //AKO NE POSTOJI UBIJ FUNKCIJU
    if(isNaN(thisTop)) return;

    //UZMI OFFSET ZA TOP OD TRENUTNOG ELEMENTA U VIEWPORTU
    let elementTop = thisTop;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    //VRATI VRIJEDNOST ZA TRAŽENE PARAMETRE
    //return elementBottom < viewportBottom && elementTop > viewportTop; -> https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
//--//