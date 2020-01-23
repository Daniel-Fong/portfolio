'use strict';

const handleAboutMeClick = function() {
    $('.aboutMe-nav').click(function() {
        let aboutMeView = `<h1>About Me</h1> 
        <p class='name'>Daniel Fong</p>
                <img class="bio-pic" src='img/bio-pic.jpg'/>
                <p class='puzzles'>I love puzzles.</p>
                <p>Which retrospectively is why I was drawn to web development; the process of unraveling nebulous visions and ideas and manifesting them into a coherent experience compels me to continue learning on a daily basis.</p>
                <p>I have often found that learning is enhanced by others, and when given the opportunity I enjoy working (and playing) with those who share my motivation for continuous improvement and learning while bringing a different perspective to the table.</p>
                <p>I am goal and outcome oriented, a diligent worker in any area I apply myself to, and a thoughtful problem solver.</p>
    
                    <img class='climbing-pic' src='img/free-range.jpg'/>
    
                <p>Being based in Denver, CO makes it convenient to put myself to the test mentally and physically. Much of my prior work experience has been in the outdoor industry, and if I’m not honing my skills behind a computer screen or sleeping, there’s a 99% chance I’m out with friends working my way through physical problems rock climbing. </p>
                <p>Well, either that or snowboarding, playing video games, table tennis, golfing, or enjoying a scrumptious snack. I am equally passionate about the outdoors and web development, and have been excited to witness the rapidly expanding junction between the two.</p>
            <h3>Technical Skills</h3>
                <ul class='technical-skills-ul'>
                    <li>Frontend: HTML5, JQuery, Javascript, CSS</li>
                </ul>
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
            <img class="bookmark-app" src='img/bookmark-capture.PNG'/>
            <p class='tech-used'><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' src="img/jQuery.png"></p>
            <p>Bring a slice of the tropics into your life with an app designed to save your favorite websites with a description, rating and link to the site itself. Bookmarks can be filtered by rating. </p>
            <button>Live App</button>
            <button>Code</button>
<section`
            render(projectsView);
        });
    };

    const handleContactClick = function() {
        $('.contact-nav').click(function() {
            let contactView =`
            <h1>Contact</h1>
            <p class='name'>Daniel Fong</p> 
            <ul class='contact-ul'>
                <li><i class="fab fa-linkedin-in"></i></li>
                <li>
                    <i class="fab fa-github"></i>
                </li>
                <li>
                    <i class="fas fa-paper-plane"></i>
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