import yo from 'yo-yo';
import button from 'components/single-button';
import chunk from 'modules/chunk';

module.exports = function main(state, actions) {
    return yo`<div class="col-xs-12 main-grid ${state.playing ? 'playing' : ''}">
              ${chunk(state.rows || [], 3)
                .map(singleRow => yo`<div class="row middle-xs half-screen-height">${singleRow.map(singleButton => button(singleButton, state, actions))}</div>`)}
        </div>`;
};
