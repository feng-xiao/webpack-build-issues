"use strict";

module.exports = function (source, sourceMap) {
    // Not cacheable during unit tests;
    this.cacheable && this.cacheable();

    source = `import { Params } from '@angular/router';\nlet a: Params = {};\nconsole.log(a);\n` + source;

    // Support for tests
    if (this.callback) {
        this.callback(null, source, sourceMap)
    } else {
        return source;
    }
}
