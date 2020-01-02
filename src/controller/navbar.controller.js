//KLASA KOJA UPRAVLJA NAVBAROM
export default class NavbarController {
   //KONSTRUKTOR
    constructor(elementID) {
       this.elementID = elementID; //DOHVATI NAVBAR POMOĆU ID-A
    }
    
    //OMOGUĆI TOGGLE NAVBARU
    toggleNavbarClick()
    {
        $("#"+this.elementID).toggle("hidden"); //UZMI ELEMENT KROZ KONSTRUKTOR TE MU TOGLAJ KLASU
    }

    //POSTAVI AKTIVNU STRANICU
    setActivePage(page)
    {
        //AKTIVAN DIO STRANICE 
        $(".navbar-link").removeClass('text-pink:color'); //MAKNI SVE AKTIVNE STRANICE
        $('a[href$="'+page+'"]').addClass('text-pink:color'); //DODJELI KLASU TRENUTNO AKTIVNOJ STRANICI
    }
}