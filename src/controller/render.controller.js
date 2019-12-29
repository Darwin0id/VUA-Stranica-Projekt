import NewsController from '../controller/news.controller';

export default class RenderService {
    constructor(url, id) {
        this.url = url;
        this.id = id;
    }

    HTML(fCallback = false) {
        $('#'+this.id).load(this.url, fCallback);
    }

    NEWS(id) {
        var news = new NewsController().loadSpecificNews(id);


        $('#'+this.id).load(this.url, function() {
            $("#newsBgCover").css({"background-image": "url(resources/images/novosti/"+news.slika+")"});
            $("#news-title").html(news.naslov);
            $("#news-date").html(news.datum);
            $("#news-text").html(news.tekst);

            news.slike.forEach(element => {
            $("#appendImages").append(`<div class="w-full lg:w-4/12 px-4">
                <a href="resources/images/novosti/${element}" data-fancybox="images">
                    <img src="resources/images/novosti/${element}" />
                </a>
            </div>`);
             });

            news.video.forEach(element => {
            $("#appendImages").append(`<div class="w-full lg:w-4/12 px-4">
                <video style="width: 100%; height: 100%;" controls>
                    <source src="resources/video/${element}" type="video/mp4">
                </video>
            </div>`);
            });

        });
    }
}