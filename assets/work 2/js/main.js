const formInput = document.querySelectorAll('.form-input');

const normalBtn = document.getElementById("my-btn");
const disabledBtn = document.getElementById("disabled-btn");




function checkInput() {
    let isEmpty = false;

    formInput.forEach(input => {
        if (input.value === "") {
            isEmpty = true;
        }
    });

    if (!isEmpty) {
        normalBtn.classList.replace("d-none", "d-block");
        disabledBtn.classList.replace("d-block", "d-none");
    } else {
        normalBtn.classList.replace("d-block", "d-none");
        disabledBtn.classList.replace("d-none", "d-block");
    }
}

formInput.forEach(input => {
    input.addEventListener('input', checkInput);
});


// form validation

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^.{3,}$/;
const cNameRegex = /^.{6,}$/;
const addressRegex = /^.{6,}$/;
const cityRegex = /^.{3,}$/;
const phoneRegex = /^[0-9]+$/;
const zipCodeRegex = /^[0-9]+$/;

const emailInput = document.getElementById("email");
const fNameInput = document.getElementById("fName");
const lNameInput = document.getElementById("lName");
const phoneInput = document.getElementById("phone");
const campanyNameInput = document.getElementById("cName");
const addressInput = document.getElementById("address");
const cityInput = document.getElementById("city");
const zipCodeInput = document.getElementById("zCode")

function validation(regex , element)
{
    return regex.test(element)
}

emailInput.addEventListener('input', function () {
    if (validation(emailRegex, emailInput.value)) {
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
        emailInput.nextElementSibling.classList.add("d-none")
    } else {
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
        emailInput.nextElementSibling.classList.remove("d-none")
    }
});



fNameInput.addEventListener('input', function () {
    if (validation(nameRegex, fNameInput.value)) {
        fNameInput.classList.remove("is-invalid");
        fNameInput.classList.add("is-valid");

    } else {
        fNameInput.classList.remove("is-valid");
        fNameInput.classList.add("is-invalid");

    }
});
lNameInput.addEventListener('input', function () {
    if (validation(nameRegex, lNameInput.value)) {
        lNameInput.classList.remove("is-invalid");
        lNameInput.classList.add("is-valid");

    } else {
        lNameInput.classList.remove("is-valid");
        lNameInput.classList.add("is-invalid");

    }
});
lNameInput.addEventListener('input', function () {
    if (validation(nameRegex, lNameInput.value)) {
        lNameInput.classList.remove("is-invalid");
        lNameInput.classList.add("is-valid");

    } else {
        lNameInput.classList.remove("is-valid");
        lNameInput.classList.add("is-invalid");

    }
});

phoneInput.addEventListener('input', function () {
    if (validation(phoneRegex, phoneInput.value)) {
        phoneInput.classList.remove("is-invalid");
        phoneInput.classList.add("is-valid");

    } else {
        phoneInput.classList.remove("is-valid");
        phoneInput.classList.add("is-invalid");

    }
});

campanyNameInput.addEventListener('input', function () {
    if (validation(cNameRegex, campanyNameInput.value)) {
        campanyNameInput.classList.remove("is-invalid");
        campanyNameInput.classList.add("is-valid");

    } else {
        campanyNameInput.classList.remove("is-valid");
        campanyNameInput.classList.add("is-invalid");

    }
});

addressInput.addEventListener('input', function () {
    if (validation(addressRegex, addressInput.value)) {
        addressInput.classList.remove("is-invalid");
        addressInput.classList.add("is-valid");

    } else {
        addressInput.classList.remove("is-valid");
        addressInput.classList.add("is-invalid");

    }
});

cityInput.addEventListener('input', function () {
    if (validation(cityRegex, cityInput.value)) {
        cityInput.classList.remove("is-invalid");
        cityInput.classList.add("is-valid");

    } else {
        cityInput.classList.remove("is-valid");
        cityInput.classList.add("is-invalid");

    }
});
zipCodeInput.addEventListener('input', function () {
    if (validation(zipCodeRegex, zipCodeInput.value)) {
        zipCodeInput.classList.remove("is-invalid");
        zipCodeInput.classList.add("is-valid");

    } else {
        zipCodeInput.classList.remove("is-valid");
        zipCodeInput.classList.add("is-invalid");

    }
});







// link page

function moveToRegister()
{
    window.location.href='Register .html';
}

function moveToSignIn()
{
    window.location.href='sign-in.html';
}
function moveToNew()
{
    window.location.href='new.html';
}
function moveToEdit()
{
    window.location.href='edit.html';
}