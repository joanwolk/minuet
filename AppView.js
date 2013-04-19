/**
 * The AppView renders the Minuet app.
 * It has references to the new track form and its input,
 * as well as to the queue view.
 */
function AppView() {
  this.form = document.querySelector('form');
  this.input = document.querySelector('#newTrack');
  this.queueView = new QueueView(player.queue);
  this.playButton = document.querySelector('.icon-play');
  this.pauseButton = document.querySelector('.icon-pause');
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

  // toggle display of play and pause buttons
  var me = this;

  this.playButton.addEventListener('click', function() {
    // do not show pause button if there is nothing in queue
    if (me.queueView.list.length === 0) {
      return;
    }

    if (!me.queueView.queue.sound) {
      return alert("List ended");
    }

    player.startPlayback();

    this.style.display = 'none';
    me.pauseButton.style.display = 'inline-block';
  });

  this.pauseButton.addEventListener('click', function() {
    this.style.display = 'none';
    me.playButton.style.display = 'inline-block';
  });

};


/**
 * Instantiate the app
 */
var minuet = new AppView();
minuet.render();
