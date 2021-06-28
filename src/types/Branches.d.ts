import { ILabel } from './Labels';

export interface IBranch {
  id: string
  lastMessageAuthor: string,
  subject: string,
  count: number,
  date: string,
  folder: string,
  labels?: ILabel[],
  starred: boolean,
}
