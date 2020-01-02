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
        )
    } else {
        //POŠALJI VRIJEDNOSTI        
        makeContact.sendMailClick(firstName, email, urgent, newsletter, message) 
    }
});
}