'use strict';

import Freezer from 'freezer-js';

const state = {
    rows: [],
    images: [],
    sounds: [],
    page: 'main'
};

module.exports = new Freezer(state);
