var _ = require('lodash-node');

var Action = function(name, two, three, four) {
  var options, run, helpers;

  var run = two;
  var options = three;

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
      this.json = this.connection.response;
      this.next = function(success) {
        next(conn, success);
      };
      this.params = conn.params;

      run.apply(this, arguments);
    }
  };

  return _.merge(presets, options);
};

module.exports = Action;
