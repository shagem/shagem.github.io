let mainContent = document.getElementById('maincontent');

function fetchHtml() {
  fetch('https://seanhageman.com/d.main.html')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    maincontent.innerHTML = html     
  });
}
