import { lookupLines } from '../repository/FileRepository';

export default class LookupLinesService {
  public async execute(
    includes: string[] = [],
    filenameWithExtension: string,
  ): Promise<string[]> {
    const lines = await lookupLines(includes, filenameWithExtension);
    return lines;
  }
}
