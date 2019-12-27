//IMPORT
import RenderService from './service/render.service';

//VIEW
import FixedHeader from './view/header';
import Home from './view/home';

//REQUIRE
let Navigo = require('navigo');

//JQUERY ON LOAD
$(function(){   

    /* +++++++++ RUTIRANJE +++++++++ */

    //INICIJALIZIRAJ RUTERA
    let router = new Navigo(null, true, '#!');

    //UČITAJ PRIJE SVEGA
    router.hooks({
        before: function(done, params) { 
            new RenderService('./templates/header.html', 'header').HTML(FixedHeader);
            new RenderService('./templates/footer.html', 'footer').HTML();
            done(); 
        }
      });

    //DOSTUPNE RUTE
    router.on({
        '/home': () => { new RenderService('./templates/home.html', 'app').HTML(Home); },
        '/about': () => { new RenderService('./templates/about.html', 'app').HTML(); },
        '/news': () => { new RenderService('./templates/news.html', 'app').HTML(); },
        '/curriculum': () => { new RenderService('./templates/curriculum.html', 'app').HTML(); },
        '/contact': () => { new RenderService('./templates/contact.html', 'app').HTML(); }
    });


    //DEFAULT RUTA
    router.on(() => { new RenderService('./templates/home.html', 'app').HTML(); });

    //404 RUTA
    router.notFound((query) => { new RenderService('./templates/error.html', 'app').HTML();  });

    //POKRENI
    router.resolve();

    /* +++++++++ ++++++++++ +++++++++ */
});
