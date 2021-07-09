const { error } = require('../models/error');
const { showTitle } = require('../models/showTitle');

const date = async (rl) => {
    showTitle(`Counter`)
    console.log(new Date().toTimeString());
    setInterval(() => {
        console.clear()
        showTitle(`Counter`)
        console.log(new Date().toTimeString());
    }, 1000);
}
module.exports.date = date