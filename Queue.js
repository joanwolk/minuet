function Queue() {
  this.list = JSON.parse(localStorage.listTracks);
};

Queue.prototype = {};

Queue.prototype.add = function(track) {
  this.list.push({ id: track.id, title: track.title });

  this.save();
};

Queue.prototype.save = function() {
  localStorage.listTracks = JSON.stringify(this.list);
  this.callback();
};

// Queue.prototype.swap = function(track1, track2) {

// };

Queue.prototype.onChange = function(callback) {
  this.callback = callback;
};
