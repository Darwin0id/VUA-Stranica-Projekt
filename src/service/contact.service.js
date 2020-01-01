import Swal from 'sweetalert2';
import MicroModal from 'micromodal';

export default class ContactService {
    sendMail(fullName, email, urgent, newsletter, message) {
        $.ajax({
            type: 'POST',
            url: 'http://www.fulek.com/VUA/SUPIT/ContactUs',
            data: { name: fullName, email: email, importance: urgent, newsletter: newsletter, message: message },
            async: true,
            success: function (data) {
                MicroModal.close();
                Swal.fire(
                    'Uspijeh!',
                    'Poslali ste poruku uspješno.',
                    'success'
                  )
            }
        });
    }
}