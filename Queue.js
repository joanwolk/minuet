function Queue() {
  this.list = JSON.parse(localStorage.listTracks);
};

Queue.prototype = {};

Queue.prototype.add = function(track) {
  this.list.push({ id: track.id, title: track.title });

  Queue.save();
};

Queue.prototype.save = function() {
  localStorage.listTracks = JSON.stringify(this.list);
};
