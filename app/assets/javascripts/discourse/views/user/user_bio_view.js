/**
  This view handles rendering of a user's cooked bio

  @class UserBioView
  @extends Discourse.View
  @namespace Discourse
  @module Discourse
**/
Discourse.UserBioView = Discourse.View.extend({
  templateName: 'user/user_bio',
  currentUserBinding: 'Discourse.currentUser',
  userBinding: 'controller.content'
});


