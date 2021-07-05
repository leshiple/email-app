export interface IMail {
  id: string,
  branch: string,
  author: string,
  date: number,
  text: string,
}

export interface IPayloadAddMail {
  subject?: string,
  date?: number,
  text: string,
  branch?: string,
}

export type IAddMail = (payload: IPayloadAddMail) => void //eslint-disable-line
