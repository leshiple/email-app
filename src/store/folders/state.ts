import {
  INBOX_FOLDER, STARRED, SENT_FOLDER, TRASH_FOLDER,
} from 'src/constants';
import { IFolder } from 'src/types/Folders.d';

export interface IFoldersState {
  folders: IFolder[]
}

function state(): IFoldersState {
  return {
    folders: [
      {
        slug: INBOX_FOLDER,
        icon: 'mail',
        type: 'system',
      },
      {
        slug: STARRED,
        icon: 'star',
        type: 'system',
      },
      {
        slug: SENT_FOLDER,
        icon: 'send',
        type: 'system',
      },
      {
        slug: TRASH_FOLDER,
        icon: 'delete',
        type: 'system',
      },
    ],
  };
}

export default state;
