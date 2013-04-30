/**
  This view handles the rendering of an arena list

  @class ListArenasView
  @extends Discourse.View
  @namespace Discourse
  @module Discourse
**/
Discourse.ListArenasView = Discourse.View.extend({

  templateName: 'list/arenas',

  didInsertElement: function() {
    return Discourse.set('title', Em.String.i18n("arena.list"));
  }

});


