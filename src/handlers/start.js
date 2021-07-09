const { showTitle } = require('../models/showTitle');
const { error } = require('../models/error');
const startGame = async (rl) => {
    console.clear()
    showTitle(`Counter`);
    rl.question("What do you want to do? [count/stopwatch/date]", function (code) {
        console.clear()
        if (code.toLocaleLowerCase() === `count`) {
            const { start } = require('../handlers/count');
            start(rl)

        } else if (code.toLocaleLowerCase() === `stopwatch`) {
            const { start } = require('../handlers/stopwatch');
            start(rl)

        } else if (code.toLocaleLowerCase() === `date`) {
            const { date } = require('../handlers/date');
            date(rl)

        } else {
            error(`This is not a valid game!`, rl)
        }
    });
}
module.exports.startGame = startGame