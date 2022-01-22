const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let companyName = document.getElementById('companyName').value.trim();
    let registrationNumber = document.getElementById('registrationNumber').value.trim();
    let province = document.getElementById('province').value.trim();
    let city = document.getElementById('city').value.trim();
    let registrationDate = document.getElementById('registrationDate').value.trim();
    let telephoneNumber = document.getElementById('telephoneNumber').value.trim();
    let company = {
        companyName,
        registrationNumber,
        province,
        city,
        registrationDate,
        telephoneNumber
    }
    console.log(company);
    $.ajax({
        type: "POST",
        url: "/",
        data: company,
        dataType: "json",
        success: function (response) {
            if (response.pass === true) {
                window.location.replace("/");
            }
            else {
                //setErrorFor(username, "Username already exists");
            }
        }
    });
})