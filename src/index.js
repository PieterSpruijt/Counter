const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
try {
   require('./handlers/start').startGame(rl)
} catch (e) {
    console.clear()
    require('./models/showTitle').showTitle(`Counter`)
    require('./models/error').error(`Something went wrong`, rl);
    require('./handlers/start').startGame(rl)
}
/*
const FLAGS = {
    "1": [`yellow`, `green`],
    "2": [`white`, `red`],
    "3": [`red`, `white`],
    "4": [],
}
*/