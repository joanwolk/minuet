function TrackView(track) {
  this.id = track.id;
  this.title = track.title;
  this.el = document.createElement('div');
  this.el.setAttribute('class', 'listRow');
  this.el.id = track.id;
};

TrackView.prototype = {};

TrackView.prototype.render = function() {
  var up = '<div class="up">up</div>';
  var down = '<div class="down">down</div>';
  var controls = '<div class="controls cell">' + up + down + '</div>';
  var title = '<div class="title cell">' + this.title + '</div>';
  var remove = '<div class="remove cell">remove</div>';

  this.el.innerHTML = controls + title + remove;

  return this;

  // return controls + title + remove;
};
