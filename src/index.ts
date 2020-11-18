#!/usr/bin/env node
import yargs from 'yargs';

import LookupLineService from './services/LookupLineService';

async function main(includes: string[], path: string) {
    const lookupLineService = new LookupLineService();
    const res = await lookupLineService.execute(includes, path);
    console.log(res);

};

const argv = yargs(process.argv).argv
console.log(argv.i);
main(argv.i as string[], argv.path as string);
