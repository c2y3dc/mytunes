/*global Backbone:true, SongVisualizer:true */


var PlayerView = Backbone.View.extend({

  tagName: 'div',

  attributes: {
    class: 'col-sm-12',
  },

  events: {
    'ended': 'ended'
  },

  // Currently using SongVisualizer to play audio
  el: '<audio id="audio-player" controls />',

  setSong: function (song) {
    this.model = song;
    this.visualizer = new SongVisualizer(this.model.get('url'), this.ended.bind(this));
    // this.render();
  },

  // render: function () {
  //   return this.$el.attr('src', this.model ? this.model.get('url') : '');
  // },

  ended: function () {
    this.model.ended();
  }

});
