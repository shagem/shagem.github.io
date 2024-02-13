const dropdown = document.getElementById('navDropdown');
dropdown.addEventListener('click', function(){
    document.getElementById('navLink').classList.toggle('active');
    console.log('success!');
});
