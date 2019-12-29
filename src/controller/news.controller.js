import NewsService from '../service/news.service';

export default class NewsController {
    constructor()
    {
        this.newSvc = new NewsService();
    }

    loadArray()
    {
        return this.newSvc.getAllNews().map(news =>  news.id);
    }

    loadAllNewsBasic()
    {
        return this.newSvc.getAllNews().map(news => ({id: news.id, naslov: news.naslov}));
    }

    loadAllNews()
    {
        return this.newSvc.getAllNews();
    }

    loadSpecificNews(id)
    {
        return this.newSvc.getNews(id);
    }
}