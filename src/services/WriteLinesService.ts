import { writeLines } from '../repository/FileRepository';

export default class WriteLinesService {
  public async execute(lines: string[]): Promise<void> {
    await writeLines(lines);
  }
}
