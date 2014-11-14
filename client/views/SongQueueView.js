/*global Backbone:true, SongQueueEntryView:true, _:true */

var SongQueueView = Backbone.View.extend({

  tagName: 'div',
  template: _.template('<table class="table table-striped table-hover"></table>'),

  attributes: {
    class: 'col-sm-4',
  },

  initialize: function () {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on('ended', this.render, this);
    this.render();
  },

  render: function () {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.table').append('<th>Song Queue</th>');
    this.$('.table').append(
      this.collection.map(function (song) {
        return new SongQueueEntryView({
          model: song
        }).render();
      })
    );
  }

});
