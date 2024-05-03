//your JS code here. If required.
function playSound(soundName) {
  var audio = new Audio('sounds/' + soundName + '.mp3');
  audio.play();
}

// Function to stop all sounds
function stopAllSounds() {
  var sounds = document.querySelectorAll('audio');
  sounds.forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
  });
}