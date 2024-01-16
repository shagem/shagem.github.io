//Initialize variables
let pageBody = document.querySelector('body');
let navbar = document.createElement('section');
let homeLink = document.createElement('a');
let homeImg = document.createElement('img');
let emailLink = document.createElement('a');
let emailImg = document.createElement('img');
let githubLink = document.createElement('a');
let githubImg = document.createElement('img');
let container = document.createElement('section');
let content = document.createElement('div');
let title = document.createElement('h1');
let info = document.createElement('p');

//Append navbar
pageBody.appendChild(navbar);
navbar.appendChild(githubLink);
navbar.appendChild(emailLink);
navbar.appendChild(homeLink);

//Append links to navbar
githubLink.appendChild(githubImg);
emailLink.appendChild(emailImg);
homeLink.appendChild(homeImg);

//Style navbar links
githubLink.href = 'https://github.com/shagem';
githubImg.src = './imgs/github.svg';
homeLink.id = 'logo';
emailLink.href = 'mailto:seanhagemanweb@gmail.com';
emailImg.src = './imgs/gmail.svg';
homeLink.href = 'index.htm';
homeImg.src = './imgs/logo.svg';

//Append content to main container
pageBody.appendChild(container);
container.appendChild(content);
content.appendChild(title);
content.appendChild(info);

//Add styles
navbar.classList = 'navbar';
container.classList = 'container';
content.id = 'content';
title.id = 'page-title';
info.id = 'info';

//Adds HTML
title.innerText = 'Welcome.';
info.innerText = 'My name is Sean Hageman, and this is the beginning of something amazing.';