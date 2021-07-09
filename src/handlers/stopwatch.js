const { error } = require('../models/error');
const { showTitle } = require('../models/showTitle');

const start = async (rl) => {
    showTitle(`Counter`)
    rl.question("type somthing to start:", function (code) {
        console.clear()
        stopwatch(rl)
    });
}
const stopwatch = async (rl) => {
    let a = 0;
    showTitle(`Counter`)
    showTitle(a.toLocaleString());
    a++
    setInterval(() => {
        console.clear()
        showTitle(`Counter`)
        showTitle(a.toLocaleString());
        a++
    }, 1000);
}
module.exports.start = start
module.exports.stopwatch = stopwatch