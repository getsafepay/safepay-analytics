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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = exports.Events = exports.Category = exports.Action = exports.Title = exports.logEvent = void 0;
var logAnalytics_1 = require("./analytics/logAnalytics");
Object.defineProperty(exports, "logEvent", { enumerable: true, get: function () { return logAnalytics_1.logEvent; } });
var types_1 = require("./analytics/types");
Object.defineProperty(exports, "Title", { enumerable: true, get: function () { return types_1.Title; } });
Object.defineProperty(exports, "Action", { enumerable: true, get: function () { return types_1.Action; } });
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return types_1.Category; } });
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return types_1.Events; } });
__exportStar(require("./analytics/Trace"), exports);
__exportStar(require("./analytics/TraceEvent"), exports);
var initialize_1 = require("./analytics/initialize");
Object.defineProperty(exports, "initialize", { enumerable: true, get: function () { return initialize_1.initialize; } });
