# singleton-require
When you need a single reference to a global singleton (mongoose, config, cache) shared amongst all npm modules, useful for plugin systems

# Usage
Instead of calling require directly, route it through singleton-require to guarantee only one instance of the module is loaded and you have a reference to it

    var config = require('singleton-require')('config');
