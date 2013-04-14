function QueueView(queue) {
  this.table = document.querySelector('#queue');
  this.queue = queue;
  this.list = queue.list;

  var me = this;
  this.queue.onChange(function() {
    me.render();
  });
}

QueueView.prototype = {};

QueueView.prototype.render = function() {
  var i = 0;

  this.table.innerHTML = '';

  for (i=0; i < this.list.length; i++) {
    var trackView = new TrackView(this.list[i]).render();

    this.table.appendChild(trackView.el);
  }
};
