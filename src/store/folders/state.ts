export interface IFoldersState {
  prop: boolean;
}

function state(): IFoldersState {
  return {
    prop: false,
  };
}

export default state;
