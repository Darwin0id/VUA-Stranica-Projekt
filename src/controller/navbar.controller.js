export default class NavbarController {
   constructor(elementID) {
       this.elementID = elementID;
    }
    
    toggleNavbarClick()
    {
        $("#"+this.elementID).toggle("hidden");
    }
}