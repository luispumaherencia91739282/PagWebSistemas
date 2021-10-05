"use strict";
'use es6';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMessagesUtkFromCookie = getMessagesUtkFromCookie;

var _operators = require("../cookies/operators");

var _isUtk = require("./isUtk");

var _constants = require("../cookies/constants");

function getMessagesUtkFromCookie() {
    var messagesCookieValue = (0, _operators.getCookie)(_constants.cookies.MESSAGES);
    return (0, _isUtk.isUtk)(messagesCookieValue) ? messagesCookieValue : undefined;
}