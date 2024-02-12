let mainContent = document.getElementById('wrapper');

fetch('https://seanhageman.com/d.main.html')
.then(response => response.text())
.then(function(response) {
    mainContent.innerHTML = response;
    })
.catch(err => console.error(err)
);