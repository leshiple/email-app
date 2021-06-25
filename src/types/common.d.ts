export interface IOptionGroup {
  name: string
  value: string | number
  color?: string
}

export interface IPayloadAddGroup {
  name: string
  group: string
}
