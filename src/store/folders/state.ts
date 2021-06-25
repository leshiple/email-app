import { IFolder } from 'src/types/Folders.d';

export interface IFoldersState {
  folders: IFolder[];
}

function state(): IFoldersState {
  return {
    folders: [
      {
        slug: 'inbox',
        icon: 'mail',
      },
      {
        slug: 'starred',
        icon: 'star',
      },
      {
        slug: 'draft',
        icon: 'drafts',
      },
      {
        slug: 'sent',
        icon: 'send',
      },
      {
        slug: 'trash',
        icon: 'delete',
      },
    ],
  };
}

export default state;
