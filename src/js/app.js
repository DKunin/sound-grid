'use strict';

import yo from 'yo-yo';
import store from 'store/store';
import actions from 'actions/actions';
import main from 'pages/main';
import editor from 'pages/editor';
import notfound from 'pages/notfound';
import page from 'page';
import dragula from 'dragula';
var drake;
var el = main(store.get(), actions);

store.on('update', function(newValue) {
    var state = store.get();
    if (state.page === 'main') {
        yo.update(el, main(state, actions));
    }
    if (state.page === 'editor') {
        yo.update(el, editor(state, actions));
    }
});

document.querySelector('.main-holder').appendChild(el);

page('/', () => {
    actions.setPage('main');
    yo.update(el, main(store.get(), actions));
});

page('/editor', () => {
    actions.setPage('editor');
    yo.update(el, editor(store.get(), actions));
    let containerArray = [document.querySelector('.draggable-images')].concat(Array.from(document.querySelectorAll('.droppable-rows td')));
    let drake = dragula(containerArray, {
        accepts: () => true,
        revertOnSpill: true,
        copy: true
    }).on('drop', (el, target) => {
        drake.cancel();
        const source = el.querySelector('img').getAttribute('src');
        const targ = target.parentNode.dataset.id;
        actions.updateSource({ id: targ, propName: 'image', propValue: source });
    });
});

page('*', () => {
    yo.update(el, notfound(store.get(), actions));
});

page();
setTimeout(() => {
    // page('/editor');
}, 200);
actions.startModule();
