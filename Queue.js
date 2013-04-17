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
 * This runs the callback to re-render the view
 * and also streams if any tracks are present.
 */
Queue.prototype.save = function() {
  localStorage.listTracks = JSON.stringify(this.list);
  this.callback();
  if (this.list.length > 0) {
    this.stream();
  }
};

/** 
 * Switch the track position of two tracks
 * The first argument is the index of a track
 * The second argument is the offset of the track to switch with
 * This triggers the queue to be saved.
 */
Queue.prototype.swap = function(trackIndex, offset) {
  // return null if trying to move the first track earlier
  if (trackIndex === 0 && offset === -1) {
    return null;
  }

  // return null if trying to move the last track later
  if ((trackIndex === this.list.length - 1) && offset === 1) {
    return null;
  }

  // return null if track index is invalid
  // TODO: this should be a try/catch
  if (trackIndex >= this.list.length || trackIndex < 0) {
    return null;
  }

  var track1 = this.list[trackIndex];
  var track2 = this.list[trackIndex + offset];

  this.list[trackIndex] = track2;
  this.list[trackIndex + offset] = track1;

  this.save();
};

/** 
 * Remove the track from the queue
 * This triggers the queue to be saved.
 */
Queue.prototype.remove = function(track) {
  // splice out 1 item from the list array at index track
  this.list.splice(track, 1);

  this.save();
};

/** 
 * Clear all tracks from the queue
 * This triggers the queue to be saved.
 */
Queue.prototype.clear = function() {
  this.list = [];

  this.save();
};

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


