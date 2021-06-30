import { ILabel } from './Labels.d';
import { IMail } from './Mails';

export interface IBranchBase {
  id: string
  lastMessageAuthor: string,
  subject: string,
  count: number,
  date: string,
  folder: string,
  starred: boolean,
}

export interface IBranch extends IBranchBase {
  labels: string[],
}

export interface IBranchWithLabels extends IBranchBase {
  labels: ILabel[],
}

export interface IBranchExtended extends IBranchBase {
  labels: ILabel[],
  mails: IMail[]
}
