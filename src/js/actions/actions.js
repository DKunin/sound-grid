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
    addNumber() {
        let prevState = state.get().numbers;
        state.get().set('numbers', prevState.concat([Math.random()]));
    },
    addCounter() {
        let prevState = state.get().counter;
        state.get().set('counter', prevState + 1);
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
    tick(number) {
        console.log('tick', number);
    },
    selectAction(number) {
        state.get().set('selected', number);
    }
};
