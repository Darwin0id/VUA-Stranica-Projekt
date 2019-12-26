export default class RenderService {
    constructor(url, id) {
        this.url = url;
        this.id = id;
    }

    HTML() {
        $('#'+this.id).load(this.url);
    }
}