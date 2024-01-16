//Initialize variables
let pageBody = document.querySelector('body');

generateNavbar();
generateContent();

function generateNavbar() {
let navbarWrapper = document.createElement('section');
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
}

function generateContent() {
let container = document.createElement('section');
let contentWrapper = document.createElement('div');
let content = {
    title : document.createElement('h1'),
    info : document.createElement('p')
}

//Append content to main container
pageBody.appendChild(container);
container.appendChild(contentWrapper);
contentWrapper.appendChild(content.title);
contentWrapper.appendChild(content.info);

//Style content
container.classList = 'container';
contentWrapper.id = 'content';
content.title.id = 'page-title';
content.info.id = 'info';

//Adds HTML text
content.title.innerText = 'Welcome.';
content.info.innerText = 'My name is Sean Hageman, and this is the beginning of something amazing.';
}