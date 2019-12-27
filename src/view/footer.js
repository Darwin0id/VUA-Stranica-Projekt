//IMPORT
import NewsController from '../controller/news.controller';
import tippy from 'tippy.js';


export default function()
{
    //DOHVATI NOVOSTI
    let news = new NewsController();
    let arrayOfNews = news.loadAllNewsBasic();
    //--//

    //APPENDAJ NOVOSTI
    arrayOfNews.forEach(function(news){
       $("#listOfNews").append(`
       <li>
            <a data-tippy-content="${news.naslov}" class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm news-footer" href="#!/news/${news.id}" data-navigo>${news.naslov.substring(0,18)}${(news.naslov.length > 18) ? "..." : ""}</a>
		</li>
       `);

    });
    //--//

    //DODAJ TOOLTIP
    tippy('.news-footer', {
        onMount(instance) {
          const {tooltip} = instance.popperChildren;
          requestAnimationFrame(() => {
            $(tooltip).addClass('animated');
            $(tooltip).addClass('bounceIn');
          });
        },
        onHidden(instance) {
          const {tooltip} = instance.popperChildren;
          $(tooltip).removeClass('animated');
          $(tooltip).removeClass('bounceOut');
        }
    });
    //--//
}