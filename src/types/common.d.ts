export interface IOptionGroup {
  name: string
  value: string | number
  color?: string
}

export interface IPayloadAddGroup {
  oldName: string
  newName: string
  group: string
}

// eslint-disable-next-line
export type IFieldValidator = (val: string | number) => boolean
