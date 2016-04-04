import yo from 'yo-yo';
import playSound from 'modules/playsound';

module.exports = function singleButton(item, actions) {
    return yo`<button class="button-${item.id} col-xs-4 music-button ${item.image === '-' ? 'show-label' : ''}" data-name=${item.name} data-sound=${item.sound} data-button="button-${item.id}" onclick=${playSound} ontouchstart=${playSound} style="background-image: url('/media/images/${item.image}');">
      <label>${item.name}</label></button>`;
};
