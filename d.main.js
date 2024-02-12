let mainContent = document.getElementById('maincontent');

function fetchHtml() {
  fetch('./file.html')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    maincontent.innerHTML = html     
  });
}