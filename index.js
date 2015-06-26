'use strict';

module.exports = function(requireName) {
    var singleton = global['singleton-' + requireName];
    if (!singleton) {
        singleton = global['singleton-' + requireName] = require(requireName);
    }
    return singleton;
};
