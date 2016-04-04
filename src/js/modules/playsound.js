module.exports = function playSound(event) {
    var audio = document.getElementById('audioplayer');
    audio.pause();
    if (event.target.dataset.name === 'stop' || !event.target.dataset.sound) {
        return;
    }

    audio.src = '/media/sounds/' + event.target.dataset.sound;
    if (audio.readyState > 0) {
        audio.currentTime = 5;
    }
    audio.play();
};
