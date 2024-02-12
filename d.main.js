let mainContent = document.getElementById('maincontent');

fetch('https://seanhageman.com/d.main.html')
.then(response => response.text())
.then(function(response) {
    mainContent.innerHTML = response;
    })
.catch(err => console.error(err)
);