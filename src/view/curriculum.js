//IMPORT
import CurriculumController from '../controller/curriculum.controller';

export default function()
{
    $("#curriculum-table").hide();

    //DOHVATI KOLEGIJE
    let curriculum = new CurriculumController();
    let arrayOfCurriculums = curriculum.loadAllCurriculums();
    let totalECTS = 0;
    let totalHours = 0;
    //--//

    //NA AUTO COMPLETE
    $( "#curriculum-search").autocomplete({
        minLength: 0,
        source: arrayOfCurriculums,
        select: function(event, ui) { 
            $('#curriculum-search').val(ui.item.label);
            $('#curriculum-search').attr('data-id', ui.item.value);

            let specificCurriculum = curriculum.loadSpecificCurriculum(parseInt(ui.item.value));
            totalECTS += specificCurriculum.ects;
            totalHours += specificCurriculum.sati;
            $("#cTable-body").append(`
            <tr>
                <td class="text-left">${specificCurriculum.kolegij}</td>
                <td class="text-left">${specificCurriculum.ects}</td>
                <td class="text-left">${specificCurriculum.sati}</td>
                <td class="text-left">${specificCurriculum.predavanja}</td>
                <td class="text-left">${specificCurriculum.vjezbe}</td>
                <td class="text-left">${specificCurriculum.tip}</td>
                <td class="text-left">
                <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
                Obriši
                </button>
              </td>
            </tr>
            `);
            
            $("#totalECTS").html(totalECTS);
            $("#totalHours").html(totalHours);

            $("#curriculum-icon").hide();
            $("#curriculum-table").show();


            return false;
        },
        response: function(event, ui) {
            if (!ui.content.length) {
                var noResult = { value:"",label:"Kolegij ne postoji u bazi!" };
                ui.content.push(noResult);
            }
        }
    });
    //--//
}