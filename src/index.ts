#!/usr/bin/env node
import yargs from 'yargs';

import LookupLineService from './services/LookupLineService';
import WriteLinesService from './services/WriteLinesService';

async function main(includes: string[], filenameWithExtension: string) {
  const lookupLineService = new LookupLineService();
  const lines = await lookupLineService.execute(
    includes,
    filenameWithExtension,
  );
  const writeLineService = new WriteLinesService();
  await writeLineService.execute(lines);
}

const { argv } = yargs(process.argv);
main(argv.i as string[], argv.file as string);
