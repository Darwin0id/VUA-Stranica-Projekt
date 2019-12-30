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
}