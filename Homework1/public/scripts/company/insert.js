async function addCompany() {
    let companyName=document.getElementById('companyName').value.trim();
    let registrationNumber=document.getElementById('registrationNumber').value.trim();
    let province=document.getElementById('province').value.trim();
    let city=document.getElementById('city').value.trim();
    let registrationDate=document.getElementById('registrationDate').value.trim();
    let telephoneNumber=document.getElementById('telephoneNumber').value.trim();
    let company={
        companyName,
        registrationNumber,
        province,
        city,
        registrationDate,
        telephoneNumber
    }
    try {
        await fetch('/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(company)
        });
        window.location.replace('/');
    } catch (error) {
        console.log(error);
    }
};