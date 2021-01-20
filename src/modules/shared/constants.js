'use strict';

function Constants() {
  //this.localEnvironment = 'http://localhost:8080'
  this.localEnvironment = 'https://crgiopeca88.github.io/netflix-clone-vanilla'

  const getLocalEnvironment = () => { return this.localEnvironment; };

  return {
    getLocalEnvironment: getLocalEnvironment
  }
}

export default new Constants();
