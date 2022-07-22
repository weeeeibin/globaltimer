"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const timer_1 = __importDefault(require("./timer"));
class globalTimer {
    constructor(time, name) {
        this.time = time;
        this.worker = new Worker(timer_1.default);
        this.worker.onmessage = () => {
            window.dispatchEvent(new Event(name));
        };
    }
    start() {
        this.worker.postMessage(this.time);
    }
    stop() {
        this.worker.terminate();
    }
}
exports.default = globalTimer;
