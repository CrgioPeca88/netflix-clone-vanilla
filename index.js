'use strict';

import VideoPlayer from './src/modules/shared/video-player.js';
import MoviesService from './src/modules/core/services/apis/movies.service.js';
import RenderService from './src/modules/core/services/render.service.js';

const video = document.getElementById('featured-video');
const ppButton = document.getElementById('play-button');
const videoPlayer = new VideoPlayer({
  video: video
});
const moviesService = new MoviesService();
const renderService = new RenderService();

function getInitialData() {
  const popularCoversContainer = document.getElementById('popular-covers-container');
  const japaneseCoversContainer = document.getElementById('japanese-covers-container');
  const popularMovies = moviesService.getPopularMovies();
  const japaneseSeries = moviesService.getJapaneseSeries();
  renderService.renderMoviesCover(popularCoversContainer, popularMovies);
  renderService.renderMoviesCover(japaneseCoversContainer, japaneseSeries);
}

ppButton.onclick = () => {
  videoPlayer.playPause(ppButton);
}

getInitialData();
