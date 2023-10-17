"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_ga4_1 = __importDefault(require("react-ga4"));
function TraceEvent(_a) {
    var category = _a.category, action = _a.action, label = _a.label, value = _a.value, nonInteraction = _a.nonInteraction, transport = _a.transport, children = _a.children, events = _a.events;
    var logEvent = (0, react_1.useCallback)(function () {
        react_ga4_1.default.event({
            category: category,
            action: action,
            label: label,
            value: value,
            nonInteraction: nonInteraction,
            transport: transport,
        });
    }, [category, action, label, value, nonInteraction, transport]);
    var getEventHandlers = (0, react_1.useCallback)(function (child, events, shouldLogImpression) {
        if (shouldLogImpression === void 0) { shouldLogImpression = true; }
        var eventHandlers = {};
        var _loop_1 = function (event_1) {
            eventHandlers[event_1] = function (eventHandlerArgs) {
                var _a;
                var args = Array.isArray(eventHandlerArgs)
                    ? eventHandlerArgs
                    : [eventHandlerArgs];
                (_a = child.props[event_1]) === null || _a === void 0 ? void 0 : _a.apply(child, args);
                if (shouldLogImpression) {
                    logEvent();
                }
            };
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            _loop_1(event_1);
        }
        return eventHandlers;
    }, [children, events]);
    var childrenWithProps = react_1.default.Children.map(children, function (child) {
        if (react_1.default.isValidElement(child)) {
            return (0, react_1.cloneElement)(child, getEventHandlers(child, events));
        }
        return child;
    });
    return react_1.default.createElement(react_1.default.Fragment, null, childrenWithProps);
}
exports.default = TraceEvent;
