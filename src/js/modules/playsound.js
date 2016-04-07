var audio = document.getElementById('audioplayer');

module.exports = function playSound(state, actions, event) {
    if (!audio.paused) {
        return false;
    } else {
        if (event.target.dataset.name === 'stop' || !event.target.dataset.sound) {
            return;
        }
        actions.setActive(event.target.dataset.id);
        audio.pause();
        audio.src = '/media/sounds/' + event.target.dataset.sound;
        audio.play();
    }
};
