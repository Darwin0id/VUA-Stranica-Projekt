import MicroModal from 'micromodal';
import Contact from '../controller/contact.controller';

MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`),
    onClose: modal => console.info(`${modal.id} is hidden`), 
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    disableScroll: true, 
    disableFocus: false,
    awaitCloseAnimation: false
});

let makeContact = new Contact();
let firstName = $("#puno-ime").val();
let email = $("#email").val();
let urgent = $("#vaznost-poruka").val();
let newsletter = $("#primaj-newsletter").val();
let message = $("#vasa-poruka").val();
$(document).on('click', '#create_contact', () => { makeContact.sendMailClick(firstName, email, urgent, newsletter, message) });