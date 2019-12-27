export default class NewsService {
    getAllNews() {
        return $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            url: "./resources/data/news.json"
        });
    }
}