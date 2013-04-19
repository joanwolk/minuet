/**
 * The Track model handles the key information about a sound.
 * Only the id and the title are stored persistently in localStorage.
 * Other elements of the track are fetched at the point of streaming,
 * reducing the data storage needs and allowing more songs to be queued.
 */
function Track() {
  this.id = null;
  this.metadata = null;
  this.title = null;
  this.username = null;
  this.userAvatarUrl = null;
  this.userPermalinkUrl = null;
  this.permalinkUrl = null;
  this.artworkUrl = null;
  this.duration = null;
  // store only id, title, (duration?) in localStorage
};

Track.prototype = {};

/**
 * Get the metadata of the track
 */
Track.prototype.loadMetadata = function() {
  var me = this;

  SC.get("/tracks/"+this.id, function(response, error) {
    me.metadata = response;
    me.title = me.metadata.title;
  });
};

/**
 * Create a track from the user-facing SoundCloud URL
 */
Track.fromUrl = function(url, callback) {
  if (!url.match(/^https*\:\/\//) && url.match(/^https*\:\/\//i)) {
    return alert("URLs are invalid unless 'http' or 'https' are all lowercase!")
  }

  SC.get("/resolve?url="+url, function(response, error) {
    if (error) {
      return alert(error.message + " - There may be an error with the URL entered. Please use a valid URL for a single public SoundCloud track.");
    }
    var track = new Track();
    track.id = response.id;
    track.title = response.title;
    // track.duration = response.duration;

    callback(track);
  });
}
