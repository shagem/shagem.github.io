let body = document.querySelector('body');

fetch('https://seanhageman.com/d.main.html')
.then(response => response.text())
.then(function(response) {
    body.innerHTML = response;
    })
.catch(err => console.error(err)
);