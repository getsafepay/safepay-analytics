"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEvent = void 0;
var react_ga4_1 = __importDefault(require("react-ga4"));
function logEvent(props) {
    if (props.shouldLogImpression) {
        react_ga4_1.default.event({
            category: props.category,
            action: props.action,
            label: props.label,
            value: props.value,
            nonInteraction: props.nonInteraction,
            transport: props.transport,
        });
    }
}
exports.logEvent = logEvent;
