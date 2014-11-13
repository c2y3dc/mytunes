// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  attributes: {
    class: 'library-entry',
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function () {
      this.model.enqueue();
    }
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    this.$el.attr('id', this.model.get('title'));
    return this.$el;
  }

});