import state from 'store/store';
import request from 'superagent';

module.exports = {
    startModule() {
        request
            .get('/rows')
            .end((err, data) => {
                state.get().set('rows', JSON.parse(data.text));
            });

        request
            .get('/resource/sounds')
            .end((err, data) => {
                state.get().set('sounds', data.body);
            });

        request
            .get('/resource/images')
            .end((err, data) => {
                state.get().set('images', data.body);
            });
    },
    updateSource(updateObject) {
        request
            .put('/rows')
            .send(updateObject)
            .end((err, data) => {
                state.get().set('rows', data.body);
            });
    },
    addRow(updateObject) {
        request
            .post('/rows')
            .end((err, data) => {
                state.get().set('rows', data.body);
            });
    },
    setPage(page) {
        state.get().set('page', page);
    },
    toggleSound(status) {
        state.get().set('playing', status);
    },
    setActive(id) {
        state.get().set('active', id);
    }
};
