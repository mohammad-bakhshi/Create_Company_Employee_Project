async function deleteCompany(id) {
    try {
        await fetch(`/${id}`, {
            method: 'DELETE',
        });
        window.location.replace('/');
    } catch (error) {
        console.log(error);
    }
}
