let mainContent = document.getElementById('maincontent');

async function fetchMyDocument() {      
  try {
    let response = await fetch('https://seanhageman.com/d.main.html'); // Gets a promise
    mainContent.innerHTML = await response.text(); // Replaces body with response
    console.log('Success');
  } catch (err) {
    console.log('Fetch error:' + err); // Error handling
  }
}
