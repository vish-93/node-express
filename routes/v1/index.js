'use strict';

module.exports = (app, isTesting) => {
    if (isTesting) return { v1: true };
};
