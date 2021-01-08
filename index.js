'use strict';

const video = document.getElementById('featured-video');
const ppButton = document.getElementById('play-button');

ppButton.onclick = () => {
  if (video.paused) {
    video.play();
    video.loop = true; 
  } else { video.pause()  }
}
