'use strict';

const handleAboutMeClick = function() {
    $('.aboutMe-nav').click(function() {
        let aboutMeView = `
        <h1>About Me</h1> 
        <h2 class='name'>Daniel Fong</h2>
        <div class='img-cover bio-cover'>
            <img class="bio-pic" src='img/bio-pic.jpg'/></div>
            <p class='puzzles'>Lorem Ipsum</p>
            <section class='skills'>
                <h3>Technical Skills</h3>
                <ul class='technical-skills-ul'>
                    <li>Frontend: <p><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' src="img/jQuery.png"></p></li>
                </ul>
            </section>
                <p class='first-paragraph-aboutMe'>Lorem Ipsum Lorem Ipsum Lorem Ipsum <strong>drawn</strong> to <strong>web development</strong>;</p>
            <section class='body-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                <div class='img-cover'>    
                <img class='climbing-pic' src='img/free-range.jpg'/></div>
                <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>
                <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <h3>Education</h3>
                <ul class='education-ul'>
                    <li>Thinkful Engineering Immersion Program (January 2020 - ongoing)</li>
                    <li>UCLA, BS Environmental Science (September 2010 - June 2014)</li>
                </ul>`
        render(aboutMeView);
    });
};

const handleProjectsClick = function() {
    $('.projects-nav').click(function() {
        let projectsView =`
<section class='intro'>
<h1>Daniel Fong</h1>
    <p>A <strong>Denver</strong> based frontend <strong>web developer</strong></p> 
        <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </section>
    <div class='projects-div'>
    <h2>Projects</h2>
        <h3>Bookmark Bungalow</h3>
            <div class='img-cover'>
            <img class="bookmark-app" src='img/bookmark-capture.PNG'/>
            </div>
            <p class='tech-used'><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' src="img/jQuery.png"></p>
            <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. </p>
            <section class='button-section'>
                <a class='live-app-button' target='blank' href='https://thinkful-ei-leopard.github.io/daniel-bookmarks-app'><button type='button'>Live App</button></a>
                <a class='code-button' target='blank' href='https://github.com/thinkful-ei-leopard/daniel-bookmarks-app'><button>Code</button></a>
            </section>
        <h3>Bookmark Bungalow</h3>
        <div class='img-cover'>
            <img class="bookmark-app" src='img/bookmark-capture.PNG'/></div>
            <p class='tech-used'><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' src="img/jQuery.png"></p>
            <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <section class='button-section'>
                <a class='live-app-button' target='blank' href='https://thinkful-ei-leopard.github.io/daniel-bookmarks-app'><button type='button'>Live App</button></a>
                <a class='code-button' target='blank' href='https://github.com/thinkful-ei-leopard/daniel-bookmarks-app'><button>Code</button></a>
            </section>
    </div>`
            render(projectsView);
        });
    };

    const handleContactClick = function() {
        $('.contact-nav').click(function() {
            let contactView =`
            <h1>Contact</h1>
            <h2 class='name'>Daniel Fong</h2> 
            <ul class='contact-ul'>
                <li>
                    <a class='linked-in-icon' href='https://www.linkedin.com/in/daniel-fong-4a543119b/' target='blank'>
                    <i class="fab fa-linkedin-in"></i></a>
                    <p class='linked-in-icon-description'>LinkedIn</p>
                </li>
                <li>
                    <a class='github-icon' href='https://github.com/Daniel-Fong' target='blank'>
                    <i class="fab fa-github"></i></a>
                    <p class='github-icon-description'>Github</p>
                </li>
                <li>
                    <a class='plane-icon' href='mailto:daniel.fong.mv@gmail.com' target='blank'>
                    <i class="fas fa-paper-plane"></i></a>
                    <p class='paper-plane-icon-description'>Email</p>
                </li>
            </ul>`
                render(contactView);
            });
        };   

const render = function(currentView) {
    $('main').html(currentView);
};

const bindEventListeners = function() {
    handleAboutMeClick();
    handleProjectsClick();
    handleContactClick();
};

export default {
    bindEventListeners,
    render,
}