//Initialize pageBody and container and content
const pageBody = document.querySelector('body');
generateNavbar();
const container = document.createElement('section');
container.classList = 'container';
pageBody.appendChild(container);
const contentWrapper = document.createElement('div');
contentWrapper.id = 'content';



generateContent();
generateProjects();
generateFooter();

//Creates Navbar
function generateNavbar() {
    const navbarWrapper = document.createElement('section');
    const navbar = {
        homeLink : document.createElement('a'),
        emailLink : document.createElement('a'),
        githubLink : document.createElement('a'),
        homeIcon : document.createElement('img'),
        emailIcon : document.createElement('img'),
        githubIcon : document.createElement('img')
    };
//Append navbar
    pageBody.appendChild(navbarWrapper);
    navbarWrapper.appendChild(navbar.githubLink);
    navbarWrapper.appendChild(navbar.emailLink);
    navbarWrapper.appendChild(navbar.homeLink);
//Append links to navbar
    navbar.githubLink.appendChild(navbar.githubIcon);
    navbar.emailLink.appendChild(navbar.emailIcon);
    navbar.homeLink.appendChild(navbar.homeIcon);
//Style navbar
    navbarWrapper.classList = 'navbar';
    navbar.githubLink.href = 'https://github.com/shagem';
    navbar.githubIcon.src = './imgs/github.svg';
    navbar.homeLink.id = 'logo';
    navbar.emailLink.href = 'mailto:seanhagemanweb@gmail.com';
    navbar.emailIcon.src = './imgs/gmail.svg';
    navbar.homeIcon.src = './imgs/logo.svg';
    navbar.homeLink.addEventListener('click', function(event) {
        generateContent();
        event.preventDefault();
    });
};

//Creates Home Content
function generateContent() {
    const content = {
        title : document.createElement('h1'),
        info : document.createElement('div')
    };
//Append content to main container
    container.innerHTML = '';
    container.appendChild(contentWrapper);
    contentWrapper.innerHTML = '';
    contentWrapper.appendChild(content.title);
    contentWrapper.appendChild(content.info);
//Style content
    content.title.id = 'page-title';
    content.info.id = 'info';
//Adds HTML text
    content.title.innerText = 'Welcome.';
    content.info.innerHTML = '<p>My name is Sean Hageman and I create web apps in my free time.</p>';
};


//Creates Projects
function generateProjects() {
    const projectsWrapper = document.createElement('div');
    const projects = {
        title : document.createElement('h2'),
        weatherApp : document.createElement('h3'),
        exampleApp : document.createElement('h3')
    };
//Append content to main container
    pageBody.appendChild(projectsWrapper);
    projectsWrapper.appendChild(projects.title);
    projectsWrapper.appendChild(projects.weatherApp);
    projectsWrapper.appendChild(projects.exampleApp);
//Style projects
    projectsWrapper.id = 'projects';
    projects.title.id = 'projects-title';
    projects.weatherApp.id = 'projects-item';
    projects.exampleApp.id = 'projects-item';
//Add HTML Text
    projects.title.innerText = 'Projects';
    projects.weatherApp.innerHTML = 'Weather Tracker';
    projects.exampleApp.innerHTML = 'Example Application';
    projects.weatherApp.addEventListener('click', weatherAppOverview);
    projects.exampleApp.addEventListener('click', exampleAppOverview);
};

function generateFooter() {
    const footerWrapper = document.createElement('footer');
    pageBody.appendChild(footerWrapper);
    footerWrapper.innerHTML = '<p>©2024 seanhageman.com</p>';
};

function animateContentRemoval() {
    document.querySelector('.container').classList.toggle('hide');
    setTimeout(function(){
    container.innerHTML = '';
    }, 1450);
};

function weatherAppOverview() {
    animateContentRemoval();
    const weatherApp = {
        name : document.createElement('h2'),
        overview : ''
    }
    container.appendChild(contentWrapper);
    content.appendChild(weatherApp.name);
    weatherApp.name.id = 'projects-title';
};

function exampleAppOverview() {
    animateContentRemoval();

};