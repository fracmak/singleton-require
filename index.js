'use strict';

module.exports = function(requireName) {
    var singleton = global['singleton-' + requireName];
    console.log('test');
    if (!singleton) {
        singleton = global['singleton-' + requireName] = require(requireName);
    }
    return singleton;
};
