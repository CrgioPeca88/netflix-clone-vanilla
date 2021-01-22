'use strict';

function MoviesService() {
  this.movies = [{
    id: 1,
    imgSrc: 'assets/images/covers/matrix.png',
    imgAlt: 'Popular movie matrix',
    imgClass: 'img-cover'
  }, {
    id: 2,
    imgSrc: 'assets/images/covers/bob.png',
    imgAlt: 'Popular movie bob',
    imgClass: 'img-cover'
  }, {
    id: 3,
    imgSrc: 'assets/images/covers/spider-man.png',
    imgAlt: 'Popular movie spider',
    imgClass: 'img-cover'
  }, {
    id: 4,
    imgSrc: 'assets/images/covers/dragon.png',
    imgAlt: 'Popular movie dragon',
    imgClass: 'img-cover'
  }, {
    id: 5,
    imgSrc: 'assets/images/covers/john.png',
    imgAlt: 'Popular movie john',
    imgClass: 'img-cover'
  }, {
    id: 6,
    imgSrc: 'assets/images/covers/santa.png',
    imgAlt: 'Popular movie santa',
    imgClass: 'img-cover'
  }];
}

MoviesService.prototype.getPopularMovies = function() {
  return this.movies;
}

MoviesService.prototype.getSimilarMovies = function() {
  return [...this.movies].reverse();
}

MoviesService.prototype.getJapaneseSeries = function() {
  return [...this.movies].reverse();
}

MoviesService.prototype.getEEUUSeries = function() {
  return this.movies;
}

export default MoviesService;
