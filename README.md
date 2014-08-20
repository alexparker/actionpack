Action Pack ReadMe
==========

### Actions

```javascript
// /actions/things.js

var Action = require('actionpack').Action;

exports.action = Action('things', function() {
  // this.api //object available
  // this.json //alias for connection.response

  var _this = this;

  this.dbOfYourChoice.find('things', function(err, result) {
    _this.json.things = result;
    _this.next();
  });

}, {
  // ... additional options
  name: '', // default is set from first param of Action()
  description: '',
  inputs: {
    required: [], // returns bad request if this params are absent
    optional: [] // allows these params to be received
  },
  blockedConnectionTypes: [],
  outputExample: {} // used for self documentation of ActionHero
}
```

or coffescript

```coffee
# /actions/things.js

Action = require("actionpack").Action
exports.action = Action "things", ->
  
  # this.api //object available
  # this.json //alias for connection.response
  _this = this
  @dbOfYourChoice.find "things", (err, result) ->
    _this.json.things = result
    _this.next()
    return

  return
,
  
  # ... additional options
  name: "" # default is set from first param of Action()
  description: ""
  inputs:
    required: [] # returns bad request if this params are absent
    optional: [] # allows these params to be received

  blockedConnectionTypes: []
  outputExample: {} # used for self documentation of ActionHero
```

