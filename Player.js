/**
 * The Player model handles playing the queue.
 * It instantiates the queue, and play/pause interactions go through it.
 */
function Player(tracks) {
  // Instantiate the queue
  this.queue = new Queue();
};

Player.prototype = {};

/**
 * Start playback, using the queue's function
 */
Player.prototype.startPlayback = function() {
  this.queue.startPlayback();;
};

/**
 * Pause playback, using the queue's function
 */
Player.prototype.pausePlayback = function() {
  this.queue.pause();
};


/**
 * Instantiate the player.
 * If tracks already exist in the queue, start streaming.
 */
var player = new Player(localStorage.listTracks);
    
