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
  read: boolean,
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

export interface IPayloadSetFolder {
  branchesIds: string[]
  folderName: string
}

export interface IPayloadToggleStarred {
  branchesIds: string[]
  status: boolean
}

export interface IPayloadToggleLabelFromBranches {
  branchesIds: string[]
  label: string
}
