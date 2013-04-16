/**
 * The Queue model holds the list of tracks to be listened to.
 * It handles updating the contents of the queue.
 */
function Queue() {
  if (localStorage.listTracks) {
    this.list = JSON.parse(localStorage.listTracks);
  } else {
    this.list = [];
  }

  this.currentTrack = 0;
  this.sound = null;

  if (this.list.length) {
    this.stream();
  }
};

Queue.prototype = {};

/** 
 * Add a track to the queue.
 * This triggers the queue to be saved.
 */
Queue.prototype.add = function(track) {
  this.list.push({ id: track.id, title: track.title });

  this.save();
};

/** 
 * Save the queue in its current state
 */
Queue.prototype.save = function() {
  localStorage.listTracks = JSON.stringify(this.list);
  this.callback();
  this.stream();
};

/** 
 * Switch the track position of two tracks
 */
// Queue.prototype.swap = function(track1, track2) {

// };


/**
 * Advance to the next track and play it
 */
Queue.prototype.playNextSound = function() {
  var current = this.currentTrack;
  var next = this.currentTrack + 1;

  if (this.list[next]) {
    this.currentTrack = next;
    this.stream();
    // TODO: this order reliance is brittle!
    this.startPlayback();
  }

};

/**
 * Stream the current track from SoundCloud
 */
Queue.prototype.stream = function() {
  var me = this;
  var track = this.list[this.currentTrack]['id'];

  SC.stream("/tracks/"+track, function(sound) {
    me.sound = sound;
  });
};

/**
 * Start playback
 */
Queue.prototype.startPlayback = function() {
  this.sound.play({multiShot: false, onfinish: this.playNextSound.bind(this)});
};

/**
 * Pause playback
 */
Queue.prototype.pausePlayback = function() {
  this.sound.pause();
};

/** 
 * This method sets a callback to be run when the queue changes.
 * It notifies the QueueView when this occurs.
 * NOTE: This is potentially brittle if multiple functions use it.
 * TODO: Allow multiple callbacks without overwriting.
 */
Queue.prototype.onChange = function(callback) {
  this.callback = callback;
};


