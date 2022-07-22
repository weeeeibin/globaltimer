"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workercode = () => {
    self.onmessage = (e) => {
        var _a;
        loop((_a = e.data) !== null && _a !== void 0 ? _a : 5000);
    };
    function loop(time) {
        setTimeout(() => {
            self.postMessage('timeEvent');
            loop(time);
        }, time);
    }
};
let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
const blob = new Blob([code], { type: 'application/javascript' });
const workerScript = URL.createObjectURL(blob);
exports.default = workerScript;
