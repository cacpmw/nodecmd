import { lookupLines } from '../repository/FileRepository';

export default class LookupLinesService {
  public async execute(
    includes: string[] = [],
    filePath: string,
  ): Promise<string[]> {
    const lines = await lookupLines(includes, filePath);
    return lines;
  }
}
