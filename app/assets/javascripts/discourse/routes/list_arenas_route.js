/**
  The route for listing categories.

  @class ListArenasRoute
  @extends Discourse.Route
  @namespace Discourse
  @module Discourse
**/

Discourse.ListArenasRoute = Discourse.Route.extend({

  exit: function() {
    this._super();
    this.controllerFor('list').set('canCreateCategory', false);
  },

  setupController: function(controller) {
    var listController,
      _this = this;
    listController = this.controllerFor('list');
    listController.set('filterMode', 'arenas');
    listController.load('categories').then(function(categoryList) {
      _this.render('listArenas', {
        into: 'list',
        outlet: 'listView',
        controller: 'listArenas'
      });
      //listController.set('canCreateCategory', categoryList.get('can_create_category'));
      //listController.set('category', null);
      //_this.controllerFor('lis').set('content', categoryList);
    });
  }

});


