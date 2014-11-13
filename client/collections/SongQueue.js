// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueueSong, this);
    this.on('ended', this.dequeue, this);
  },

  enqueueSong: function () {
    console.log('enqueSong: ', this.model.length);
    if(this.models && this.models.length === 1){
      console.log('+ Playing First');
      this.playFirst();
    } else {
      console.log('Not Playing first');
    }
  },

  playFirst: function(){
    console.log('playFirst');
    this.models[0].play();
  },

  dequeue: function(){
    this.shift();
  },

  getCurrentSong: function(){
    return this.models[0];
  }
});
