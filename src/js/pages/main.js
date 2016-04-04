import yo from 'yo-yo';
import button from 'components/single-button';

function range(n) {
    return Array.apply(null, Array(n)).map((x, i) => i);
};

function chunk(array, n) {
    return range(Math.ceil(array.length / n)).map((x, i) => array.slice(i * n, i * n + n));
}

module.exports = function main(state, actions) {
    return yo`<div class="col-xs-12 main-grid">
        <div onclick=${actions.setPage.bind(this, 'editor')}>editor</div>
              ${chunk(state.rows || [], 3)
                .map(singleRow => yo`<div class="row middle-xs">${singleRow.map(singleButton => button(singleButton, actions))}</div>`)}
        </div>`;
};
