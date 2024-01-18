//Initialize pageBody and content
const pageBody = document.querySelector('body');
const wrapper = document.createElement('main');
const content = document.createElement('section');
wrapper.classList = 'wrapper';
content.id = 'content';

//On DOM Load begin generating layout
document.addEventListener('DOMContentLoaded', function() {
    generateNavbarFooter();
    pageBody.appendChild(wrapper);
    wrapper.appendChild(content);
    generateHomeContent();
    generateProjects();
}, false);


//Creates Navbar and Footer
function generateNavbarFooter() {
    const navbar = document.createElement('header');
    const navbarData = {
        homeLink : document.createElement('a'),
        emailLink : document.createElement('a'),
        githubLink : document.createElement('a'),
        homeIcon : document.createElement('img'),
        emailIcon : document.createElement('img'),
        githubIcon : document.createElement('img')
    };
//Append navbar
    pageBody.appendChild(navbar);
    navbar.appendChild(navbarData.githubLink);
    navbar.appendChild(navbarData.emailLink);
    navbar.appendChild(navbarData.homeLink);
//Append links to navbar
    navbarData.githubLink.appendChild(navbarData.githubIcon);
    navbarData.emailLink.appendChild(navbarData.emailIcon);
    navbarData.homeLink.appendChild(navbarData.homeIcon);
//Style navbar
    navbar.classList = 'navbar';
    navbarData.githubLink.href = 'https://github.com/shagem';
    navbarData.githubIcon.src = './imgs/github.svg';
    navbarData.homeLink.id = 'logo';
    navbarData.emailLink.href = 'mailto:seanhagemanweb@gmail.com';
    navbarData.emailIcon.src = './imgs/gmail.svg';
    navbarData.homeIcon.src = './imgs/logo.svg';
    navbarData.homeLink.href = './index.htm';
    
    
};

//Creates Home Content
function generateHomeContent() {
    const homeContent = {
        title : document.createElement('h1'),
        info : document.createElement('p')
    };
    content.innerHTML = '';
    content.appendChild(homeContent.title);
    content.appendChild(homeContent.info);
    homeContent.title.id = 'page-title';
    homeContent.info.id = 'info';
    homeContent.title.innerText = 'Welcome.';
    homeContent.info.innerText = 'My name is Sean Hageman and I create web apps in my free time.';
    
    //Appends footer
    const footer = document.createElement('footer');
    pageBody.appendChild(footer);
    footer.innerHTML = '<p>©2024 seanhageman.com</p>';
    
};


//Creates Projects
function generateProjects() {
    const projects = document.createElement('section');
    const projectsData = {
        title : document.createElement('h2'),
        info : document.createElement('div'),
        weatherApp : document.createElement('h3'),
        exampleApp : document.createElement('h3')
    };
//Append content to page
    wrapper.appendChild(projects);
    projects.appendChild(projectsData.title);
    projects.appendChild(projectsData.weatherApp);
    projects.appendChild(projectsData.exampleApp);
//Style projects
    projects.id = 'projects';
    projectsData.title.id = 'projects-title';
    projectsData.info.id = 'info';
    projectsData.weatherApp.id = 'projects-item';
    projectsData.exampleApp.id = 'projects-item';
//Add HTML Text
    projectsData.title.innerText = 'Projects';
    projectsData.weatherApp.innerHTML = 'Weather Tracker';
    projectsData.exampleApp.innerHTML = 'Example Application';
    projectsData.weatherApp.addEventListener('click', function(){
        wrapper.classList.add('slideOut');
        setTimeout(function() {
        wrapper.innerHTML = '';
        content.innerHTML = '';
        wrapper.classList.remove('slideOut');
            setTimeout(function() {
                wrapper.appendChild(content);
                projectsData.title.innerText = 'Weather Tracker'
                content.appendChild(projectsData.title);
                content.appendChild(projectsData.info);
                projectsData.info.id = 'projects-overview';
                projectsData.info.innerHTML = '<p>This is a simple Weather Report app utilizing the OpenWeatherMap API.</p><p>  Type in your city to receive current weather updates in the area.</p>';
            }, 0500);
        }, 0500);
    });
    projectsData.exampleApp.addEventListener('click', function(){
        wrapper.classList.add('slideOut');
        setTimeout(function() {
        wrapper.innerHTML = '';
        content.innerHTML = '';
        wrapper.classList.remove('slideOut');
            setTimeout(function() {
                wrapper.appendChild(content);
                projectsData.title.innerText = 'Example Application'
                content.appendChild(projectsData.title);
                content.appendChild(projectsData.info);
                projectsData.info.id = 'projects-overview';
                projectsData.info.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
            }, 0500);
        }, 0500);
    });
};





