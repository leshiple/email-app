export interface IOptionGroup {
  name: string
  value: string | number
  color?: string
}

export interface IPayloadAddGroup {
  name: string
  group: string
}

// eslint-disable-next-line
export type IFieldValidator = (val: string | number) => boolean
