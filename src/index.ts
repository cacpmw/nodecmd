#!/usr/bin/env node
import yargs from 'yargs';

import LookupLineService from './services/LookupLineService';
import WriteLinesService from './services/WriteLinesService';

async function main(includes: string[], path: string) {
    const lookupLineService = new LookupLineService();
    const lines = await lookupLineService.execute(includes, path);
    const writeLineService = new WriteLinesService();
    await writeLineService.execute(lines);

};

const argv = yargs(process.argv).argv
console.log(argv.i);
main(argv.i as string[], argv.path as string);
