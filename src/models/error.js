const { startGame } = require('../handlers/start');
const { showTitle } = require('../models/showTitle');

const error = async (text, rl) => {
    console.clear()
    showTitle(`Counter`)
    rl.question(`Error: (${text}) Try again? [yes/no]`, function (code) {
        if (code.toLowerCase() === `no`) {
            startGame(rl)

        }
        if (code.toLowerCase() === `yes`) {
            if (text = `This is not a valid game!`) {
                console.clear()
                startGame(rl)
                return
            }
            console.clear()
            require('../handlers/count').start(rl)
            

        } else {
            error(text, rl);
        }




    });
}
module.exports.error = error;