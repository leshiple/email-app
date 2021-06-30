import { IBranch } from 'src/types/Branches.d';

export interface IBranchState {
  branches: IBranch[];
}

function state(): IBranchState {
  return {
    branches: [
      {
        id: 'branch-1',
        lastMessageAuthor: 'Peter',
        subject: 'Holiday',
        count: 4,
        date: 'Mar 3',
        labels: ['Freelance'],
        starred: true,
        folder: 'inbox',
      },
      {
        id: 'branch-2',
        lastMessageAuthor: 'me',
        subject: 'Sale car',
        count: 3,
        date: 'May 19',
        labels: ['Friends'],
        starred: false,
        folder: 'inbox',
      },
      {
        id: 'branch-3',
        lastMessageAuthor: 'Gleb',
        subject: 'User-friendly value-added application',
        count: 5,
        date: 'June 1',
        labels: [],
        starred: true,
        folder: 'inbox',
      },
      {
        id: 'branch-4',
        lastMessageAuthor: 'John',
        subject: 'Focused impactful open system',
        count: 2,
        date: 'May 19',
        labels: ['Social'],
        starred: false,
        folder: 'inbox',
      },
      {
        id: 'branch-5',
        lastMessageAuthor: 'me',
        subject: 'Profound systemic alliance',
        count: 1,
        date: 'May 19',
        labels: [],
        starred: false,
        folder: 'inbox',
      },
      {
        id: 'branch-6',
        lastMessageAuthor: 'Alex',
        subject: 'Organized value-added model',
        count: 4,
        date: 'May 19',
        labels: ['Social', 'Support'],
        starred: false,
        folder: 'trash',
      },
      {
        id: 'branch-7',
        lastMessageAuthor: 'me',
        subject: 'Quality-focused methodical flexibility',
        count: 3,
        date: 'May 19',
        labels: [],
        starred: false,
        folder: 'trash',
      },
      {
        id: 'branch-8',
        lastMessageAuthor: 'me',
        subject: 'Company Report',
        count: 2,
        date: 'May 19',
        labels: ['Support'],
        starred: false,
        folder: 'trash',
      },
      {
        id: 'branch-9',
        lastMessageAuthor: 'Kim',
        subject: 'Theme Update',
        count: 4,
        date: 'May 19',
        labels: [],
        starred: true,
        folder: 'trash',
      },
      {
        id: 'branch-10',
        lastMessageAuthor: 'Billy',
        subject: 'Wedding',
        count: 2,
        date: 'May 19',
        labels: ['Friends', 'Social'],
        starred: true,
        folder: 'trash',
      },
    ],
  };
}

export default state;
