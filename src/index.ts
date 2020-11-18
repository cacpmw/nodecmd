#!/usr/bin/env node
import LookupLineService from './services/LookupLineService';

async function main() {
    const lookupLineService = new LookupLineService();
    const res = await lookupLineService.execute(['Loan', 'Website'], '../../uploads/model.csv');
    console.log(res);

};
main();
