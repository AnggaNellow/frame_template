const form     = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("my-form-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    status.innerHTML = "<span><i class='fas fa-check-circle'></i></span> Thanks for your submission!";
    form.reset()
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)