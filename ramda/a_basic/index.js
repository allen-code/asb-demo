const R = require('ramda');
const customer = require('./customers')

const balance = R.prop('balance')
// const 


module.exports = async function (context) {

    const result1 = balance;

    const result2 = curryAdd(1)(2)(3);

    const result3 = complexAdd(1)(2)(3);

    context.res = {
        status: 200, /* Defaults to 200 */
        body: `normal add function: ${result1} \ncurry function: ${result2} \ncomplex add function: ${result3}`
    };
};