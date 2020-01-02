//SERVICE ZA KOLEGIJ
export default class CurriculumService {

    //DOHVATI SVE KOLEGIJE
    getAllCurriculums() {
        let response = $.ajax({
            type: "GET",
            dataType: "json", //VRATI MI U FORMATU: JSON
            async: false,
            url: "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan" //API URL
        });

        return response.responseJSON; //VRATI MI OBIČAN ARRAY
    }

    //DOHVATI SPECIFIČAN KOLEGIJ
    getCurriculum(id) {
        let response = $.ajax({
            type: "GET",
            dataType: "json", //VRATI MI U FORMATU: JSON
            async: false,
            url: "http://www.fulek.com/VUA/supit/GetKolegij/"+id //API URL
        });

        return response.responseJSON; //VRATI MI OBIČAN ARRAY
    }
}