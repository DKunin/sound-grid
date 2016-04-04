import yo from 'yo-yo';

module.exports = function dropDownFunct(fatherState, fatherActions, className) {
    var dropDownState = { opened: false };

    var updateComponentOnly = function(state, actions) {
        dropDownState.opened = !dropDownState.opened;
        yo.update(element, dropDown(state, actions));
    };

    var closeComponent = function(state, actions, cb) {
        dropDownState.opened = false;
        yo.update(element, dropDown(state, actions));
        if (typeof cb === 'function') {
            cb();
        }
    };

    function dropDown(state, actions) {
        return yo`<div class=${'dropdown ' + (dropDownState.opened ? 'open' : '')}>
              <button class="btn btn-default" type="button" onclick=${updateComponentOnly.bind(this, state, actions)}>
                Выбор: ${state.selected}
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#" onclick=${closeComponent.bind(null, state, actions, actions.selectAction.bind(null, 1))}>Action</a></li>
                <li><a href="#" onclick=${closeComponent.bind(null, state, actions, actions.selectAction.bind(null, 2))}>Another action</a></li>
                <li><a href="#" onclick=${closeComponent.bind(null, state, actions, actions.selectAction.bind(null, 3))}>Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>`;
    }
    var element = dropDown(fatherState, fatherActions);

    return element;
};
