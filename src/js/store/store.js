'use strict';

import Freezer from 'freezer-js';

const state = {
    rows: [],
    images: [],
    sounds: [],
    active: false,
    playing: false,
    page: 'main'
};

module.exports = new Freezer(state);
