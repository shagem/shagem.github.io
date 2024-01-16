//Initialize variables
let pageBody = document.querySelector('body');
let navbarWrapper = document.createElement('section');
let container = document.createElement('section');
let content = document.createElement('div');
let title = document.createElement('h1');
let info = document.createElement('p');

let navbar = {
    homeLink : document.createElement('a'),
    emailLink : document.createElement('a'),
    githubLink : document.createElement('a'),
    homeImg : document.createElement('img'),
    emailImg : document.createElement('img'),
    githubImg : document.createElement('img')
}

//Append navbar
pageBody.appendChild(navbarWrapper);
navbarWrapper.appendChild(navbar.githubLink);
navbarWrapper.appendChild(navbar.emailLink);
navbarWrapper.appendChild(navbar.homeLink);

//Append links to navbar
navbar.githubLink.appendChild(navbar.githubImg);
navbar.emailLink.appendChild(navbar.emailImg);
navbar.homeLink.appendChild(navbar.homeImg);

//Style navbar
navbarWrapper.classList = 'navbar';
navbar.githubLink.href = 'https://github.com/shagem';
navbar.githubImg.src = './imgs/github.svg';
navbar.homeLink.id = 'logo';
navbar.emailLink.href = 'mailto:seanhagemanweb@gmail.com';
navbar.emailImg.src = './imgs/gmail.svg';
navbar.homeLink.href = 'index.htm';
navbar.homeImg.src = './imgs/logo.svg';

//Append content to main container
pageBody.appendChild(container);
container.appendChild(content);
content.appendChild(title);
content.appendChild(info);

//Style content
container.classList = 'container';
content.id = 'content';
title.id = 'page-title';
info.id = 'info';

//Adds HTML text
title.innerText = 'Welcome.';
info.innerText = 'My name is Sean Hageman, and this is the beginning of something amazing.';