// const form = document.getElementById("form");
// let firstName = document.getElementById('firstName');
// let lastName = document.getElementById('lastName');
// let nationalNumber = document.getElementById('nationalNumber');
// let gender = document.getElementsByName('gender');
// let manager = document.getElementById('manager');
// let dateofbirth = document.getElementById('dateofbirth');
// let age=document.getElementById('age');

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let result = checkInputs();

//     if (result.message === 'pass') {
//         $.ajax({
//             type: "POST",
//             url: "/",
//             data: result,
//             dataType: "json",
//             success: function (response) {
//                 window.location.replace("/");
//             }
//         });
//     }
// });

// function checkInputs() {
//     // trim to remove the whitespaces
//     let firstNameResult, lastNameResult, nationalNumberResult, genderResult, managerResult, dateofbirthResult,ageResult;
//     const firstNameValue = firstName.value.trim();
//     const lastNameValue = lastName.value.trim();
//     const nationalNumberValue = nationalNumber.value.trim();
//     const genderValue = gender.value.trim();
//     const managerValue = manager.value.trim();
//     const dateofbirthValue = dateofbirth.value.trim();
//     const ageValue = age.value;

//     if (!firstNameValue) {
//         setErrorFor(firstName, "Firstname cannot be blank");
//         firstNameResult = false;
//     } else {
//         setSuccessFor(firstName);
//         firstNameResult = true;
//     }

//     if (!lastNameValue) {
//         setErrorFor(lastName, "Registration Number cannot be blank");
//         lastNameResult = false;
//     } else {
//         setSuccessFor(lastName);
//         lastNameResult = true;
//     }

//     if (!nationalNumberValue) {
//         setErrorFor(nationalNumber, "Province cannot be blank");
//         nationalNumberResult = false;
//     } else {
//         setSuccessFor(nationalNumber);
//         nationalNumberResult = true;
//     }

//     if (!genderValue) {
//         setErrorFor(gender, "City cannot be blank");
//         genderResult = false;
//     } else {
//         setSuccessFor(gender);
//         genderResult = true;
//     }

//     if (!managerValue) {
//         setErrorFor(manager, "Registration Date cannot be blank");
//         managerResult = false;
//     } else {
//         setSuccessFor(manager);
//         managerResult = true;
//     }

//     if (!dateofbirthValue) {
//         setErrorFor(dateofbirth, "Telephone Number cannot be blank");
//         dateofbirthResult = false;
//     } else {
//         setSuccessFor(dateofbirth);
//         dateofbirthResult = true;
//     }

    
//     if (!ageValue) {
//         setErrorFor(dateofbirth, "Telephone Number cannot be blank");
//         dateofbirthResult = false;
//     } else {
//         setSuccessFor(dateofbirth);
//         dateofbirthResult = true;
//     }

//     if (
//         firstNameResult === true &&
//         lastNameResult === true &&
//         nationalNumberResult === true &&
//         genderResult === true &&
//         managerResult === true &&
//         dateofbirthResult === true
//     ) {
//         return {
//             firstName: firstNameValue,
//             lastName: lastNameValue,
//             nationalNumber: nationalNumberValue,
//             gender: genderValue,
//             manager: managerValue,
//             dateofbirth:dateofbirthValue,
//             age:ageValue,
//             message: "pass",
//         };
//     } else {
//         return { message: "fail" };
//     }
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
//     formControl.className = "form-control error";
//     small.innerText = message;
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement;
//     formControl.className = "form-control success";
// }

console.log('ok');

console.log(document.getElementById('companyId').value);