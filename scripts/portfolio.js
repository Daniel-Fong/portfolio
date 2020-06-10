'use strict';

const handleAboutMeClick = function() {
    $('.aboutMe-nav').click(function() {
        let aboutMeView = `
        <h1>About Me</h1> 
        <h2 class='name'>Daniel Fong</h2>
            <img class="bio-pic" alt='Headshot of Daniel Fong' src='img/bio-pic.jpg'/>
            <p class='puzzles'>I love puzzles.</p>
            <section class='skills'>
                <h3>Technical Skills</h3>
                <ul class='technical-skills-ul'>
                    <li>Frontend: <p><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' alt='jQuery icon' src="img/jQuery.png"><i class="fab fa-sass tech-icons" title='Sass (SCSS)'></i><img class="icons" title='Cypress' src="img/cypress.svg"/></p></li>
                    <li>Backend: <p><i class="fab fa-node-js tech-icons" title='Node.js'></i><img class="icons" title='Knex.js' src="img/knex.svg"/><img class="icons" title='Postgres' src="https://img.icons8.com/color/24/000000/postgreesql.png"/><img class="icons" title='Mocha' src="img/mocha.svg"/><img class="icons" title='Chai' src="img/chai.svg"/></p></li>
                </ul>
            </section>
                <p class='first-paragraph-aboutMe'>Which retrospectively is why I was <strong>drawn</strong> to <strong>web development</strong>;</p>
            <section class='body-text'>
                <p>the process of <strong>unraveling ideas</strong> and manifesting them into a coherent <strong>experience</strong> compels me to continue <strong>learning</strong> on a daily basis.</p>
                <p>I have often found that learning is <strong>enhanced</strong> by <strong>others</strong>, and I enjoy working with those who share my <strong>motivation</strong> for continuous improvement and learning while bringing a different <strong>perspective</strong> to the table.</p>
                <p>I am goal and <strong>outcome oriented</strong>, a <strong>diligent</strong> worker in any area I apply myself to, and a thoughtful <strong>problem solver</strong>.</p>
                    <img class='climbing-pic' alt='Climbing Free Range in Boulder Canyon' src='img/free-range.jpg'/>
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
        <p>A <strong>Denver</strong> based full stack <strong>web developer</strong></p> 
            <p>Creating <strong>accessible</  strong> and attractive <strong>applications</strong> that captivate.
        </p>
        </section>
    <div class='projects-div'>
    <h2>Projects</h2>
        <h3>Cup of Sugar</h3>
        <img class="cup-of-sugar" alt='Screen capture of Cup of Sugar application' src='img/Cup-of-Sugar.PNG'/>
        <p class='tech-used'><i class="fab fa-react tech-icons" title='React.js'></i><i class="fab  fa-js tech-icons" title='Javascript'></i><i class="fab fa-node-js tech-icons" title='Node.js'></i><img class="icons" title='Knex.js' src="img/knex.svg"/><img class="icons" title='Postgres' src="https://img.icons8.com/color/24/000000/postgreesql.png"/><img class="icons" title='Mocha' src="img/mocha.svg"/><img class="icons" title='Chai' src="img/chai.svg"/><i class="fab fa-sass tech-icons cup-sass-icon" title='Sass (SCSS)'></i></p>
        <p>A full stack project completed as part of a team of 3. Cup of Sugar is a localized, community-oriented application that aims to bring neighbors closer together by fostering connections based on mutual aid. Users can post offers and requests to a public bulletin board, where other users can respond by post comments or messaging other users privately.</   p>
        <section class='button-section'>
            <a class='live-app-button' target='blank' href='https://cup-of-sugar.now.sh/'><span class='button-span'>Live App</span></a>
            <a class='code-button' target='blank' href='https://github.com/thinkful-ei-leopard/ cup-of-sugar-client'><span class='button-span'>Code</span></a>
        </section>
    <h3>DorianKrausz.com</h3>
        <img class="dorian-site" alt='Screen capture of Dorian Krausz Portfolio' src='img/dorian-site.PNG'/>
        <p class='tech-used'><i class="fab fa-react tech-icons" title='React.js'></i><i class="fab fa-js tech-icons" title='Javascript'></i><i class="fab fa-css3-alt tech-icons" title='CSS3'></i></p>
        <p>A frontend portfolio project completed in one week, with minor revisions since then. Showcases an artwork collection and the artist.</p>
        <section class='button-section'>
            <a class='live-app-button' target='blank' href='https://doriankrausz.com/'><span    class='button-span'>Live App</span></a>
            <a class='code-button' target='blank' href='https://github.com/Daniel-Fong/ dorian-website'><span class='button-span'>Code</span></a>
        </section>
    <h3>Snapshot</h3>
        <img class="dorian-site" alt='Snapshot application screen grab' src='img/Snapshot.PNG'/>
        <p class='tech-used'><i class="fab fa-react tech-icons" title='React.js'></i><i class="fab fa-css3-alt tech-icons" title='CSS3'></i><i class="fab fa-node-js tech-icons" title='Node.js'></i><img class="icons" title='Knex.js' src="img/knex.svg"/><img class="icons" title='Postgres' src="https://img.icons8.com/color/24/000000/postgreesql.png"/></p>
        <p>A full stack solo application created in two weeks. Allows users to add players, games, and scores to keep track of physical (e.g. board and card) games.</p>
        <section class='button-section'>
            <a class='live-app-button' target='blank' href='https://snapshot-delta.now.sh/'><span class='button-span'>Live App</span></a>
            <a class='code-button' target='blank' href='https://github.com/Daniel-Fong/ first-capstone-client'><span class='button-span'>Code</span></a>
        </section>
    <h3>Sermo</h3>
        <img class="sermo" alt='Sermo application screen grab' src='img/Sermo.PNG'/>
        <p class='tech-used'><i class="fab fa-react tech-icons" title='React.js'></i><i class="fab  fa-css3-alt tech-icons" title='CSS3'></i><i class="fab fa-node-js tech-icons" title='Node.js'></i><img class="icons" title='Knex.js' src="img/knex.svg"/><img class="icons" title='Postgres' src="https://img.icons8.com/color/24/000000/postgreesql.png"/><span class="iconify tech-icons" data-icon="logos:cypress" title='Cypress' data-inline="false"></ span></p>
        <p>A full stack application completed with a pair in one week. Utilizes a spaced    repetition algorithm to manipulate a linked list of words to teach the user Mandarin.</p>
        <section class='button-section'>
            <a class='live-app-button' target='blank' href='https://sermo.now.sh/register/'><span class='button-span'>Live App</span></a>
            <a class='code-button' target='blank' href='https://github.com/thinkful-ei-leopard/ spaced-repetition-client-daniel-hsin'><span class='button-span'>Code</span></a>
        </section>
    <h3>Bookmark Bungalow</h3>
        <img class="bookmark-app" alt='Bookmark bungalow screen capture' src='img/bookmark-capture.PNG'/>
        <p class='tech-used'><i class="fab fa-html5 tech-icons"></i><i class="fab fa-js     tech-icons"></i><i class="fab fa-css3-alt tech-icons"></i><img class='jQuery' alt='jQuery icon' src="img/jQuery.png"></p>
        <p>Bring a slice of the tropics into your life with an app designed to save your favorite websites with a description, rating and link to the site itself. Bookmarks can be filtered by rating.</p>
        <section class='button-section'>
            <a class='live-app-button' target='blank' href='https://thinkful-ei-leopard.github.io/  daniel-bookmarks-app'><span class='button-span'>Live App</span></a>
            <a class='code-button' target='blank' href='https://github.com/thinkful-ei-leopard/ daniel-bookmarks-app'><span class='button-span'>Code</span></a>
        </section>
    </div>`
            render(projectsView);
        });
    };

    const handleContactClick = function() {
        $('.contact-nav').click(function() {
            let contactView =`
            <h1 class='contact-h1'>Contact</h1>
            <h2 class='name'>Daniel Fong</h2> 
            <ul class='contact-ul'>
                <li>
                    <a class='linked-in-icon' href='https://www.linkedin.com/in/daniel-ryan-fong/' target='blank'>
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