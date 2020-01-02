//IMPORT
import NewsService from '../service/news.service';

//KONTROLER NOVISTU
export default class NewsController {
    //KONSTRUKTOR
    constructor()
    {
        this.newSvc = new NewsService(); //DOHVATI NOVOSTI
    }

    //UČITAJ SVE NOVOSTI PO ID-U
    loadArray()
    {
        return this.newSvc.getAllNews().map(news =>  news.id); //RADIMO OBRADU KROZ: MAPU
    }

    //UČITAJ SVE NOVOSTI ALI ŠTO JEDNOSTAVNIJE MOŽEŠ
    loadAllNewsBasic()
    {
        return this.newSvc.getAllNews().map(news => ({id: news.id, naslov: news.naslov})); //RADIMO OBRADU KROZ: MAPU
    }

    //UČITAJ SVE NOVOSTI
    loadAllNews()
    {
        return this.newSvc.getAllNews(); //DOHVATI SVE NOVOSTI
    }

    //UČITAJ TRAŽENU VRIJEDNOST
    loadSpecificNews(id)
    {
        return this.newSvc.getNews(id); //DOHVATI SPEFICIČNU NOVOST
    }
}