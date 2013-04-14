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


// build table of queue items on queue list update
AppView.prototype.updateQueueView = function() {
};

var minuet = new AppView();
minuet.render();
