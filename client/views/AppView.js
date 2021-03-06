/*global Backbone:true, _:true, PlayerView:true, LibraryView:true, SongQueueView:true */

var AppView = Backbone.View.extend({

  template: _.template(''),
  el: '.app-view',

  initialize: function () {

    this.playerView = new PlayerView({
      model: this.model.get('currentSong'),
    });

    this.libraryView = new LibraryView({
      collection: this.model.get('library'),
    });

    this.songQueueView = new SongQueueView({
      collection: this.model.get('songQueue'),
    });

    // Event listeners
    this.playerView
      .on('ended', this.ended, this);
    this.model.get('songQueue')
      .on('remove', this.playNextSong, this);
    this.model
      .on('change:currentSong', this.setSong, this);
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    this.$el.append([
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
    return this.$el;
  },

  ended: function () {
    this.get('songQueue').ended();
  },

  setSong: function (model) {
    this.playerView.setSong(model.get('currentSong'));
  },

  playNextSong: function () {
    var currentSongInQueue = this.model.get('songQueue').getCurrentSong();
    if (currentSongInQueue) {
      this.model.set('currentSong', currentSongInQueue);
      this.model.get('currentSong')
        .on('ended', this.playNextSong, this);
    }
  }

});
