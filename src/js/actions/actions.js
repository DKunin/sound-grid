import state from 'store/store';
import request from 'superagent';

module.exports = {
    startModule() {
        request
            .get('/rows')
            .end((err, data) => {
                state.set('rows', JSON.parse(data.text));
            });

        request
            .get('/resource/sounds')
            .end((err, data) => {
                state.set('sounds', data.body);
            });

        request
            .get('/resource/images')
            .end((err, data) => {
                state.set('images', data.body);
            });
    },
    updateSource(updateObject) {
        request
            .put('/rows')
            .send(updateObject)
            .end((err, data) => {
                state.set('rows', data.body);
            });
    },
    addRow(updateObject) {
        request
            .post('/rows')
            .end((err, data) => {
                state.set('rows', data.body);
            });
    },
    setPage(page) {
        state.set('page', page);
    },
    toggleSound(status) {
        state.set('playing', status);
    },
    setActive(id) {
        console.log('active', id);
        state.set('active', id);
    },
    updateState(object) {
        Object.keys(object).forEach(singleKey => {
            state.set(singleKey, object[singleKey]);
        });
    }
};
