var audio = document.getElementById('audioplayer');

function controlSound(a, name) {
    a.volume = 1;
    a.pause();
    a.src = '/media/sounds/' + name;
    a.play();
}

module.exports = function playSound(state, actions, event) {
    if (!audio.paused) {
        return false;
    } else {
        if (event.target.dataset.name === 'stop' || !event.target.dataset.sound) {
            return;
        }
        actions.setActive(event.target.dataset.id);
        // if ('speechSynthesis' in window) {
        //     var msg = new SpeechSynthesisUtterance();
        //     msg.text = event.target.dataset.name;
        //     msg.volume = 1; // 0 to 1
        //     msg.rate = 1; // 0.1 to 10
        //     msg.pitch = 2; // 0 to 2
        //     msg.lang = 'ru-RU';
        //     speechSynthesis.speak(msg);

        //     msg.onend = function() {
        //         controlSound(audio, event.target.dataset.sound);
        //     };
        // } else {
        controlSound(audio, event.target.dataset.sound);
        //}
    }
};
