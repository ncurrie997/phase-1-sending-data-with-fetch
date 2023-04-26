// Add your code here

function submitData(userName, userEmail) {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        const p = document.createElement('p')
        document.body.append(p)
        p.textContent = `${object.id}`

    })
    .catch(function (error) {
        alert("Hmmmmm, Something went wrong mate!");
        console.log(error.message);
        const errorMsg = document.createElement('div')
        errorMsg.textContent = `${error.message}`
        document.body.append(errorMsg);
    });
}