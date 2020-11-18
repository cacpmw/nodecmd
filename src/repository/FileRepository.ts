import fs from 'fs';
import readline from 'readline';
import path from 'path';

async function lookupLines(
  includes: string[] = [],
  filePath: string,
): Promise<string[]> {
  const dirPath = path.resolve(__dirname, filePath);
  const records: string[] = [];
  const readLineInterface = readline.createInterface({
    input: fs.createReadStream(dirPath),
    output: process.stdout,
    terminal: false,
  });

  readLineInterface.on('line', async line => {
    includes.some(sub => {
      if (line.toLowerCase().includes(sub.toLowerCase())) {
        records.push(line);
        return true;
      }
      return false;
    });
  });

  await new Promise(resolve => readLineInterface.on('close', resolve));
  return records;
}

async function writeLines(lines: string[]): Promise<void> {
  const filename = `${Date.now()}-dump.csv`;
  const dirPath = path.resolve(__dirname, `../../dumps/${filename}`);
  const writer = fs.createWriteStream(dirPath, {
    flags: 'w+',
  });
  const newLine = '\r\n';
  lines.forEach(line => {
    writer.write(`${line}${newLine}`);
  });
  writer.end();
}

export { lookupLines, writeLines };
