const { readFile, writeFile } = require('fs');

readFile('./content/first.text', 'utf-8', (err, first) => {
    if (err) {
        console.log("Error reading first.text: ", err);
        return;
    }

    readFile('./content/second.txt', 'utf-8', (err, second) => {
        if (err) {
            console.log("Error reading second.txt: ", err);
            return;
        }

        const result = `Here is the result: ${first},${second}`;

        writeFile("./content/result-async.txt", result, (err) => {
            if (err) {
                console.log("Error writing result-async.txt: ", err);
                return;
            }
            
            console.log("Result has been written to result-async.txt");
        });
    });
});
