"use strict";
'use es6';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shouldRenderWidget = void 0;

var _whichDevice = require("./whichDevice");

var _isEmbeddedInProduct = require("./isEmbeddedInProduct");

var _getPortalIdFromPath = require("./getPortalIdFromPath");

var _isUsingUnsupportedFramework = require("./isUsingUnsupportedFramework");

var shouldRenderWidget = function shouldRenderWidget(_ref) {
    var portalId = _ref.portalId;
    var hasPortalId = false;

    if ((0, _getPortalIdFromPath.getPortalIdFromPath)(window.location.pathname)) {
        hasPortalId = true;
    }

    var portalIdRequired = (0, _isEmbeddedInProduct.isEmbeddedInProduct)({
        portalId: portalId
    });
    var missingPortalId = portalIdRequired && !hasPortalId;
    var isOnEmbededMeetingsPage = window.disabledHsPopups && window.disabledHsPopups.indexOf('LIVE_CHAT') > -1;

    if ((0, _whichDevice.isIE10)()) {
        return {
            shouldRender: false,
            reason: 'IE_10'
        };
    }

    if ((0, _whichDevice.isIE11)()) {
        return {
            shouldRender: false,
            reason: 'IE_11'
        };
    }

    if ((0, _whichDevice.isWindowsMobile)()) {
        return {
            shouldRender: false,
            reason: 'WINDOWS_PHONE'
        };
    }

    if ((0, _whichDevice.isOperaMini)()) {
        return {
            shouldRender: false,
            reason: 'OPERA_MINI'
        };
    }

    if ((0, _isUsingUnsupportedFramework.isUsingUnsupportedFramework)()) {
        return {
            shouldRender: false,
            reason: 'UNSUPPORTED_FRAMEWORK'
        };
    }

    if (missingPortalId) {
        return {
            shouldRender: false,
            reason: 'MISSING_PORTAL_ID'
        };
    }

    if (isOnEmbededMeetingsPage) {
        return {
            shouldRender: false,
            reason: 'IS_EMBEDDED_MEETINGS'
        };
    }

    return {
        shouldRender: true
    };
};

exports.shouldRenderWidget = shouldRenderWidget;