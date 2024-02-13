const dropdown = document.getElementById('navDropdown');
dropdown.addEventListener('click', function(){
    document.getElementById('navProductsLink').classList.toggle('active');
    document.getElementById('navLoginLink').classList.toggle('active');
    document.getElementById('navFTPLink').classList.toggle('active');
    document.getElementById('navContactLink').classList.toggle('active');
    console.log('success!');
});
