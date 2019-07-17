if(window.Worker) {
    let btn = document.querySelector('#btn');
    let num1 = 2;
    let num2 = 3;
    let worker = new Worker('worker.js');

    worker.onmessage = function (ev) {
      console.log('Received msg from worker: ' + ev.data);
    };

    btn.onclick = function () {
        worker.postMessage([num1, num2]);
        console.log('Send message to worker');
    };
}