module.exports = function playSound(event) {
    var audio = document.getElementById('audioplayer');
    audio.pause();
    if (event.target.dataset.name === 'stop' || !event.target.dataset.name) {
        return;
    }
    console.log(event.target, audio);
    audio.src = '/media/' + event.target.dataset.name + '.mp3';
    if (audio.readyState > 0) {
        audio.currentTime = 5;
    }
    audio.play();
};
