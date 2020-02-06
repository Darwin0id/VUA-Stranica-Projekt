//KLASA KOJA UPRAVLJA NAVBAROM
export default class NavbarController {
   //KONSTRUKTOR
    constructor(elementID) {
       this.elementID = elementID; //DOHVATI NAVBAR POMOĆU ID-A
       this.status = 0; //STATUS JE LI OTVOREN ILI ZATVOREN MENI
    }
    
    //OMOGUĆI TOGGLE NAVBARU
    toggleNavbarClick()
    {
        //FUNKCIJA TOGGLE NE SADRŽI CHECKER ZA BOUNCER-A PA NASTAJE UX BUG; STOGA KORIŠTENA DODATNA VARIJABLA PROVEJRE
        //
        if(this.status == 0) //AKO JE STATUS VARIJABLE 0 NAPRAVI ANIMACIJU ZA FADE IN
        {
            this.status = 1; //AUTOMATSKI POSTAVI VARIJABLU NA DRUGU RAZINU (JEL JE KORISNIK NAPRAVIO PROMJENU NA UI-u)
            $("#"+this.elementID).removeClass("hidden").fadeOut(0).fadeIn(500); //UZMI ELEMENT KROZ KONSTRUKTOR TE MU MAKNI KLASU
        } else {
            this.status = 0; //AUTOMATSKI POSTAVI VARIJABLU NA PRVU RAZINU (JEL JE KORISNIK NAPRAVIO PROMJENU NA UI-u)
            $("#"+this.elementID).addClass("hidden"); //UZMI ELEMENT KROZ KONSTRUKTOR TE MU DODAJ KLASU
        }
    }

    //POSTAVI AKTIVNU STRANICU
    setActivePage(page)
    {
        //AKTIVAN DIO STRANICE 
        $(".navbar-link").removeClass('text-pink:color'); //MAKNI SVE AKTIVNE STRANICE
        $('a[href$="'+page+'"]').addClass('text-pink:color'); //DODJELI KLASU TRENUTNO AKTIVNOJ STRANICI
    }
}