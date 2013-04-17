/** 
 * The QueueView renders the DOM for the queue.
 * It re-renders itself when there are changes to the Queue model.
 * The basic element is a div with the id "queue".
 */
function QueueView(queue) {
  this.table = document.querySelector('#queue');
  this.queue = queue;
  this.list = queue.list;

  /**
   * Render the queue automatically when it changes
   */
  var me = this;
  this.queue.onChange(function() {
    me.render();
  });
}

QueueView.prototype = {};

/** 
 * Render the queue, which is composed of many tracks
 */
QueueView.prototype.render = function() {
  var i = 0;

  this.table.innerHTML = '';
  this.list = this.queue.list;

  if (this.list.length === 0) {
    this.table;
  } else {
    for (i=0; i < this.list.length; i++) {
      var trackView = new TrackView(this.list[i]).render(i, this.queue);

      this.table.appendChild(trackView.el);
    }
  }
};
