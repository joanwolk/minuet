/**
 * The AppView renders the Minuet app.
 * It has references to the new track form and its input,
 * as well as to the queue view.
 */
function AppView() {
  this.form = document.querySelector('form');
  this.input = document.querySelector('#newTrack');
  this.queueView = new QueueView(player.queue);
};

AppView.prototype = {};

// instantiate player
// instantiate current track

/** 
 * Render the application
 */
AppView.prototype.render = function() {
  // build table of queue items
  this.queueView.render();
};


/**
 * Instantiate the app
 */
var minuet = new AppView();
minuet.render();
