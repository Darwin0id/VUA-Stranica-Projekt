export default class NavbarController {
   constructor(elementID) {
       this.elementID = elementID;
    }
    
    toggleNavbarClick()
    {
        $("#"+this.elementID).toggle("hidden");
    }

    setActivePage(page)
    {
        //AKTIVAN DIO STRANICE
        $(".navbar-link").removeClass('text-pink:color');
        $('a[href$="'+page+'"]').addClass('text-pink:color');
    }
}