$(document).ready(function () {
    $("a[name='deleteCompany'").on('click', function (e) {
        e.preventDefault();
        fetch(this.href, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.replace('/');
            })
            .catch(err => console.log(err));
    });
    // $("button[name='addNewCompany'").click(function (e) {
    //     let fetchRes = fetch(
    //         "/company/insert");
    //         // fetchRes is the promise to resolve
    //     // it by using.then() method

    // });
});
