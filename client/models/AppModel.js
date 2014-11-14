/*global Backbone:true, Songs:true, SongModel:true, SongQueue:true */

var AppModel = Backbone.Model.extend({

  initialize: function(){
    this.set('library', new Songs(window.songData)); // collection of all songs available
    this.set('currentSong', new SongModel()); // empty
    this.set('songQueue', new SongQueue()); // empty

    // Listen to library events
    this.get('library')
      .on('enqueue', this.enqueue, this)
      .on('play', this.play, this);
  },

  play: function (song) {
    this.set('currentSong', song);
  },

  enqueue: function (song) {
    this.get('songQueue').add(song);
  }

});

