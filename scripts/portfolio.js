'use strict';

const handleAboutMeClick = function() {
    $('.aboutMe-nav').click(function() {
        let aboutMeView = `<h1>About Me</h1> 
        <h2 class='name'>Daniel Fong</h2>
            <img class="bio-pic" src='img/bio-pic.jpg'/>
            <p class='puzzles'>I love puzzles.</p>
            <section class='skills'>
                <h3>Technical Skills</h3>
                <ul class='technical-skills-ul'>
                    <li>Frontend: <p><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' src="img/jQuery.png"></p></li>
                </ul>
            </section>
                <p class='first-paragraph-aboutMe'>Which retrospectively is why I was drawn to web development;</p>
                <p>the process of unraveling nebulous visions and ideas and manifesting them into a coherent experience compels me to continue learning on a daily basis.</p>
                <p>I have often found that learning is enhanced by others, and I enjoy working with those who share my motivation for continuous improvement and learning while bringing a different perspective to the table.</p>
                <p>I am goal and outcome oriented, a diligent worker in any area I apply myself to, and a thoughtful problem solver.</p>
                    <img class='climbing-pic' src='img/free-range.jpg'/>
                <p>Being based in Denver, CO makes it convenient to put myself to the test mentally and physically. Much of my prior work experience has been in the outdoor industry, and if I’m not honing my skills behind a computer screen or sleeping, there’s a 99% chance I’m out with friends working my way through physical problems rock climbing. </p>
                <p>I am equally passionate about the outdoors and web development, and have been excited to witness the rapidly expanding junction between the two.</p>
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
    <p>A Denver based frontend web developer</p> 
        <p>Currently honing skills at Thinkful to create accessible and attractive applications that captivate.
    </p>
    </section>
    <h2>Projects</h2>
        <h3>Bookmark Bungalow</h3>
            <div class='img-cover'>
            <img class="bookmark-app" src='img/bookmark-capture.PNG'/>
            </div>
            <p class='tech-used'><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' src="img/jQuery.png"></p>
            <p>Bring a slice of the tropics into your life with an app designed to save your favorite websites with a description, rating and link to the site itself. Bookmarks can be filtered by rating. </p>
            <section class='button-section'>
                <a class='live-app-button' target='blank' href='https://thinkful-ei-leopard.github.io/daniel-bookmarks-app'><button type='button'>Live App</button></a>
                <a class='code-button' target='blank' href='https://github.com/thinkful-ei-leopard/daniel-bookmarks-app'><button>Code</button></a>
            </section>
<section`
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
                    <i class="fab fa-linkedin-in"></i>
                    <p class='linked-in-icon-description'>LinkedIn</p>
                    </a>
                </li>
                <li>
                    <a class='github-icon' href='https://github.com/Daniel-Fong' target='blank'><i class="fab fa-github"></i>
                    <p class='linked-in-icon-description'>Github</p>
                    </a>
                </li>
                <li>
                    <a class='plane-icon' href='' target='blank'><i class="fas fa-paper-plane"></i>
                    <p class='paper-plane-icon-description'>Email</p>
                    </a>
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