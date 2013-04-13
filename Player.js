function Player(tracks) {
  this.json_tracks = JSON.parse(tracks);
  this.currentTrack = 0;
  this.sound = null;
};

Player.prototype = {};

Player.prototype.playNextSound = function() {
  var next = this.currentTrack + 1;

  if(this.json_tracks['ids'][next]) {
    this.currentTrack = next;
    this.stream();
    // TODO: this order reliance brittle!
    this.startPlayback();
  };

};

Player.prototype.stream = function() {
  var me = this;
  var track = this.json_tracks['ids'][this.currentTrack];

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

var player = new Player(localStorage.listIds);
player.stream();
    
