//IMPORT
import RenderController from './controller/render.controller';
import NewsController from './controller/news.controller';
import NotFoundController from './controller/pagenotfound.controller';
import MicroModal from 'micromodal';

//VIEW
import FixedHeader from './view/header';
import FooterNews from './view/footer';
import Home from './view/home';
import {About, RemoveSubMenu} from './view/about';
import News from './view/news';
import Curriculum from './view/curriculum';
import './view/contact';

//REQUIRE
let Navigo = require('navigo');

//NEWS
var arrayOfNews = new NewsController().loadArray();

//JQUERY ON LOAD
$(function(){   
    /* +++++++++ RUTIRANJE +++++++++ */

    //INICIJALIZIRAJ RUTERA
    let router = new Navigo(null, true, '#!');

    //UČITAJ PRIJE SVEGA
    router.hooks({
        before: function(done, params) { 
            $("html, body").animate({ scrollTop: 0 }, "slow");
            new RenderController('./templates/header.html', 'header').HTML(FixedHeader);
            new RenderController('./templates/footer.html', 'footer').HTML(FooterNews);
            done(); 
        }
    });

    //DOSTUPNE RUTE
    router.on('/home',function () {new RenderController('./templates/home.html', 'app').HTML(Home)});
    router.on('/about', function () {new RenderController('./templates/about.html', 'app').HTML(About("test"))}, {leave: function (params) {RemoveSubMenu();}});
    router.on('/news',function () {new RenderController('./templates/news.html', 'app').HTML(News)});
    router.on('/news/:id', function (params) {(arrayOfNews.includes(parseInt(params.id))) ? new RenderController('./templates/news-section.html', 'app').NEWS(parseInt(params.id)) : NotFoundController()});
    router.on('/curriculum',function () {new RenderController('./templates/curriculum.html', 'app').HTML(Curriculum)});
    $(document).on('click', '#contact-form', () => { MicroModal.show('modal-1');});

    //DEFAULT RUTA
    router.on(() => { new RenderController('./templates/home.html', 'app').HTML(Home); });

    //404 RUTA
    router.notFound((query) => { NotFoundController(); });

    //POKRENI
    router.resolve();
    /* +++++++++ ++++++++++ +++++++++ */
});
