import yo from 'yo-yo';
import singleRow from 'components/editor-row';

module.exports = function main(state, actions) {
    return yo`<div class="col-xs-12 strech-vert">
            <h2>Editor</h2>
            <div class="row middle-xs strech-vert">
                <ul class="col-xs-3 draggable-images images-list">
                    ${state.images.map(singleImage => yo`<li class="image-preview" data-type="image" data-value="${singleImage}">
                        <img src="/media/images/${singleImage}"/>
                    </li>`)}
                </ul>
                <ul class="col-xs-3 sounds-list draggable-images">
                    ${state.sounds.map(singleSound => yo`<li class="sound-preivew" data-type="sound" data-value="${singleSound}">
                        ${singleSound}
                        </li>`)}
                </ul>
                <div class="col-xs-6">
                    <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Название</td>
                            <td>Иконка</td>
                            <td>Звук</td>
                        </tr>
                    </thead>
                    <tbody class="droppable-rows">
                        ${state.rows.map(singleRow)}
                    </tbody>
                    </table>
                </div>
            </div>
            <div class="row middle-xs">
                <div class="col-xs-6">
                    <button onclick=${actions.addRow}>Добавить строку</button>
                </div>
            </div>
            <div class="row middle-xs">
                <div class="col-xs-6">
                    <code>
                        <pre>
                            ${JSON.stringify(state.rows, null, 4)}
                        </pre>
                    </code>
                </div>
            </div>
        </div>`;
};
