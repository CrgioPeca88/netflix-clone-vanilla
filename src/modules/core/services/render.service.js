'use strict';

function RenderService() { }

RenderService.prototype.renderMoviesCover = function(containerElement, movies) {
  let moviesHtml = '';
  movies.forEach((movie) => {
    moviesHtml = moviesHtml + `<a href="/src/modules/detail/index.html?movie=${movie.id}"><img src="${movie.imgSrc}" alt="${movie.imgAlt}" class="${movie.imgClass}"></a>`;
  });
  containerElement.innerHTML = moviesHtml;
}

export default RenderService;
