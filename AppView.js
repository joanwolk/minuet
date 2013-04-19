/**
 * The AppView renders the Minuet app.
 * It has references to the player, the queue, and the queue view,
 * and it sets up event listeners
 */
function AppView() {
  // Instantiate Player, which creates Queue
  // If tracks already exist in the queue, start streaming.
  this.player = new Player(localStorage.listTracks);
  this.queue = this.player.queue;
  // Instantiate QueueView, which calls TrackView as needed
  this.queueView = new QueueView(this.player.queue);
  // Select elements to bind listeners to
  this.form = document.querySelector('form');
  this.input = document.querySelector('#newTrack');
  this.playButton = document.querySelector('.icon-play');
  this.pauseButton = document.querySelector('.icon-pause');
  this.addToQueue = document.querySelector('form a.button');
  this.clearQueue = document.querySelector('.clear.button');
};

AppView.prototype = {};

/**
 * Create a track from the user-facing SoundCloud URL
 * Only the id and the title are stored persistently in localStorage.
 */
AppView.loadTrack = function(url, callback) {
  if (!url.match(/^https*\:\/\//) && url.match(/^https*\:\/\//i)) {
    return alert("URLs are invalid unless 'http' or 'https' are all lowercase!")
  }

  SC.get("/resolve?url="+url, function(response, error) {
    if (error) {
      return alert(error.message + " - There may be an error with the URL entered. Please use a valid URL for a single public SoundCloud track.");
    }

    var track = {};
    track.id = response.id;
    track.title = response.title;

    callback(track);
  });
}

/** 
 * Render the application
 */
AppView.prototype.render = function() {
  // build table of queue items
  this.queueView.render();

  // set reference var for use in event listeners
  var me = this;

  /**
   * Listener on the play button
   * Start playback and display pause button
   */
  this.playButton.addEventListener('click', function() {
    // return if there is nothing in queue
    // alert if the playlist finished
    if (me.queue.list.length === 0) {
      return;
    } else if (!me.queue.sound) {
      return alert("List ended");
    }

    // start playback
    me.player.startPlayback();

    // toggle button visibility
    this.style.display = 'none';
    me.pauseButton.style.display = 'inline-block';
  });

  /**
   * Listener on the pause button
   */
  this.pauseButton.addEventListener('click', function() {
    // start playback
    me.player.pausePlayback();

    // toggle button visibility
    this.style.display = 'none';
    me.playButton.style.display = 'inline-block';
  });

  /**
   * Listener on form submission
   * Resolves the track and adds it to the queue,
   * and clears the input field
   */
  this.form.onsubmit = function() {
    event.preventDefault();
    AppView.loadTrack(me.input.value, function(response){
      me.queue.add(response);
    });
    me.input.value = '';
  };

  /**
   * Listener on the add to queue button
   * Calls the form submission listener 
   */
  this.addToQueue.addEventListener('click', function() {
    me.form.onsubmit();
  });

  /**
   * Listener on the clear queue button
   * Removes all items from the queue
   */
  this.clearQueue.addEventListener('click', function() {
    me.queue.clear();
  });
};


/**
 * Instantiate the app
 */
var minuet = new AppView();
minuet.render();
