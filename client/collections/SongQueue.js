// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.playFirst, this);
  },

  playFirst: function(){

    if(this.models && this.models.length > 0){
      this.models[0].play();
    }
  },

  dequeue: function(){
    this.shift();
  },

  getCurrentSong: function(){
    return this.models[0];
  }
});
