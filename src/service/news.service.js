//SERVICE ZA NOVOSTI
export default class NewsService {

    //DOHVATI SVE NOVOSTI
    getAllNews() {
        let response = $.ajax({
            type: "GET",
            dataType: "json", //VRATI MI U FORMATU: JSON
            async: false,
            url: "./resources/data/news.json", //API URL
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });

        return response.responseJSON; //VRATI MI OBIČAN ARRAY
    }

    //DOHVATI SPECIFIČNO NOVOST
    getNews(id) {
        let response = $.ajax({
            type: "GET",
            dataType: "json", //VRATI MI U FORMATU: JSON
            async: false,
            url: "./resources/data/news.json", //API URL
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });

        return response.responseJSON[id-1]; //VRATI MI OBIČAN ARRAY
    }
}