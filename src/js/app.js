'use strict';

import yo from 'yo-yo';
import store from 'store/store';
import actions from 'actions/actions';
import main from 'pages/main';
import editor from 'pages/editor';
import notfound from 'pages/notfound';
import page from 'page';
import dragula from 'dragula';

var el = main(store.get(), actions);

store.on('update', function(newState) {
    if (newState.page === 'main') {
        yo.update(el, main(newState, actions));
    }
    if (newState.page === 'editor') {
        yo.update(el, editor(newState, actions));
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
    let containerArray = Array.from(document.querySelectorAll('.draggable-images')).concat(Array.from(document.querySelectorAll('.droppable-rows td')));
    let drake = dragula(containerArray, {
        accepts: () => true,
        revertOnSpill: true,
        copy: true
    }).on('drop', (el, target) => {
        drake.cancel();
        actions.updateSource({ id: target.parentNode.dataset.id, propName: el.dataset.type, propValue: el.dataset.value });
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

var audio = document.getElementById('audioplayer');
audio.addEventListener('ended', () => {
    actions.setActive(false);
});

