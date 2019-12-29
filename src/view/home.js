//IMPORT
import Typewriter from 'typewriter-effect/dist/core';
import AnimtionOnScroll from '../controller/onscrollanimation.controller';

//MAIN - FUNKCIJA
export default function()
{   
    //UZMI ELEMENT PO ID-u
    let appContainer =  document.getElementById('text-story'); 
    //--//

    //ANIMACIJA PISANJA - POSTAVKE
    let typewriter = new Typewriter(appContainer, {
        loop: false
    });
    //--//

    //ANIMACIJA PISANJA - PRIMJENA
    typewriter
        .pauseFor(600)
        .typeString('Budi izvrstan u onom što vidiš!')
        .pauseFor(300)
        .deleteChars(6)
        .typeString('voliš.')
        .pauseFor(300)
        .typeString('</br> <span class="span-gradient">ZAISKRI</span>.')
        .start();
    //--//

    //DODAJ ANIMACIJE NA SCROLL-u
    AnimtionOnScroll();
    //--//
}
//--//