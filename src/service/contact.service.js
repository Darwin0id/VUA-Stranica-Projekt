//IMPORT
import Swal from 'sweetalert2';
import MicroModal from 'micromodal';

//SERVICE ZA KONTAKT
export default class ContactService {

    //POŠALJI MAIL
    sendMail(fullName, email, urgent, newsletter, message) {
        $.ajax({
            type: 'POST',
            url: 'http://www.fulek.com/VUA/SUPIT/ContactUs', //API ZA SLANJE MAILA
            data: { name: fullName, email: email, importance: urgent, newsletter: newsletter, message: message },
            async: true,
            success: function (data) {
                MicroModal.close(); //ZATVORI MODAL

                //PRIKAŽI OBAVIJEST KORISNIKU
                Swal.fire(
                    'Uspijeh!',
                    'Poslali ste poruku uspješno.',
                    'success'
                  )
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }
}