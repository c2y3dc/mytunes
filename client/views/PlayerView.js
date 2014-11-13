// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  tagName: "div",
  attributes: {
    class: 'col-sm-12',
  },

  events: {
    'ended': 'ended'
  },

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio id="audio-player" controls />',

  setSong: function (song) {
    this.model = song;
    this.render();
    this.visualizer = new SongVisualizer(this.model.get('url'));
  },

  render: function () {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  ended: function () {
    this.model.ended();
  }

});