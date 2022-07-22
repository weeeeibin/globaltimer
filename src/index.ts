import workerTimer from './timer'

class globalTimer {
    private worker: Worker
    constructor(public time: Number, name: string) {
        this.worker = new Worker(workerTimer)
        this.worker.onmessage = () => {
            window.dispatchEvent(new Event(name))
        }
    }

    start() {
        this.worker.postMessage(this.time)
    }

    stop() {
        this.worker.terminate()
    }
}

export default globalTimer       