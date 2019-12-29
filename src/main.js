//IMPORT
import RenderController from './controller/render.controller';

//VIEW
import FixedHeader from './view/header';
import FooterNews from './view/footer';
import Home from './view/home';
import {About, RemoveSubMenu} from './view/about';

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
            new RenderController('./templates/header.html', 'header').HTML(FixedHeader);
            new RenderController('./templates/footer.html', 'footer').HTML(FooterNews);
            $("html, body").animate({ scrollTop: 0 }, "slow");
            done(); 
        }
    });

    //DOSTUPNE RUTE
    router.on('/home',function () {new RenderController('./templates/home.html', 'app').HTML(Home)});
    router.on('/about', function () {new RenderController('./templates/about.html', 'app').HTML(About)}, {leave: function (params) {RemoveSubMenu();}});
    router.on('/news',function () {new RenderController('./templates/news.html', 'app').HTML()});
    router.on('/curriculum',function () {new RenderController('./templates/curriculum.html', 'app').HTML()});
    router.on('/contact',function () {new RenderController('./templates/contact.html', 'app').HTML()});

  
    //DEFAULT RUTA
    router.on(() => { new RenderController('./templates/home.html', 'app').HTML(Home); });

    //404 RUTA
    router.notFound((query) => { new RenderController('./templates/error.html', 'app').HTML();  });

    //POKRENI
    router.resolve();
    /* +++++++++ ++++++++++ +++++++++ */
});
