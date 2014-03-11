var _ = require('lodash-node');

var Action = function(name, two, three, four) {
  var options, run, helpers;

  // Syntax .extend('action#method', function() { ... }, {})
  if ( typeof two == 'function' ) {
    options = {};
    run = two;
    helpers = three;
  }

  // Syntax .extend('action#method', {}, function() { ... }, {})
  if ( typeof three == 'function' ) {
    options = two;
    run = three;
    helpers = four;
  }

  var presets = {

    name: name,

    description: name + ' description',

    inputs: {
      required: [],
      optional: []
    },

    blockedConnectionTypes: [],

    outputExample: {},

    run: function(api, conn, next){

      this.api = api;
      this.connection = conn;
      this.next = function(success) {
        next(conn, success);
      };
      this.json = conn.response;
      this.params = conn.params;

      run.apply(this, arguments);
    }
  };


  return _.merge(presets, options, helpers);
};

module.exports = Action;