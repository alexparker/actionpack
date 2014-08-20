Action Pack ReadMe
==========

### Actions Helper

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

or coffescript (not tried yet)

```coffee
# /actions/things.js
Action = require("actionpack").Action
exports.action = Action "things", ->
  
  # @api //object available
  # @json //alias for connection.response
  
  @dbOfYourChoice.find "things", (err, result) =>
    @json.things = result
    @next()
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

