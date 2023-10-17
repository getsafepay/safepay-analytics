"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
var react_ga4_1 = __importDefault(require("react-ga4"));
function initialize(options) {
    switch (options.provider) {
        case "GA":
            initalizeGA(options.ga);
        case "AMPLITUDE":
            initalizeAmplitude(options.amplitude);
        default:
            throw new Error("This option is unsupported");
    }
}
exports.initialize = initialize;
function initalizeGA(options) {
    react_ga4_1.default.initialize(options.trackingId);
}
function initalizeAmplitude(options) { }
