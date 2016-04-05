import yo from 'yo-yo';
import playSound from 'modules/playsound';

module.exports = function singleButton(item, state, actions) {
    return yo`<button
      class="${item.id == state.active ? 'shine' : ''} button-${item.id} col-xs-4 music-button ${item.image === '-' ? 'show-label' : ''}"
      data-name=${item.name}
      data-sound=${item.sound}
      data-button="button-${item.id}"
      data-id=${item.id}
      onclick=${playSound.bind(this, state, actions)}
      ontouchstart=${playSound.bind(this, state, actions)}
      style="background-image: url('/media/images/${item.image}'); ">
        <label>${item.name}</label>
      </button>`;
};
