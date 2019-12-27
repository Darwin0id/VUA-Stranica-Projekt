import NewsService from '../service/news.service';

export default class NewsController {
    constructor()
    {
        this.newSvc = new NewsService();
    }

    loadAllNewsBasic()
    {
        return this.newSvc.getAllNews().responseJSON.map(news => ({id: news.id, naslov: news.naslov}));
    }
}