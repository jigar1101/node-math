(function() {
    /** Using prompt to take user input **/
    const prompt = require('prompt'),
        math = require('./math'),
        properties = [{
                name: 'num1',
                validator: /^[1-9]\d*(\.\d+)?$/,
                warning: 'The input should be a number'
            },
            {
                name: 'num2',
                validator: /^[1-9]\d*(\.\d+)?$/,
                warning: 'The input should be a number'
            }
        ];

    prompt.start();

    prompt.get(properties, function(err, result) {
        if (err) { return onError(err); }

        const num1 = parseFloat(result.num1),
            num2 = parseFloat(result.num2)

        console.log('Number 1: ' + num1);
        console.log('Number 2: ' + num2);

        console.log("Result : " + math.add(num1, num2));

    });

    const onError = function onError(err) {
        console.log(err);
    }

})();