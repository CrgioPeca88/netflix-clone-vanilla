'use strict';

import VideoPlayer from './src/modules/shared/video-player.js';

(function(){
  const video = document.getElementById('featured-video');
  const ppButton = document.getElementById('play-button');
  const videoPlayer = new VideoPlayer({
    video: video
  });

  ppButton.onclick = () => {
    videoPlayer.playPause(ppButton);
  }
})()
