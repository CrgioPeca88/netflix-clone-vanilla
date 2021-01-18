'use strict';

function MoviesService() {
  this.movies = [{
    imgSrc: './assets/images/covers/matrix.png',
    imgAlt: 'Popular movie matrix',
    imgClass: 'img-cover'
  }, {
    imgSrc: './assets/images/covers/bob.png',
    imgAlt: 'Popular movie bob',
    imgClass: 'img-cover'
  }, {
    imgSrc: './assets/images/covers/spider-man.png',
    imgAlt: 'Popular movie spider',
    imgClass: 'img-cover'
  }, {
    imgSrc: './assets/images/covers/dragon.png',
    imgAlt: 'Popular movie dragon',
    imgClass: 'img-cover'
  }, {
    imgSrc: './assets/images/covers/john.png',
    imgAlt: 'Popular movie john',
    imgClass: 'img-cover'
  }, {
    imgSrc: './assets/images/covers/santa.png',
    imgAlt: 'Popular movie santa',
    imgClass: 'img-cover'
  }];
}

MoviesService.prototype.getPopularMovies = function() {
  return this.movies; 
}

export default MoviesService;
