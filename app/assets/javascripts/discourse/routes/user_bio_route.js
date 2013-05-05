/**
  This route handles shows a user fully cooked bio.

  @class UserActivityRoute
  @extends Discourse.Route
  @namespace Discourse
  @module Discourse
**/
Discourse.UserBioRoute = Discourse.Route.extend({
  renderTemplate: function() {
    this.render({ into: 'user', outlet: 'userBioOutlet' });
  },

  setupController: function(controller) {
    var userController = this.controllerFor('user');
    var user = userController.get('content');
    controller.set('content', user);
    controller.set('showFullBio', true);
  }

});


