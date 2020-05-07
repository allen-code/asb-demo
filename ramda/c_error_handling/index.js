const R = require('ramda');

const errorCase1 = ['errors', 'innerDetails'];
const errorCase2 = ['errors'];
const errorCase3 = ['data', 'errors', 'innerDetails'];
const errorCase4 = ['data', 'errors'];
const errorCase5 = ['data', 'message'];

const getErrorDetails = R.pipe(
  R.prop('response'),
  R.cond([
    [R.hasPath(errorCase1), R.path(errorCase1)],
    [R.hasPath(errorCase2), R.path(errorCase2)],
    [R.hasPath(errorCase3), R.path(errorCase3)],
    [R.hasPath(errorCase4), R.path(errorCase4)],
    [
      R.T,
      R.pipe(
        R.path(errorCase5),
        message => [{ message }]
      )
    ]
  ])
);

module.exports = async function (context) {

    const result1 = getErrorDetails(
        {
            "response": {
                "errors": {
                    "innerDetails": "inner details error"
                }
            }
        });
    const result2 = getErrorDetails(
        {
            "response": {
                "errors": "erros"
            }
        });
    const result3 = getErrorDetails(
        {
            "response": {
                "data": {
                    "errors": {
                        "innerDetails": "data inner details error"
                    }
                }
            }
        });
    const result4 = getErrorDetails(
        {
            "response": {
                "data": {
                    "errors": "data error"
                }
            }
        });
    const result5 = getErrorDetails(
        {
            "response": {
                "data": {
                    "message": "error message"
                }
            }
        });
    context.res = {
        status: 200, /* Defaults to 200 */
        body: `inner error: ${result1} \nerror: ${result2} \ndata ininer error: ${result3} \ndata error: ${result4} \nmessage error: ${result5}`
    };
};