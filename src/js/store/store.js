'use strict';

//import Freezer from 'freezer-js';
import EventBus from 'modules/events';
import I from 'immutable';
const state = {
    rows: [],
    images: [],
    sounds: [],
    active: false,
    playing: false,
    initiated: false,
    page: 'main'
};

let orignialState = I.fromJS(state);
let currentState = orignialState.set(orignialState, true);

const STORE = {
    set: function(label, value) {
        let newState = currentState.set(label, value);
        EventBus.trigger('update', newState.toJSON());
        currentState = newState;
    },
    get: function() {
        return currentState.toJSON();
    },
    on: function(event, fn) {
        EventBus.on(event, fn);
    }
};

module.exports = STORE;
