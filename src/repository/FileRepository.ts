import fs from 'fs';
import readline from 'readline';
import path from 'path';

async function lookupLines(includes: string[] = [], filePath: string): Promise<string[]> {
    const dirPath = path.resolve(__dirname, filePath)
    const records: string[] = [];
    const readLineInterface = readline.createInterface({
        input: fs.createReadStream(dirPath),
        output: process.stdout,
        terminal: false
    });

    readLineInterface.on('line', async (line) => {
        includes.some(sub => {
            if (line.includes(sub)) {
                records.push(line);
            }
        })

    });

    await new Promise(resolve => readLineInterface.on('close', resolve));
    return records;
}

export { lookupLines };