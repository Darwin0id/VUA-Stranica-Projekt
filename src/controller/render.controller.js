//IMPORT
import NewsController from '../controller/news.controller';

//KLASA ZA RENDER CONTROLLER
export default class RenderController {

    //KONSTRUKTOR DOHVAĆA KOJI TEMPLATE RENDERA TE NA KOJI ID APPENDA TAJ RENDER
    constructor(url, id) {
        this.url = url; //PUTANJA
        this.id = id; //ID
    }

    //RENDER ZA HTML
    HTML(fCallback = false) {
        $('#'+this.id).load(this.url, fCallback); //RENDERAJ I POZOVI CALLBACK
    }

    //RENDER NOVOSTI
    NEWS(id) {
        var news = new NewsController().loadSpecificNews(id); //DOHVATI SPECIFIČNU NOVOST

        //LODAJ HTML NA SPECIFIČAN DIO STRANICE
        $('#'+this.id).load(this.url, function() {

            //DODJELI INFORMACIJE NOVOSTI
            //--//
            $("#newsBgCover").css({"background-image": "url(resources/images/novosti/"+news.slika+")"}); //BG SLIKA
            $("#news-title").html(news.naslov); // NASLOV
            $("#news-date").html(news.datum); // DATUM
            $("#news-text").html(news.tekst); // TEKST
            //--//

            //PROĐI KROZ SVE SLIKE AKO POSTOJE I DODJELI IH
            //--//
            news.slike.forEach(element => {
                $("#appendImages").append(`<div class="w-full lg:w-4/12 px-4">
                <a href="resources/images/novosti/${element}" data-fancybox="images">
                <img src="resources/images/novosti/${element}" />
                </a>
                </div>`);
            });
            //--//

            //PROĐI KROZ SVE VIDEO ZAPISE AKO POSTOJE I DODJELI IH
            //--//
            news.video.forEach(element => {
            $("#appendImages").append(`<div class="w-full lg:w-4/12 px-4">
                <video style="width: 100%; height: 100%;" controls>
                    <source src="resources/video/${element}" type="video/mp4">
                </video>
            </div>`);
            });
            //--//
        });
    }
  
}