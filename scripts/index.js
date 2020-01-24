'use strict';

import portfolio from './portfolio.js';

const main = function() {
    portfolio.bindEventListeners();
    portfolio.render();
};

$(main);