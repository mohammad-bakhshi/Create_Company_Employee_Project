$(document).ready(function () {
    $("a[name='editCompany'").on('click', function (e) {
        e.preventDefault();
        let companyName=document.getElementById('companyName').value.trim();
        let registrationNumber=document.getElementById('registrationNumber').value.trim();
        let province=document.getElementById('province').value.trim();
        let city=document.getElementById('city').value.trim();
        let registrationDate=document.getElementById('registrationDate').value.trim();
        let telephoneNumber=document.getElementById('telephoneNumber').value.trim();
        let data={
            companyName:companyName,
            registrationNumber:registrationNumber,
            province:province,
            city:city,
            registrationDate:registrationDate,
            telephoneNumber:telephoneNumber
        }
        fetch(this.href, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace('/');
            })
            .catch(err => console.log(err));
    });
});
