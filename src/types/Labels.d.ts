export interface ILabel {
  name: string
  color: string
}

export interface IPayloadEditLabel {
  oldName: string
  newName: string
  color: string
}

export type IAddLabel = (label: ILabel) => void // eslint-disable-line
export type IEditLabel = (payload: IPayloadEditLabel) => void // eslint-disable-line
export type IDeleteLabel = (name: string) => void // eslint-disable-line
