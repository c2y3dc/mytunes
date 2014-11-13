// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "div",
  template: _.template('<table class="table table-striped table-hover"></table>'),
  attributes: {
    class: 'col-sm-8 library-view',
  },
  initialize: function () {
    this.render();
  },

  render: function () {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.table').append('<th>Library</th>');
    this.$('.table').append(
      this.collection.map(function (song) {
        return new LibraryEntryView({
          model: song
        }).render();
      })
    );
  }

});