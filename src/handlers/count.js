const { error } = require('../models/error');
const { showTitle } = require('../models/showTitle');

const start = async (rl) => {
    showTitle(`Counter`)
    rl.question("Type a number to count to:", function (code) {
        console.clear()
        count(code, rl)
    });
}
const count = async (number, rl) => {
    if (!parseInt(number)) return error(`This is not a number!`, rl);
    let a = 0;
    showTitle(`Counter`)
    showTitle(a.toLocaleString());
    a++
    setInterval(() => {
        if (a > parseInt(number)) return;
        console.clear()
        showTitle(`Counter`)
        showTitle(a.toLocaleString());
        a++
        if (a > number) {
            console.clear()
            showTitle(`Counter`);
            showTitle(`ended (${number})`)
            rl.question("Counting again? [yes/no]", function (code) {

                if (code.toLowerCase() === `no`) {
                    process.exit();

                }
                if (code.toLowerCase() === `yes`) {
                    console.clear()
                    require('../handlers/count').start(rl)

                } else {
                    error(`Answer not specified!`, rl);
                }




            });
        }
    }, 1000);
}
module.exports.start = start
module.exports.count = count