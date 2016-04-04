module.exports = function playSound(state, event) {
    if (state.playing) {
        return false;
    } else {
        var audio = document.getElementById('audioplayer');
        audio.pause();
        if (event.target.dataset.name === 'stop' || !event.target.dataset.sound) {
            return;
        }
        audio.src = '/media/sounds/' + event.target.dataset.sound;
        audio.dataset.button = event.target.dataset.button;
        audio.dataset.id = event.target.dataset.id;
        audio.play();
    }
};
