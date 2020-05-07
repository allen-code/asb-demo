const R = require('ramda');

const add = (a, b, c) => {
    return a + b + c;
}

const curryAdd = R.curry(add);

const complexAdd = a => {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}


module.exports = async function (context) {

    const result1 = add(1, 2, 3);

    const result2 = curryAdd(1)(2)(3);

    const result3 = complexAdd(1)(2)(3);

    context.res = {
        status: 200, /* Defaults to 200 */
        body: `normal add function: ${result1} \ncurry function: ${result2} \ncomplex add function: ${result3}`
    };
};