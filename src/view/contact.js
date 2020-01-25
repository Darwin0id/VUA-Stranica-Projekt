//IMPORT
import MicroModal from 'micromodal';
import Swal from 'sweetalert2';
import ContactController from '../controller/contact.controller';

export default function(element)
{
    //MODAL
    MicroModal.init({
        openTrigger: 'data-custom-open',
        closeTrigger: null,
        disableScroll: true, 
        disableFocus: false,
        awaitCloseAnimation: false
    });
    
    //KONTAKT
    let makeContact = new ContactController();

    //OTVORI MODAL
    MicroModal.show(element);

    //KLIKNI NA POŠALJI
    $(document).on('click', '#create_contact', () => { 
    
    //PRIKUPLJENI PODACI
    let firstName = $("#puno-ime").val();
    let email = $("#email").val();
    let urgent = $("#vaznost-poruka").val();
    let newsletter = $("#primaj-newsletter").val();
    let message = $("#vasa-poruka").val();

    //POŠALJI VRIJEDNOSTI
    if(firstName == '' || email == '' || urgent == '' || message == '') //AKO SU VRIJEDNOSTI PRAZNE PRIKAŽI POGREŠKU
    {
        //PRIKAŽI OBAVIJEST KORISNIKU
        Swal.fire(
            'Pogreška!',
            'Provjerite još jednom sva polja.',
            'error'
        );
    } else if(!isValidEmailAddress(email)) {
        //PRIKAŽI OBAVIJEST KORISNIKU
        Swal.fire(
            'Pogreška!',
            'Navedena adresa za elektronsku poštu je upisana u pogrešnom formatu.',
            'error'
        );
    } else {
        //POŠALJI VRIJEDNOSTI        
        makeContact.sendMailClick(firstName, email, urgent, newsletter, message);
        $("#vasa-poruka").val('');
    }
});
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};