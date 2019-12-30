export default class CurriculumService {
    getAllCurriculums() {
        let response = $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            url: "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan"
        });

        return response.responseJSON;
    }

    getCurriculum(id) {
        let response = $.ajax({
            type: "GET",
            dataType: "json",
            async: false,
            url: "http://www.fulek.com/VUA/supit/GetKolegij/"+id
        });

        return response.responseJSON;
    }
}