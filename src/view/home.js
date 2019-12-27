import Typewriter from 'typewriter-effect/dist/core';

export default function()
{
    let appContainer =  document.getElementById('text-story'); 

    let typewriter = new Typewriter(appContainer, {
        loop: false
      });
    
    typewriter
        .pauseFor(600)
        .typeString('Budi izvrstan u onom što vidiš!')
        .pauseFor(300)
        .deleteChars(6)
        .typeString('voliš.')
        .pauseFor(300)
        .typeString('</br> <span class="span-gradient">ZAISKRI</span>.')
        .start();
}