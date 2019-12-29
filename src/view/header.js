//IMPORT
import NavbarController from '../controller/navbar.controller';

export default function()
{
    //SCROLL FUNKCIJA
    $(window).scroll(function(){
        let sticky = $('.navbar-sticky'), scroll = $(window).scrollTop();
        if (scroll >= 200) {
            sticky.addClass('navbar-fixed');
        } else {
            sticky.removeClass('navbar-fixed');
        }
    });
    //--//

    //TOGGLE FUNKCIJA
    let navbarID = "algebraNavbar";
    let navbar = new NavbarController("collapse-navbar");
    $(document).on("click", "#"+navbarID, () => navbar.toggleNavbarClick());
    //--//

    //AKTIVAN PAGE
    let activePage = (window.location.href).split('/');
    navbar.setActivePage(activePage[(activePage.indexOf('#!')+1)])
    //--//
}