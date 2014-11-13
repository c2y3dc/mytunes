// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this
      .on('add', this.enqueueSong, this)
      .on('ended', this.ended, this)
      .on('dequeue', this.dequeue, this);

  },

  enqueueSong: function () {
    if(this.models && this.models.length === 1){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.models[0].play();
  },

  dequeue: function(song){
    if (song) {
      this.remove(song);
    } else {
      this.shift();
    }
  },

  ended: function(song){
    this.dequeue(song);
    if(this.models && this.models.length === 1){
      this.playFirst();
    }
  },

  getCurrentSong: function(){
    return this.models[0];
  }
});
