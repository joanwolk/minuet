describe("Minuet", function() {

  it("should use localStorage", function() {
  });

  it("should not require a user", function() {
  });

  it("can call the SoundCloud API", function() {
    // var url = 'http://api.soundcloud.com/tracks/35500268.json?client_id=7181d5e5013bf8a31bd66e7cbbaa05cc';
  });

  describe("a track", function() {
    it("should have an identifier", function() {
    });

    it("should have a title", function() {
    });

    describe("the current track", function() {
      it("should play automatically", function() {
      });

      it("should display its title", function() {
      });

      it("can be paused", function() {
      });

      it("can be resumed", function() {
      });

      it("can be skipped", function() {
      });
    });

    describe("upcoming tracks", function() {
      it("can be moved down in the queue", function() {
      });

      it("can be moved up in the queue", function() {
      });

      it("can be deleted from the queue", function() {
      });

      describe("the last track", function() {
        it("cannot be moved down in the queue", function() {
        });
      });

      describe("the first track", function() {
        it("cannot be moved up in the queue", function() {
        });
      });
    });

    describe("completed tracks", function() {
      it("cannot be moved up in the queue", function() {
      });

      it("cannot be moved down in the queue", function() {
      });

      describe("when more than 5 tracks have been completed", function() {
        it("deletes the oldest completed track", function() {
        });
      });
    });
  });

  describe("the queue", function() {
    it("can add a SoundCloud track to the end of the queue", function() {
    });

    describe("when there are completed tracks in the queue", function() {
    });
  });

});
