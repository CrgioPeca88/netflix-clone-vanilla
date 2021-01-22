'use strict';

import MoviesService from '../../../src/modules/core/services/apis/movies.service.js';
import RenderService from '../../../src/modules/core/services/render.service.js';
import Constants from '../../../src/modules/shared/constants.js';

const moviesService = new MoviesService();
const renderService = new RenderService(Constants);

function getInitialData() {
  const similarCoversContainer = document.getElementById('similar-covers-container');
  const similarMoviesApi = moviesService.getSimilarMovies();
  renderService.renderMoviesCover(similarCoversContainer, similarMoviesApi, '../../../');
}

getInitialData();
