const passRegex = /^.{6,}$/;
const passwordInput = document.getElementById("password");

function validation(regex , element)
{
    return regex.test(element)
}


passwordInput.addEventListener('input', function () {
    if (validation(passRegex, passwordInput.value)) {
        passwordInput.classList.remove("is-invalid");
        passwordInput.classList.add("is-valid");
        passwordInput.nextElementSibling.classList.add("d-none")

    } else {
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.add("is-invalid");
        passwordInput.nextElementSibling.classList.remove("d-none")

    }
});