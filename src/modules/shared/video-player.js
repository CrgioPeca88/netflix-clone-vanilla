'use strict';

function VideoPlayer(config) {
  this.video = config.video;
}

VideoPlayer.prototype.playPause = function(button) {
  if (this.video.paused) {
    this.video.play();
    this.video.loop = true;
    button.firstChild.innerText = 'Pausar';
    button.className = 'button icon-pause';
  } else {
    this.video.pause();
    button.firstChild.innerText = 'Reproducir';
    button.className = 'button icon-play';
  }
}

export default VideoPlayer;
