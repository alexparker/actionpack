var _ = require('lodash-node');

var Route = {

  _routes: {},

  get: function(path, action) {
    this._routes['get'] = this._routes['get'] || [];
    this._routes['get'].push({ path: path, action: action });
  },

  post: function(path, action) {
    this._routes['post'] = this._routes['post'] || [];
    this._routes['post'].push({ path: path, action: action });
  },

  put: function(path, action) {
    this._routes['put'] = this._routes['put'] || [];
    this._routes['put'].push({ path: path, action: action });
  },

  delete: function(path, action) {
    this._routes['delete'] = this._routes['delete'] || [];
    this._routes['delete'].push({ path: path, action: action });
  },


  // NAMING PATTERN ASSUMPTIONS:
  // ---------------------------
  // basepath = 'models'
  // action_base = 'models'
  //
  // get: 'models/:id', 'models#show'
  // get: 'models', 'models#index'
  // put: 'models/:id', 'models#update'
  // post: 'models', 'models#create'
  // delete: 'models/:id', 'models#destroy'
  resources: function(base_path, action_base) {
    var id_path = base_path+'/:id(^[0-9]+$)';

    this.get( id_path, action_base+'#show' );
    this.get( base_path, action_base+'#index' );
    this.put( id_path, action_base+'#update' );
    this.post( base_path, action_base+'#create' );
    this.delete( id_path, action_base+'#destroy' );
  },

  resource: function(base_path, action_base) {
    this.post( base_path, action_base+'#create' );
    this.get( base_path, action_base+'#show' );
    this.put( base_path, action_base+'#update' );
    this.delete( base_path, action_base+'#destroy' );
  },

  routes: function() {
    return this._routes;
  }
};

module.exports = Route;