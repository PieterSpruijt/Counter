const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const { startGame } = require('./handlers/start');
startGame(rl)
/*
const FLAGS = {
    "1": [`yellow`, `green`],
    "2": [`white`, `red`],
    "3": [`red`, `white`],
    "4": [],
}
*/