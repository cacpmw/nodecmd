#!/usr/bin/env node
import fs from 'fs';
import readline from 'readline';
import path from 'path';

const filePath = path.resolve(__dirname, '../uploads/model.csv')
const includes = ['Loan', 'Website']
const records: string[] = [];
const readLineInterface = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});
function readLinePromise(event: string) {
    return new Promise((resolve, reject) => {
        readLineInterface.on(event, (line: string) => {
            if (event === '') return reject(event)
            resolve(line);
        });
    })
}
readLinePromise('line').then(line => {
    const r = line as string;
    includes.some(sub => {

        if (r.includes(sub)) {
            //console.log('line: ' + r);
            records.push(r);
        }
    })

})
console.log(records);


// readLineInterface.on('line', (line) => {
//     includes.some(sub => {

//         if (line.includes(sub)) {
//             console.log('line: ' + line);
//             records.push(line);
//         }
//     })

// });
