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
  // store only id, title, and duration in localStorage ?
};

Track.prototype = {};

Track.prototype.loadMetadata = function() {
  var me = this;

  SC.get("/tracks/"+this.id, function(response, error) {
    me.metadata = response;
    me.title = me.metadata.title;
  });
};

Track.fromUrl = function(url, callback) {
  if (!url.match(/^https*\:\/\//)) {
    url = "http://"+url;
  }

  SC.get("/resolve?url="+url, function(response, error) {
    var track = new Track();
    track.id = response.id;
    track.title = response.title;
    // track.duration = response.duration;

    callback(track);
  });
}
