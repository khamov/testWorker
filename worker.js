onmessage = function (ev) {
    console.log('Message received from main');

    var res = 'Result: ' + (ev.data[0] * ev.data[1]);
    console.log('Sending messagre back to main');
    postMessage(res);
}