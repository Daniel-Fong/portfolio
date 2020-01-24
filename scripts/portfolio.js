'use strict';

const handleAboutMeClick = function() {
    $('.aboutMe-nav').click(function() {
        let aboutMeView = `
        <h1>About Me</h1> 
        <h2 class='name'>Daniel Fong</h2>
            <img class="bio-pic" src='img/bio-pic.jpg'/>
            <p class='puzzles'>I love puzzles.</p>
            <section class='skills'>
                <h3>Technical Skills</h3>
                <ul class='technical-skills-ul'>
                    <li>Frontend: <p><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' src="img/jQuery.png"></p></li>
                </ul>
            </section>
                <p class='first-paragraph-aboutMe'>Which retrospectively is why I was <strong>drawn</strong> to <strong>web development</strong>;</p>
            <section class='body-text'>
                <p>the process of <strong>unraveling ideas</strong> and manifesting them into a coherent <strong>experience</strong> compels me to continue <strong>learning</strong> on a daily basis.</p>
                <p>I have often found that learning is <strong>enhanced</strong> by <strong>others</strong>, and I enjoy working with those who share my <strong>motivation</strong> for continuous improvement and learning while bringing a different <strong>perspective</strong> to the table.</p>
                <p>I am goal and <strong>outcome oriented</strong>, a <strong>diligent</strong> worker in any area I apply myself to, and a thoughtful <strong>problem solver</strong>.</p>
                    <img class='climbing-pic' src='img/free-range.jpg'/>
                <p>Being based in Denver, CO makes it convenient to put myself to the test mentally and physically. Much of my prior work experience has been in the outdoor industry, and if I’m not honing my skills behind a computer screen or sleeping, there’s a 99% chance I’m out with friends working my way through physical problems rock climbing. </p>
                <p>I am equally passionate about the outdoors and web development, and have been excited to witness the rapidly expanding junction between the two.</p>
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
        <p>Currently honing skills at <strong>Thinkful</strong> to create <strong>accessible</strong> and attractive <strong>applications</strong> that captivate.
    </p>
    </section>
    <div class='projects-div'>
    <h2>Projects</h2>
        <h3>Bookmark Bungalow</h3>
            <img class="bookmark-app" src='img/bookmark-capture.PNG'/>
            <p class='tech-used'><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' src="img/jQuery.png"></p>
            <p>Bring a slice of the tropics into your life with an app designed to save your favorite websites with a description, rating and link to the site itself. Bookmarks can be filtered by rating. </p>
            <section class='button-section'>
                <a class='live-app-button' target='blank' href='https://thinkful-ei-leopard.github.io/daniel-bookmarks-app'><button type='button'>Live App</button></a>
                <a class='code-button' target='blank' href='https://github.com/thinkful-ei-leopard/daniel-bookmarks-app'><button>Code</button></a>
            </section>
        <h3>Bookmark Bungalow</h3>
            <img class="bookmark-app" src='img/bookmark-capture.PNG'/>
            <p class='tech-used'><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' src="img/jQuery.png"></p>
            <p>Bring a slice of the tropics into your life with an app designed to save your favorite websites with a description, rating and link to the site itself. Bookmarks can be filtered by rating. </p>
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
                    <a class='plane-icon' href='' target='blank'>
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