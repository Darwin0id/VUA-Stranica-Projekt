export default class NewsService {
    getAllNews() {
        let response = $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            url: "./resources/data/news.json"
        });

        return response.responseJSON;
    }

    getNews(id) {
        let response = $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            url: "./resources/data/news.json"
        });

        return response.responseJSON[id-1];
    }
}