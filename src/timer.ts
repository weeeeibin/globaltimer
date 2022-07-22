const workercode = () => {
    self.onmessage = (e) => {
        loop(e.data ?? 5000)
    }

    function loop(time: number) {
        setTimeout(() => {
            self.postMessage('timeEvent')
            loop(time)
        }, time)
    }
}

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
const blob = new Blob([code], { type: 'application/javascript' });
const workerScript = URL.createObjectURL(blob);

export default workerScript;