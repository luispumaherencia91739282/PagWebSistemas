"use strict";
'use es6';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleTargetingAndDelay = void 0;

var _whichDevice = require("./whichDevice");

var _getWidgetDataResponseType = require("../operators/getWidgetDataResponseType");

var _widgetResponseTypes = require("../constants/widgetResponseTypes");

var _getDelayLoadingWidgetIframe = require("./getDelayLoadingWidgetIframe");

var _events = require("../events");

var _markEnd = require("../perf/markEnd");

var _markStart = require("../perf/markStart");

var handleTargetingAndDelay = function handleTargetingAndDelay(setWidgetData, loadIFrame) {
    return function(widgetData) {
        var hideWidget = (0, _getWidgetDataResponseType.getWidgetDataResponseType)(widgetData) === _widgetResponseTypes.HIDE_WIDGET;

        var initialize = !hideWidget && !!widgetData.sessionId;

        if (initialize) {
            var _getDelayLoadingWidge = (0, _getDelayLoadingWidgetIframe.getDelayLoadingWidgetIframe)(widgetData, (0, _whichDevice.isAnyMobile)()),
                shouldDelayLoadingIframe = _getDelayLoadingWidge.shouldDelayLoadingIframe,
                timeDelay = _getDelayLoadingWidge.timeDelay;

            (0, _markEnd.markEndPreDelay)();

            if (shouldDelayLoadingIframe) {
                setTimeout(function() {
                    setWidgetData(widgetData);
                    (0, _markStart.markStartPostDelay)();
                    loadIFrame();
                }, timeDelay);
            } else {
                setWidgetData(widgetData);
                (0, _markStart.markStartPostDelay)();
                loadIFrame();
            }
        }

        _events.EVENTS.messagesInitialized({
            messageWillRender: initialize
        });
    };
};

exports.handleTargetingAndDelay = handleTargetingAndDelay;