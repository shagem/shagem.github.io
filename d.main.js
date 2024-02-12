let mainContent = document.getElementById('maincontent');

function fetchHtml() {
  fetch('https://seanhageman.com/d.main.html')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    mainContent.innerHTML = html;
    console.log('Success');
  });
}
