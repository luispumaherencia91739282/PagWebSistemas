"use strict";
'use es6';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getViewportHeight = void 0;

var getViewportHeight = function getViewportHeight() {
    return Math.max(window.innerHeight || 0, document.documentElement.clientHeight);
};

exports.getViewportHeight = getViewportHeight;