// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    console.log(this.collection);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on('ended', this.render, this);
    this.render();
  },

  render: function(){
    console.log('Render');
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
