//IMPORT
import CurriculumService from '../service/curriculum.service';

//KONTROLER KOLEGIJA
export default class CurriculumController {

    //KONSTRUKTOR
    constructor()
    {
        this.newSvc = new CurriculumService(); //DOHVATI KOLEGIJE
    }

    //DOHVATI SVE KOLEGIJE BEZ FILTRIRANJA
    loadAllCurriculums()
    {
        return this.newSvc.getAllCurriculums();
    }

    //DOHVATI SPECIFIČAN KOLEGIJ
    loadSpecificCurriculum(id)
    {
        return this.newSvc.getCurriculum(id);
    }

    //MAKNI KOLEGIJ SA TABLICE
    removeCurriculumClick(element)
    {
        let currentECTS = parseInt($("#totalECTS").html()); //TRENUTNI ECTS BODOVI
        let currentHours = parseInt($("#totalHours").html()); //TRENUTNI SATI
 
        let elementTr = $(element).parent().parent()[0]; //UZMI TR OD THIS ELEMENTA
        let gECTS = parseInt(elementTr.cells[1].innerText); //OD UZETOG TR-A UZMI ECTS BODOVE TE IH PRETVORI U INT
        let gHours = parseInt(elementTr.cells[2].innerText); //OD UZETOG TR-A UZMI SATE TE IH PRETVORI U INT
        
        $(elementTr).remove(); //IZBRIŠI REDAK U TABLICI

        $("#totalECTS").html(currentECTS-gECTS); //ZAPIŠI ECTS-OVE NAKON ODUZIMANJA IBRISANOG TR-A
        $("#totalHours").html(currentHours-gHours); //ZAPIŠI SATE NAKON ODUZIMANJA IBRISANOG TR-A
    }
}