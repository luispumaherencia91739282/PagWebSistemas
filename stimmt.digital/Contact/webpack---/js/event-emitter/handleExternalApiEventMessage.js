"use strict";
'use es6';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleExternalApiEventMessage = void 0;

var _objectInvariant = require("../invariants/objectInvariant");

var _stringInvariant = require("../invariants/stringInvariant");

var handleExternalApiEventMessage = function handleExternalApiEventMessage(_ref, _ref2) {
    var data = _ref.data;
    var eventEmitter = _ref2.eventEmitter;
    (0, _stringInvariant.stringInvariant)(data.eventType);
    (0, _objectInvariant.objectInvariant)(data.payload);
    eventEmitter.trigger(data.eventType, data.payload);
};

exports.handleExternalApiEventMessage = handleExternalApiEventMessage;