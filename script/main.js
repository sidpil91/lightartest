'use strict';

var button = document.querySelector('#button1');
var video = document.querySelector('#pixar-test');

button.onclick = function() {
  if (video.paused) {
    video.play();
    button.textContent = 'Pause';
  } else {
    video.pause();
    button.textContent = 'Play';
  }
};

video.onplay = function() {
  button.textContent = 'Pause';
};

video.onloadedmetadata = function() {
  var fileName = this.currentSrc.replace(/^.*[\\/]/, '');
  //document.querySelector('#videoSrc').innerHTML = 'Playing video: ' + fileName;
};