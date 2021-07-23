const form = document.querySelector('#myForm');
const submitButton = document.querySelector("#sendForm");



function validateForm(form) {
    let valid = true;

    if (!validateForm(form.elements.name)) {
        valid = false;
    }
    if (!validateForm(form.elements.phone)) {
        valid = false;
    }
    if (!validateForm(form.elements.comment)) {
        valid = false;
    }
    return valid;
}