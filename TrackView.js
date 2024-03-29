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
TrackView.prototype.render = function(index, queue) {
  // index is the index position of the track in the queue
  // queue is the queue the track belongs to

  var up = '<div class="up icon-caret-up"></div>';
  var down = '<div class="down icon-caret-down"></div>';
  var controls = '<div class="controls cell">' + up + down + '</div>';
  var title = '<div class="title cell">' + this.title + '</div>';
  var remove = '<div class="remove cell icon-trash"></div>';

  this.el.innerHTML = controls + title + remove;

  // bind onclick action to remove track from the queue
  var remover = this.el.querySelector(".remove");
  remover.addEventListener('click', function() {
    queue.remove(index);
  });

  // bind onclick action to move track up in the queue
  var moveUp = this.el.querySelector(".up");
  moveUp.addEventListener('click', function() {
    queue.swap(index, -1);
  });

  // bind onclick action to move track down in the queue
  var moveDown = this.el.querySelector(".down");
  moveDown.addEventListener('click', function() {
    queue.swap(index, 1);
  });

  return this;
};
