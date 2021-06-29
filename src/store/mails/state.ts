import { IMail } from 'src/types/Mails.d';

export interface IMailsState {
  mails: IMail[]
}

function state(): IMailsState {
  return {
    mails: [
      {
        id: 'asdf',
        branch: 'jkljl',
        subject: 'Sale car',
        author: 'Peter',
        date: 'Mar 3',
        text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 'aadf',
        branch: 'looadsf',
        subject: 'Sale car',
        author: 'me',
        date: 'Mar 2',
        text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  };
}

export default state;
