//IMPORT
import NewsController from '../controller/news.controller';

export default function()
{
    //DOHVATI NOVOSTI
    let news = new NewsController();
    let arrayOfNews = news.loadAllNews();
    //--//

    //APPENDAJ NOVOSTI
    arrayOfNews.forEach(function(news){
        console.log(news);
       $("#appendNews").append(`
        <div class="w-full lg:w-4/12 px-4">
            <a href="#!/news/${news.id}">
                <div class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg" style="transition: all 0.15s ease 0s;">
                    <img alt="${news.naslov}" class="align-middle border-none max-w-full h-auto rounded-lg" src="resources/images/novosti/novost${news.id}.jpg">
                </div>
            </a>
            <span class="text-smaller inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2 mb-2">${news.datum}</span>
            <h5 class="text-base pb-4 text-white">${news.naslov}</h5>
       </div>
       `);

    });
    //--//
}