function form(form) {

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            document.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;

        textarea.classList.add('error');

        parent.classList.add('error');
        parent.append(errorLabel);
    };

    let result = true;
    const allInputs = document.querySelectorAll('.input-field');
    const textarea = document.querySelector('textarea');

    allInputs.forEach(input => {
        removeError(input);

        if (input.value == "") {
            createError(input, 'Поле не заполнено!');
            result = false;
        }
    });

    return result
}

document.querySelectorAll('.form').forEach(formContent => {
    formContent.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form(this) == true) {
            alert("Форма успешно проверена!");
        }
    })
})

export default form;