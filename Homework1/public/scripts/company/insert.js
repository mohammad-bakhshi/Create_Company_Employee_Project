const form = document.getElementById("form");
let companyName = document.getElementById('companyName');
let registrationNumber = document.getElementById('registrationNumber');
let province = document.getElementById('province');
let city = document.getElementById('city');
let registrationDate = document.getElementById('registrationDate');
let telephoneNumber = document.getElementById('telephoneNumber');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let result = checkInputs();

    if (result.message === 'pass') {
        $.ajax({
            type: "POST",
            url: "/",
            data: result,
            dataType: "json",
            success: function (response) {
                window.location.replace("/");
            }
        });
    }
});

function checkInputs() {
    // trim to remove the whitespaces
    let companyNameResult, registrationNumberResult, provinceResult, cityResult, registrationDateResult, telephoneNumberResult;
    const companyNameValue = companyName.value.trim();
    const registrationNumberValue = registrationNumber.value.trim();
    const provinceValue = province.value.trim();
    const cityValue = city.value.trim();
    const registrationDateValue = registrationDate.value.trim();
    const telephoneNumberValue = telephoneNumber.value.trim();

    if (!companyNameValue) {
        setErrorFor(companyName, "Company Name cannot be blank");
        companyNameResult = false;
    } else {
        setSuccessFor(companyName);
        companyNameResult = true;
    }

    if (!registrationNumberValue) {
        setErrorFor(registrationNumber, "Registration Number cannot be blank");
        registrationNumberResult = false;
    } else {
        setSuccessFor(registrationNumber);
        registrationNumberResult = true;
    }

    if (!provinceValue) {
        setErrorFor(province, "Province cannot be blank");
        provinceResult = false;
    } else {
        setSuccessFor(province);
        provinceResult = true;
    }

    if (!cityValue) {
        setErrorFor(city, "City cannot be blank");
        cityResult = false;
    } else {
        setSuccessFor(city);
        cityResult = true;
    }

    if (!registrationDateValue) {
        setErrorFor(registrationDate, "Registration Date cannot be blank");
        registrationDateResult = false;
    } else {
        setSuccessFor(city);
        registrationDateResult = true;
    }

    if (!telephoneNumberValue) {
        setErrorFor(telephoneNumber, "Telephone Number cannot be blank");
        telephoneNumberResult = false;
    } else {
        setSuccessFor(telephoneNumber);
        telephoneNumberResult = true;
    }

    if (
        companyNameResult === true &&
        registrationNumberResult === true &&
        provinceResult === true &&
        cityResult === true &&
        registrationDateResult === true &&
        telephoneNumberResult === true
    ) {
        return {
            companyName: companyNameValue,
            registrationNumber: registrationNumberValue,
            province: provinceValue,
            city: cityValue,
            registrationDate: registrationDateValue,
            telephoneNumber:telephoneNumberValue,
            message: "pass",
        };
    } else {
        return { message: "fail" };
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}