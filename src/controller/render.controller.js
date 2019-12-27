export default class RenderService {
    constructor(url, id) {
        this.url = url;
        this.id = id;
    }

    HTML(fCallback = false) {
        $('#'+this.id).load(this.url, fCallback);
    }
}