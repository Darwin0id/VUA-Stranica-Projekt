import ContactService from '../service/contact.service';

export default class ContactController {
    constructor()
    {
        this.newSvc = new ContactService();
    }

    sendMailClick(fullName, email, urgent, newsletter, message)
    {
       return this.newSvc.sendMail(fullName, email, urgent, newsletter, message);
    }
}