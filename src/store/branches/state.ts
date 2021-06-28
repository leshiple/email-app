import { IBranch } from 'src/types/Branches.d';

export interface IBranchState {
  branches: IBranch[];
}

function state(): IBranchState {
  return {
    branches: [
      {
        id: 'asdfasdf',
        lastMessageAuthor: 'Peter',
        subject: 'Holiday',
        count: 14,
        date: 'Mar 3',
        labels: [],
        starred: true,
        folder: 'inbox',
      },
      {
        id: 'gasdf',
        lastMessageAuthor: 'Me',
        subject: 'Sale car',
        count: 9,
        date: 'May 19',
        labels: [],
        starred: false,
        folder: 'inbox',
      },
    ],
  };
}

export default state;
