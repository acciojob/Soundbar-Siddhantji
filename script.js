//your JS code here. If required.
const buttons = document.getElementById('buttons');
const sounds = {};

buttons.addEventListener('click', function(e) {
  const sound = e.target.dataset.sound;
  if (sound) {
    if (sounds[sound]) {
      sounds[sound].play();
    } else {
      const audio = new Audio(`sounds/${sound}.mp3`);
      sounds[sound] = audio;
      audio.play();
    }
  } else if (e.target.classList.contains('stop')) {
    for (const sound in sounds) {
      sounds[sound].pause();
      sounds[sound].currentTime = 0;
    }
  }
});
