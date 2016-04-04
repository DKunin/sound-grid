import yo from 'yo-yo';
import playSound from 'modules/playsound';

module.exports = function singleButton(item, actions) {
    return yo`<button class="col-xs-4 music-button" data-name=${item.name} onclick=${playSound} ontouchstart=${playSound}>
      <img class="music-button-bg" src="${item.image}"/>
      ${item.name}</button>`;
};
