import CurriculumService from '../service/curriculum.service';

export default class CurriculumController {
    constructor()
    {
        this.newSvc = new CurriculumService();
    }

    loadAllCurriculums()
    {
        return this.newSvc.getAllCurriculums();
    }

    loadSpecificCurriculum(id)
    {
        return this.newSvc.getCurriculum(id);
    }

    removeCurriculumClick(element)
    {
        let currentECTS = parseInt($("#totalECTS").html());
        let currentHours = parseInt($("#totalHours").html());

        let elementTr = $(element).parent().parent()[0];
        let gECTS = parseInt(elementTr.cells[1].innerText);
        let gHours = parseInt(elementTr.cells[2].innerText);
        $(elementTr).remove();

        $("#totalECTS").html(currentECTS-gECTS);
        $("#totalHours").html(currentHours-gHours);
    }
}