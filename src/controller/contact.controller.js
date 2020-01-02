//IMPORT
import ContactService from '../service/contact.service';

//KONTROLER KONTAKTA
export default class ContactController {

    //KONSTRUKTOR
    constructor()
    {
        this.newSvc = new ContactService(); //NAPRAVI KONTAKT PREMA API
    }

    //KADA SE DOGODI KLIK NA FRONTENDU
    sendMailClick(fullName, email, urgent, newsletter, message)
    {
       return this.newSvc.sendMail(fullName, email, urgent, newsletter, message); //VRATI POVRATNU PORUKU
    }
}