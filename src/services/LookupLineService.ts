import { lookupLines } from '../repository/FileRepository';

export default class LookupLinesService {
    public async execute(includes: string[] = [], filePath: string): Promise<string[]> {
      return await lookupLines(includes, filePath);
    }
}
