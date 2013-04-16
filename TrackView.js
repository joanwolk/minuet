/**
 * TrackView renders the DOM for a single track.
 * The basic element is a div with class='listRow' and the track id as div id.
 */
function TrackView(track) {
  this.id = track.id;
  this.title = track.title;
  this.el = document.createElement('div');
  this.el.setAttribute('class', 'listRow');
  this.el.id = track.id;
};

TrackView.prototype = {};

/**
 * Rendering the view returns the view object
 * rather than the HTML, allowing greater flexibility,
 * such as passing the track view to the queue view.
 */
TrackView.prototype.render = function() {
  var up = '<div class="up">up</div>';
  var down = '<div class="down">down</div>';
  var controls = '<div class="controls cell">' + up + down + '</div>';
  var title = '<div class="title cell">' + this.title + '</div>';
  var remove = '<div class="remove cell">remove</div>';

  this.el.innerHTML = controls + title + remove;

  return this;
};
