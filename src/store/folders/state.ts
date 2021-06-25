import { IFolder } from 'src/types/Folders.d';

export interface IFoldersState {
  folders: IFolder[]
}

function state(): IFoldersState {
  return {
    folders: [
      {
        slug: 'inbox',
        icon: 'mail',
        type: 'system',
      },
      {
        slug: 'starred',
        icon: 'star',
        type: 'system',
      },
      {
        slug: 'draft',
        icon: 'drafts',
        type: 'system',
      },
      {
        slug: 'sent',
        icon: 'send',
        type: 'system',
      },
      {
        slug: 'trash',
        icon: 'delete',
        type: 'system',
      },
    ],
  };
}

export default state;
