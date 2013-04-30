/**
  This controller supports actions when listing arenas

  @class ListArenasController 
  @extends Discourse.ObjectController
  @namespace Discourse
  @module Discourse
**/
Discourse.ListArenasController = Discourse.ObjectController.extend({
  needs: ['modal'],

  capitalizedName: (function() {
    return "Main Arena";
  }).property()

});


