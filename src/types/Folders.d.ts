export type IFolderType = 'system' | 'custom'

export interface IFolder {
  icon: string
  slug: string
  type: IFolderType
}

export interface IPayloadEditFolder {
  oldName: string
  newName: string
}

export type IAddFolder = (name: string) => void // eslint-disable-line
export type IEditFolder = (payload: IPayloadEditFolder) => void // eslint-disable-line
export type IDeleteFolder = (name: string) => void // eslint-disable-line
