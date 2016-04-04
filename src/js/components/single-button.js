import yo from 'yo-yo';
import playSound from 'modules/playsound';

module.exports = function singleButton(item, actions, state) {
    return yo`<button
      class="${item.id == state.active ? 'shine' : ''} button-${item.id} col-xs-4 music-button ${item.image === '-' ? 'show-label' : ''}"
      data-name=${item.name}
      data-sound=${item.sound}
      data-button="button-${item.id}"
      data-id=${item.id}
      onclick=${playSound.bind(this, state)}
      ontouchstart=${playSound.bind(this, state)}
      style="background-image: url('/media/images/${item.image}'); ">
        <label>${item.name}</label>
      </button>`;
};
