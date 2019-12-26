//IMPORT
import Swal from 'sweetalert2';
import RenderService from './service/render.service';

//REQUIRE
let Navigo = require('navigo');

//JQUERY ON LOAD
$(function(){
    //INICIJALIZIRAJ RUTERA
    let router = new Navigo(null, true, '#!');

    //DOSTUPNE RUTE
    router.on({
        'about': () => { new RenderService('./templates/about.html', 'app').HTML(); },
        'news': () => { new RenderService('./templates/news.html', 'app').HTML(); },
        'curriculum': () => { new RenderService('./templates/curriculum.html', 'app').HTML(); },
        'contact': () => { new RenderService('./templates/contact.html', 'app').HTML(); }
    });

    //DEFAULT RUTA
    router.on(() => { new RenderService('./templates/home.html', 'app').HTML(); });

    //404 RUTA
    router.notFound((query) => { new RenderService('./templates/error.html', 'app').HTML();  });

    //POKRENI
    router.resolve();
});