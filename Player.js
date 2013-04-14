function Player(tracks) {
  this.currentTrack = 0;
  this.sound = null;
  this.queue = new Queue();
  this.trackList = this.queue.list;
};

Player.prototype = {};

Player.prototype.playNextSound = function() {
  var next = this.currentTrack + 1;

  if (this.trackList[next]) {
    this.currentTrack = next;
    this.stream();
    // TODO: this order reliance brittle!
    this.startPlayback();
  }

};

Player.prototype.stream = function() {
  var me = this;
  var track = this.trackList[this.currentTrack]['id'];

  SC.stream("/tracks/"+track, function(sound) {
    me.sound = sound;
  });
};

Player.prototype.startPlayback = function() {
  this.sound.play({multiShot: false, onfinish: this.playNextSound.bind(this)});
};

Player.prototype.pausePlayback = function() {
  this.sound.pause();
};

var player = new Player(localStorage.listTracks);
player.stream();
    
