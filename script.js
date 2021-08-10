const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function(){
    bodyElement.classList.toggle('is-open');
});

navList.addEventListener('click', function(e){
    let clickedElement = e.target;

    if (clickedElement.classList[0] === 'nav-link')
    {
        bodyElement.classList.remove('is-open');
    }
})

// Add event listener to the window object to close nav when we click outside //
window.addEventListener('click', function(e) {
    let clickedElement = e.target;

    if (clickedElement.matches('.is-open'))
    {
        bodyElement.classList.remove('is-open');
        heroElement.classList.remove('is-open');
    }
});


var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    status.classList.add('success');
    form.reset()
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    status.classList.add('error');
    });
}
form.addEventListener("submit", handleSubmit)